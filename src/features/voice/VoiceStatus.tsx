import type { VoiceStatus as VoiceStatusValue } from '@/types';

interface VoiceStatusProps {
  isSupported: boolean;
  status: VoiceStatusValue;
}

const statusLabels: Record<VoiceStatusValue, string> = {
  idle: 'Idle',
  listening: 'Listening',
  processing: 'Processing',
  command_found: 'Command Found',
  command_not_found: 'Command Not Found',
  error: 'Error',
};

export function VoiceStatus({ isSupported, status }: VoiceStatusProps) {
  return (
    <div className={`voice-status voice-status--${status}`} role="status">
      <span aria-hidden="true" />
      <div>
        <strong>{statusLabels[status]}</strong>
        <p>{isSupported ? 'Microphone command layer ready.' : 'Speech recognition unavailable.'}</p>
      </div>
    </div>
  );
}
