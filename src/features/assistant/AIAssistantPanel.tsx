import { useEffect, useMemo, useRef, useState } from 'react';
import { assistantLoader } from '@/data';
import type { AssistantConversationMessage, AssistantKnowledge, AssistantResponse } from '@/types';
import {
  resolveAssistantResponse,
  resolveAssistantResponseByIntent,
} from './assistantEngine';
import { AssistantHeader } from './AssistantHeader';
import { AssistantInput } from './AssistantInput';
import { AssistantLauncher } from './AssistantLauncher';
import { AssistantMessage } from './AssistantMessage';
import { QuickActions } from './QuickActions';

function createAssistantMessage(response: AssistantResponse): AssistantConversationMessage {
  return {
    id: `assistant-${response.id}-${Date.now()}`,
    role: 'assistant',
    content: response.summary,
    response,
  };
}

function createVisitorMessage(content: string): AssistantConversationMessage {
  return {
    id: `visitor-${Date.now()}`,
    role: 'visitor',
    content,
  };
}

export function AIAssistantPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [knowledge, setKnowledge] = useState<AssistantKnowledge | null>(null);
  const [messages, setMessages] = useState<readonly AssistantConversationMessage[]>([]);
  const conversationRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let isActive = true;

    void assistantLoader.getKnowledge().then((assistantKnowledge) => {
      if (!isActive) {
        return;
      }

      const greeting = assistantKnowledge.responses.find(
        (response) => response.id === assistantKnowledge.assistant.greetingResponseId,
      );

      setKnowledge(assistantKnowledge);
      setMessages(greeting ? [createAssistantMessage(greeting)] : []);
    });

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    panelRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    conversationRef.current?.scrollTo({
      top: conversationRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const panelTitle = useMemo(() => knowledge?.assistant.name ?? 'Digital Assistant', [knowledge]);

  function appendResponse(queryLabel: string, response: AssistantResponse) {
    setMessages((currentMessages) => [
      ...currentMessages,
      createVisitorMessage(queryLabel),
      createAssistantMessage(response),
    ]);
  }

  function handleQuery(value: string) {
    if (!knowledge) {
      return;
    }

    appendResponse(value, resolveAssistantResponse(knowledge, value));
  }

  function handleIntent(intentId: string, label: string) {
    if (!knowledge) {
      return;
    }

    appendResponse(label, resolveAssistantResponseByIntent(knowledge, intentId));
  }

  return (
    <aside className="ai-assistant" aria-label="Digital assistant">
      <AssistantLauncher isOpen={isOpen} onClick={() => setIsOpen((current) => !current)} />

      {isOpen && knowledge ? (
        <section
          aria-labelledby="ai-assistant-title"
          className="ai-assistant-panel"
          id="ai-assistant-panel"
          ref={panelRef}
          tabIndex={-1}
        >
          <AssistantHeader knowledge={knowledge} onClose={() => setIsOpen(false)} />
          <h2 className="assistant-panel__sr-title" id="ai-assistant-title">
            {panelTitle}
          </h2>

          <div
            aria-label="Assistant conversation"
            aria-live="polite"
            className="assistant-conversation"
            ref={conversationRef}
          >
            {messages.map((message) => (
              <AssistantMessage key={message.id} message={message} onSuggestion={handleIntent} />
            ))}
          </div>

          <QuickActions
            onIntent={handleIntent}
            quickActions={knowledge.quickActions}
            suggestedQuestions={knowledge.suggestedQuestions}
          />
          <AssistantInput disabled={!knowledge} onSubmit={handleQuery} />
        </section>
      ) : null}
    </aside>
  );
}
