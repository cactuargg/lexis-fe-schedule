import React from 'react';

import { IDays } from './Day';
import { IScheduleSessionEntry } from './ScheduleSessionEntry';
import { IStartEnd } from './StartEnd';

export interface IOnSuccessCallbackParams {
  days: IDays;
  setSessions: React.Dispatch<React.SetStateAction<IScheduleSessionEntry[]>>;
  setRowsNumber: React.Dispatch<React.SetStateAction<number>>;
  trim: IStartEnd;
}
