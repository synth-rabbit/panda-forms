/* @flow */

export function snakeToCamel(type: string): string{

  // replaces - and then capitalizes next letter
  // turns 'example-text' into 'exampleText'

  let formattedType = type;
  while(formattedType.indexOf('-') !== -1){
    let idx = formattedType.indexOf('-');
    let splitString = formattedType.split('');
    splitString.splice(idx, 1);
    splitString[idx] = splitString[idx].toUpperCase();
    formattedType = splitString.join('');
  }

  return formattedType;
}
