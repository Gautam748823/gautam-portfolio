import assistantKnowledgeData from '@/data/assistantKnowledge.json';
import type { AssistantKnowledge, AssistantResponse } from '@/types';

const assistantKnowledge = assistantKnowledgeData as AssistantKnowledge;

function getResponseById(responseId: string): AssistantResponse {
  return (
    assistantKnowledge.responses.find((response) => response.id === responseId) ??
    assistantKnowledge.responses.find(
      (response) => response.id === assistantKnowledge.assistant.fallbackResponseId,
    ) ??
    assistantKnowledge.responses[0]
  );
}

export const assistantLoader = {
  async getKnowledge(): Promise<AssistantKnowledge> {
    return assistantKnowledge;
  },

  async getResponse(responseId: string): Promise<AssistantResponse> {
    return getResponseById(responseId);
  },
};
