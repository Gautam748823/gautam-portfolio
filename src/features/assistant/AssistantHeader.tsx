import type { AssistantKnowledge } from '@/types';

interface AssistantHeaderProps {
  knowledge: AssistantKnowledge;
  onClose: () => void;
}

export function AssistantHeader({ knowledge, onClose }: AssistantHeaderProps) {
  return (
    <header className="assistant-header">
      <div>
        <span>{knowledge.assistant.title}</span>
        <h2>{knowledge.assistant.name}</h2>
        <p>{knowledge.assistant.subtitle}</p>
      </div>
      <button aria-label="Close assistant panel" onClick={onClose} type="button">
        Close
      </button>
    </header>
  );
}
