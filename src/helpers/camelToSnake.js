/* @flow */

export function camelToSnake(type: string): string {
  return (
    type.replace(/([A-Z])/g, function($1){
      return '-'+$1.toLowerCase();})
  );
}
