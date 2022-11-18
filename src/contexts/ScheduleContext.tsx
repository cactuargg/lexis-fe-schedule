import React, { ReactNode, useContext } from 'react';
import { useSchedule } from '../hooks';
import { ISessionsContextType } from '../models';

export const ScheduleContext = React.createContext<ISessionsContextType>({
  sessions: [],
  rowsNumber: 0,
  days: { daysOrder: [], daysDictionary: {} },
});

export const ScheduleProvider = ({ children }: { children: ReactNode }) => (
  <ScheduleContext.Provider value={useSchedule()}>{children}</ScheduleContext.Provider>
);

export const useScheduleContext = () => useContext(ScheduleContext);
