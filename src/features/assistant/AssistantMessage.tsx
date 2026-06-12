import type { AssistantConversationMessage, AssistantResponse } from '@/types';

interface AssistantMessageProps {
  message: AssistantConversationMessage;
  onSuggestion: (intentId: string, label: string) => void;
}

function AssistantResponseView({
  response,
  onSuggestion,
}: {
  response: AssistantResponse;
  onSuggestion: (intentId: string, label: string) => void;
}) {
  return (
    <div className="assistant-message__response">
      <h3>{response.title}</h3>
      <p>{response.summary}</p>

      {response.bullets.length > 0 ? (
        <ul>
          {response.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {response.links.length > 0 ? (
        <div className="assistant-message__links" aria-label={`${response.title} links`}>
          {response.links.map((link) => (
            <a
              href={link.href}
              key={link.id}
              rel={link.external ? 'noreferrer' : undefined}
              target={link.external ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      {response.suggestions.length > 0 ? (
        <div className="assistant-message__suggestions" aria-label={`${response.title} suggestions`}>
          {response.suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => onSuggestion(suggestion.intentId, suggestion.label)}
              type="button"
            >
              {suggestion.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function AssistantMessage({ message, onSuggestion }: AssistantMessageProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <article className={`assistant-message assistant-message--${message.role}`}>
      <span className="assistant-message__role">{isAssistant ? 'AI Core' : 'Visitor'}</span>
      {message.response ? (
        <AssistantResponseView response={message.response} onSuggestion={onSuggestion} />
      ) : (
        <p>{message.content}</p>
      )}
    </article>
  );
}
