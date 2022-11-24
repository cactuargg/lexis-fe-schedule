import { IDays } from './Day';
import { IScheduleSessionEntry } from './ScheduleSessionEntry';
import { IStartEnd } from './StartEnd';

export interface IScheduleContext {
  sessions: IScheduleSessionEntry[];
  rowsNumber: number;
  days: IDays;
  isLoaded: boolean;
  trim: IStartEnd;
}
