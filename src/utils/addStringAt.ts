export function addStringAt(str: string, index: number, add: string) {
  return str.substring(0, index) + add + str.substring(index);
}
