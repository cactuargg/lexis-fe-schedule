import React from 'react';

import { useScheduleContext } from '../../../contexts';
import { Spinner } from './Spinner';

export const Loader = () => {
  const { isLoaded } = useScheduleContext();
  if (isLoaded) {
    return null;
  }
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center dark:bg-blue-300/50">
      <Spinner />
    </div>
  );
};
