import { formatToDualNumberTime } from './formatToDualNumberTime';

export function formatHours(hours: number) {
  const newHours = hours % 12;
  return formatToDualNumberTime(newHours || 12);
}
