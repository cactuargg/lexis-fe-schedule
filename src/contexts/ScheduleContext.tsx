import React, { ReactNode, useContext } from 'react';

import { useSchedule } from '../hooks';
import { IScheduleContext } from '../models';

export const ScheduleContext = React.createContext<IScheduleContext>({
  sessions: [],
  rowsNumber: 0,
  days: { order: [], dictionary: {}, matrix: [] },
  isLoaded: false,
  trim: { start: 0, end: 0 },
});

export const ScheduleProvider = ({ children }: { children: ReactNode }) => {
  const schedule = useSchedule();
  return <ScheduleContext.Provider value={schedule}>{children}</ScheduleContext.Provider>;
};

export const useScheduleContext = () => useContext(ScheduleContext);
