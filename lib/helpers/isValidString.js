/* @flow */

export function isValidString(data: string): boolean{
  // checks if string without spaces is larger then 0

  if(data.trim().length > 0){
    return true;
  }else {
    return false;
  }
}
