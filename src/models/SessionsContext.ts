import { IScheduleSessionEntry } from './ScheduleSessionEntry';
import { IDays } from './Day';

export interface ISessionsContextType {
  sessions: IScheduleSessionEntry[];
  rowsNumber: number;
  days: IDays;
}
