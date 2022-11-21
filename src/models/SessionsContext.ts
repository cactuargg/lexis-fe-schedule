import { IDays } from './Day';
import { IScheduleSessionEntry } from './ScheduleSessionEntry';

export interface IScheduleContext {
  sessions: IScheduleSessionEntry[];
  rowsNumber: number;
  days: IDays;
  isLoaded: boolean;
}
