import React, { ReactNode } from 'react';
import { useSessions } from '../hooks';
import { SessionsContextType } from '../models';

export const SessionsContext = React.createContext<SessionsContextType>({ sessions: [] });

export const SessionsProvider = ({ children }: { children: ReactNode }) => {
  return <SessionsContext.Provider value={useSessions()}>{children}</SessionsContext.Provider>;
};
