export type AssistantResponseType = 'text' | 'list' | 'links' | 'actions';

export interface AssistantIntent {
  id: string;
  label: string;
  keywords: readonly string[];
  responseId: string;
}

export interface AssistantLink {
  id: string;
  label: string;
  href: string;
  external: boolean;
}

export interface AssistantActionSuggestion {
  id: string;
  label: string;
  intentId: string;
}

export interface AssistantResponse {
  id: string;
  title: string;
  type: AssistantResponseType;
  summary: string;
  bullets: readonly string[];
  links: readonly AssistantLink[];
  suggestions: readonly AssistantActionSuggestion[];
}

export interface AssistantSuggestedQuestion {
  id: string;
  label: string;
  prompt: string;
  intentId: string;
}

export interface AssistantQuickAction {
  id: string;
  label: string;
  intentId: string;
}

export interface AssistantKnowledge {
  assistant: {
    name: string;
    title: string;
    subtitle: string;
    greetingResponseId: string;
    fallbackResponseId: string;
  };
  intents: readonly AssistantIntent[];
  responses: readonly AssistantResponse[];
  suggestedQuestions: readonly AssistantSuggestedQuestion[];
  quickActions: readonly AssistantQuickAction[];
}

export interface AssistantConversationMessage {
  id: string;
  role: 'assistant' | 'visitor';
  content: string;
  response?: AssistantResponse;
}
