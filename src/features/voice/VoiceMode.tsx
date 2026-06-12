import { useEffect, useRef, useState } from 'react';
import { voiceLoader } from '@/data';
import type {
  SpeechRecognitionEventLike,
  SpeechRecognitionLike,
  VoiceCommand,
  VoiceCommandData,
  VoiceStatus,
  VoiceWindow,
} from '@/types';
import { resolveVoiceCommand } from './voiceEngine';
import { VoiceLauncher } from './VoiceLauncher';
import { VoicePanel } from './VoicePanel';

function getSpeechRecognitionConstructor() {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const voiceWindow = window as VoiceWindow;
  return voiceWindow.SpeechRecognition ?? voiceWindow.webkitSpeechRecognition;
}

function speakResponse(message: string, enabled: boolean) {
  if (!enabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(message));
}

function performVoiceAction(command: VoiceCommand | null) {
  if (!command?.targetSection) {
    return;
  }

  if (command.actionType === 'navigate') {
    document.getElementById(command.targetSection)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    return;
  }

  if (command.actionType === 'external_link') {
    window.open(command.targetSection, '_blank', 'noreferrer');
  }
}

export function VoiceMode() {
  const [commandData, setCommandData] = useState<VoiceCommandData | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [lastCommand, setLastCommand] = useState('');
  const [response, setResponse] = useState('');
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [status, setStatus] = useState<VoiceStatus>('idle');
  const [transcript, setTranscript] = useState('');
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    let isActive = true;

    void voiceLoader.getCommands().then((commands) => {
      if (isActive) {
        setCommandData(commands);
        setResponse(commands.system.idleMessage);
      }
    });

    setIsSupported(Boolean(getSpeechRecognitionConstructor()));

    return () => {
      isActive = false;
      recognitionRef.current?.stop();
    };
  }, []);

  function processTranscript(value: string) {
    if (!commandData) {
      return;
    }

    setStatus('processing');
    const match = resolveVoiceCommand(commandData, value);

    setLastCommand(match.command?.label ?? value);
    setResponse(match.response);
    setStatus(match.found ? 'command_found' : 'command_not_found');
    performVoiceAction(match.command);
    speakResponse(match.response, speechEnabled);
  }

  function startListening() {
    const Recognition = getSpeechRecognitionConstructor();

    if (!Recognition) {
      setStatus('error');
      setResponse(commandData?.system.unsupportedMessage ?? 'Speech recognition is unavailable.');
      return;
    }

    const recognition = new Recognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEventLike) => {
      const latestResult = event.results[event.results.length - 1];
      const latestTranscript = latestResult[0]?.transcript ?? '';

      setTranscript(latestTranscript);

      if (latestResult.isFinal) {
        setIsListening(false);
        processTranscript(latestTranscript);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setStatus('error');
      setResponse('Voice recognition encountered an error. Try again or use the command chips.');
    };

    recognition.onend = () => {
      setIsListening(false);
      setStatus((currentStatus) => (currentStatus === 'listening' ? 'idle' : currentStatus));
    };

    recognitionRef.current = recognition;
    setTranscript('');
    setStatus('listening');
    setIsListening(true);
    recognition.start();
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setIsListening(false);
    setStatus('idle');
  }

  function closeVoicePanel() {
    stopListening();
    setIsOpen(false);
    launcherRef.current?.focus();
  }

  return (
    <aside className="voice-mode" aria-label="Voice portfolio system">
      <VoiceLauncher
        isOpen={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        ref={launcherRef}
      />

      {isOpen && commandData ? (
        <VoicePanel
          commandData={commandData}
          isListening={isListening}
          isSupported={isSupported}
          lastCommand={lastCommand}
          onClose={closeVoicePanel}
          onStart={startListening}
          onStop={stopListening}
          onSuggestion={processTranscript}
          onToggleSpeech={() => setSpeechEnabled((current) => !current)}
          response={response}
          speechEnabled={speechEnabled}
          status={status}
          transcript={transcript}
        />
      ) : null}
    </aside>
  );
}
