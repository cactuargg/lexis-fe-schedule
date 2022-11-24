export function replaceStringAt(str: string, index: number, replacement: string) {
  return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}
