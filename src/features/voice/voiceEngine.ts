import type { VoiceCommand, VoiceCommandData, VoiceCommandMatch } from '@/types';

export function normalizeSpeech(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scorePhrase(phrase: string, transcript: string): number {
  const normalizedPhrase = normalizeSpeech(phrase);

  if (!normalizedPhrase) {
    return 0;
  }

  if (transcript === normalizedPhrase) {
    return 20;
  }

  if (transcript.includes(normalizedPhrase)) {
    return normalizedPhrase.split(' ').length * 4;
  }

  const transcriptWords = transcript.split(' ');

  return normalizedPhrase.split(' ').reduce((score, word) => {
    if (word.length > 2 && transcriptWords.includes(word)) {
      return score + 1;
    }

    return score;
  }, 0);
}

export function matchVoiceIntent(
  commands: readonly VoiceCommand[],
  transcript: string,
): VoiceCommand | null {
  const normalizedTranscript = normalizeSpeech(transcript);

  if (!normalizedTranscript) {
    return null;
  }

  const rankedCommands = commands
    .map((command) => ({
      command,
      score: Math.max(...command.spokenPhrases.map((phrase) => scorePhrase(phrase, normalizedTranscript))),
    }))
    .sort((first, second) => second.score - first.score);

  const bestMatch = rankedCommands[0];

  if (!bestMatch || bestMatch.score <= 0) {
    return null;
  }

  return bestMatch.command;
}

export function resolveVoiceCommand(
  commandData: VoiceCommandData,
  transcript: string,
): VoiceCommandMatch {
  const command = matchVoiceIntent(commandData.commands, transcript);

  if (!command) {
    return {
      command: null,
      transcript,
      response: commandData.system.fallbackResponse,
      found: false,
    };
  }

  return {
    command,
    transcript,
    response: command.response,
    found: true,
  };
}
