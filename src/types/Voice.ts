export type VoiceActionType = 'navigate' | 'external_link' | 'help';

export type VoiceStatus =
  | 'idle'
  | 'listening'
  | 'processing'
  | 'command_found'
  | 'command_not_found'
  | 'error';

export interface VoiceCommand {
  id: string;
  label: string;
  spokenPhrases: readonly string[];
  actionType: VoiceActionType;
  targetSection: string | null;
  response: string;
}

export interface VoiceCommandData {
  system: {
    title: string;
    subtitle: string;
    idleMessage: string;
    unsupportedMessage: string;
    fallbackResponse: string;
  };
  commands: readonly VoiceCommand[];
}

export interface VoiceCommandMatch {
  command: VoiceCommand | null;
  transcript: string;
  response: string;
  found: boolean;
}

export interface SpeechRecognitionAlternativeLike {
  transcript: string;
}

export interface SpeechRecognitionResultLike {
  readonly length: number;
  readonly isFinal: boolean;
  [index: number]: SpeechRecognitionAlternativeLike;
}

export interface SpeechRecognitionEventLike extends Event {
  readonly results: {
    readonly length: number;
    [index: number]: SpeechRecognitionResultLike;
  };
}

export interface SpeechRecognitionErrorEventLike extends Event {
  readonly error: string;
}

export interface SpeechRecognitionLike extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
  stop: () => void;
}

export interface SpeechRecognitionConstructorLike {
  new (): SpeechRecognitionLike;
}

export interface VoiceWindow extends Window {
  SpeechRecognition?: SpeechRecognitionConstructorLike;
  webkitSpeechRecognition?: SpeechRecognitionConstructorLike;
}
