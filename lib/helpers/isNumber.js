/* @flow */

export function isNumber(data: string): boolean{
  // checks that string is all digits

  return /^\d+$/.test(data);
}
