import { useCallback, useState } from 'react';

export const useLoadingState = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const startFetchCallback = useCallback(() => setIsLoaded(false), []);
  const finishFetchCallback = useCallback(() => setIsLoaded(true), []);

  return {
    isLoaded,
    startFetchCallback,
    finishFetchCallback,
  };
};
