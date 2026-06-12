import { type FormEvent, useState } from 'react';

interface TerminalInputProps {
  disabled: boolean;
  onSubmit: (command: string) => void;
}

export function TerminalInput({ disabled, onSubmit }: TerminalInputProps) {
  const [value, setValue] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = value.trim();

    if (!command) {
      return;
    }

    onSubmit(command);
    setValue('');
  }

  return (
    <form className="terminal-input" onSubmit={handleSubmit}>
      <label htmlFor="portfolio-terminal-input">Terminal command</label>
      <div className="terminal-input__control">
        <span aria-hidden="true">&gt;</span>
        <input
          autoComplete="off"
          disabled={disabled}
          id="portfolio-terminal-input"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Type help"
          type="text"
          value={value}
        />
        <button disabled={disabled || value.trim().length === 0} type="submit">
          Run
        </button>
      </div>
    </form>
  );
}
