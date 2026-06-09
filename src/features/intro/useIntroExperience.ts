import { useCallback, useState } from 'react';

export function useIntroExperience() {
  const [isBooting, setIsBooting] = useState(true);

  const completeIntro = useCallback(() => {
    setIsBooting(false);
  }, []);

  return {
    isBooting,
    completeIntro,
  };
}
