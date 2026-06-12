import type { AssistantQuickAction, AssistantSuggestedQuestion } from '@/types';

interface QuickActionsProps {
  quickActions: readonly AssistantQuickAction[];
  suggestedQuestions: readonly AssistantSuggestedQuestion[];
  onIntent: (intentId: string, label: string) => void;
}

export function QuickActions({ quickActions, suggestedQuestions, onIntent }: QuickActionsProps) {
  return (
    <div className="assistant-quick-actions">
      <div aria-label="Assistant quick actions" className="assistant-quick-actions__grid">
        {quickActions.map((action) => (
          <button key={action.id} onClick={() => onIntent(action.intentId, action.label)} type="button">
            {action.label}
          </button>
        ))}
      </div>

      <div aria-label="Suggested questions" className="assistant-quick-actions__questions">
        {suggestedQuestions.map((question) => (
          <button
            key={question.id}
            onClick={() => onIntent(question.intentId, question.prompt)}
            type="button"
          >
            {question.label}
          </button>
        ))}
      </div>
    </div>
  );
}
