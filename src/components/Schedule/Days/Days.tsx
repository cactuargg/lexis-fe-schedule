import React from 'react';

import { useScheduleContext } from '../../../contexts';
import { Day } from './Day';

export const Days = () => {
  const { days } = useScheduleContext();
  return (
    <>
      {days.order.map((dayName) => {
        const day = days.dictionary[dayName];
        return <Day key={day.name} {...day} />;
      })}
    </>
  );
};
