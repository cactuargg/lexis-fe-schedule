export function formatToDualNumberTime(time: number) {
  return time < 10 ? `0${time}` : time;
}
