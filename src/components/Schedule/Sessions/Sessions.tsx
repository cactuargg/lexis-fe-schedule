import React from 'react';

import { useScheduleContext } from '../../../contexts';
import { SessionCell } from './SessionCell';

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
