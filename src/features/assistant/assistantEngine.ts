import type { AssistantIntent, AssistantKnowledge, AssistantResponse } from '@/types';

function normalizeInput(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreIntent(intent: AssistantIntent, normalizedInput: string): number {
  return intent.keywords.reduce((score, keyword) => {
    const normalizedKeyword = normalizeInput(keyword);

    if (!normalizedKeyword) {
      return score;
    }

    if (normalizedInput === normalizedKeyword) {
      return score + 12;
    }

    if (normalizedInput.includes(normalizedKeyword)) {
      return score + normalizedKeyword.split(' ').length * 3;
    }

    return normalizedKeyword.split(' ').reduce((wordScore, word) => {
      if (word.length > 2 && normalizedInput.split(' ').includes(word)) {
        return wordScore + 1;
      }

      return wordScore;
    }, score);
  }, 0);
}

function getResponse(knowledge: AssistantKnowledge, responseId: string): AssistantResponse {
  return (
    knowledge.responses.find((response) => response.id === responseId) ??
    knowledge.responses.find((response) => response.id === knowledge.assistant.fallbackResponseId) ??
    knowledge.responses[0]
  );
}

export function resolveAssistantResponse(
  knowledge: AssistantKnowledge,
  input: string,
): AssistantResponse {
  const normalizedInput = normalizeInput(input);

  if (!normalizedInput) {
    return getResponse(knowledge, knowledge.assistant.greetingResponseId);
  }

  const rankedIntents = knowledge.intents
    .map((intent) => ({
      intent,
      score: scoreIntent(intent, normalizedInput),
    }))
    .sort((first, second) => second.score - first.score);

  const matchedIntent = rankedIntents[0];

  if (!matchedIntent || matchedIntent.score <= 0) {
    return getResponse(knowledge, knowledge.assistant.fallbackResponseId);
  }

  return getResponse(knowledge, matchedIntent.intent.responseId);
}

export function resolveAssistantResponseByIntent(
  knowledge: AssistantKnowledge,
  intentId: string,
): AssistantResponse {
  const intent = knowledge.intents.find((item) => item.id === intentId);

  if (!intent) {
    return getResponse(knowledge, knowledge.assistant.fallbackResponseId);
  }

  return getResponse(knowledge, intent.responseId);
}
