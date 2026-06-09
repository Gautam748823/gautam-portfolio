import { useEffect, useMemo, useState } from 'react';
import { prefersReducedMotion } from '@/utils/accessibility';

const bootMessages = [
  'Initializing Gautam AI...',
  'Loading Projects...',
  'Loading Skills...',
  'Loading Knowledge Base...',
  'System Ready.',
] as const;

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const shouldReduceMotion = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    const stepDuration = shouldReduceMotion ? 90 : 620;
    const exitDuration = shouldReduceMotion ? 0 : 420;

    if (activeIndex < bootMessages.length - 1) {
      const messageTimer = window.setTimeout(() => {
        setActiveIndex((currentIndex) => currentIndex + 1);
      }, stepDuration);

      return () => window.clearTimeout(messageTimer);
    }

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, shouldReduceMotion ? 150 : 520);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, (shouldReduceMotion ? 150 : 520) + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [activeIndex, onComplete, shouldReduceMotion]);

  const currentMessage = bootMessages[activeIndex];

  return (
    <section
      aria-label="AI system initialization"
      aria-live="polite"
      className={`boot-sequence${isExiting ? ' boot-sequence--exit' : ''}`}
    >
      <div className="boot-sequence__panel">
        <p className="boot-sequence__eyebrow">Gautam AI Command Center</p>
        <div className="boot-sequence__terminal" role="status">
          <span aria-hidden="true" className="boot-sequence__prompt">
            &gt;
          </span>
          <span className="boot-sequence__message" key={currentMessage}>
            {currentMessage}
          </span>
        </div>
        <ol className="boot-sequence__log" aria-label="Initialization progress">
          {bootMessages.map((message, index) => (
            <li
              className={index <= activeIndex ? 'boot-sequence__log-item--active' : undefined}
              key={message}
            >
              <span aria-hidden="true" />
              {message}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
