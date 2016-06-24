/* @flow */

export function snakeToError(type: string): string{
  // splits type then capitalizes each word
  // turns 'example-text' into 'Example Text'

  let format = type.split('-');

  format = format.map((item)=>{
    return item[0].toUpperCase() + item.slice(1);
  });

  let formattedType = format.join(' ');

  return formattedType;
}
