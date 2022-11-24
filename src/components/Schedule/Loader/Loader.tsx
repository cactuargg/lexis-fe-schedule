import React from 'react';

import { useScheduleContext } from '../../../contexts';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

export const Loader = () => {
  const { isLoaded } = useScheduleContext();
  return (
    <div
      className="sticky top-0 z-10 flex justify-center items-center bg-black"
      style={{ gridColumnStart: 1, gridRowStart: 1, width: 100 }}
    >
      {isLoaded ? <Icon /> : <Spinner />}
    </div>
  );
};
