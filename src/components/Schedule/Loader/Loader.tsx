import React from 'react';

import { useScheduleContext } from '../../../contexts';
import { Icon } from './Icon';
import css from './Loader.module.css';
import { Spinner } from './Spinner';

export const Loader = () => {
  const { isLoaded } = useScheduleContext();
  return (
    <div className={css.Container} style={{ gridColumnStart: 1, gridRowStart: 1, width: 100 }}>
      {isLoaded ? <Icon /> : <Spinner />}
    </div>
  );
};
//
