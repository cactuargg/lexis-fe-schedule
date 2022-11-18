import { formatHours } from './formatHours';
import { formatToDualNumberTime } from './formatToDualNumberTime';

export function formatToAMPM(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = `${formatHours(hours)}`;
  const formattedMinutes = `${formatToDualNumberTime(minutes)}`;
  return [`${formattedHours}:${formattedMinutes} ${ampm}`, formattedHours, formattedMinutes, ampm];
}
