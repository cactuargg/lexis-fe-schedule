import React from 'react';
import { useScheduleContext } from '../../../contexts';
import { Day } from './Day';

export const Days = () => {
  const { days } = useScheduleContext();
  return (
    <>
      {days.daysOrder.map((dayName) => {
        const day = days.daysDictionary[dayName];
        return <Day key={day.name} {...day} />;
      })}
    </>
  );
};
