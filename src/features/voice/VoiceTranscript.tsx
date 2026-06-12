interface VoiceTranscriptProps {
  lastCommand: string;
  response: string;
  transcript: string;
}

export function VoiceTranscript({ lastCommand, response, transcript }: VoiceTranscriptProps) {
  return (
    <div className="voice-transcript" aria-live="polite">
      <div>
        <span>Live transcript</span>
        <p>{transcript || 'Waiting for speech input.'}</p>
      </div>
      <div>
        <span>Last command</span>
        <p>{lastCommand || 'No command recognized yet.'}</p>
      </div>
      <div>
        <span>Response</span>
        <p>{response || 'Voice response will appear here.'}</p>
      </div>
    </div>
  );
}
