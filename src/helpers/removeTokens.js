/* @flow */

export function removeTokens(type: string): string{
  // removes validator tokens from string

  let tokens = type.split('-');
  let sorted = tokens.filter((token)=>{
    return token.indexOf('$') === -1;
  });

  return sorted.join('-');
}
