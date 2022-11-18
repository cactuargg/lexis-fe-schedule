import React from 'react';
import { SessionCell } from './SessionCell';
import { useScheduleContext } from '../../../contexts';

export const Sessions = () => {
  const { sessions } = useScheduleContext();

  return (
    <>
      {sessions.map((session) => (
        <SessionCell
          key={`${session.gridRow}-${session.gridColumnStart}-${session.gridColumnEnd}`}
          {...session}
        />
      ))}
    </>
  );
};
