import { type FormEvent, useState } from 'react';

interface AssistantInputProps {
  disabled: boolean;
  onSubmit: (value: string) => void;
}

export function AssistantInput({ disabled, onSubmit }: AssistantInputProps) {
  const [value, setValue] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    onSubmit(trimmedValue);
    setValue('');
  }

  return (
    <form className="assistant-input" onSubmit={handleSubmit}>
      <label className="assistant-input__label" htmlFor="assistant-query">
        Ask the portfolio assistant
      </label>
      <div className="assistant-input__control">
        <input
          autoComplete="off"
          disabled={disabled}
          id="assistant-query"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ask about Gautam..."
          type="text"
          value={value}
        />
        <button disabled={disabled || value.trim().length === 0} type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
