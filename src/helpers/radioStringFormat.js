export function radioStringFormat(key: string){
  // adds '-' between $radiobtn and $radiogrp

  let idx = key.indexOf('$radiogrp');
  let newString = key.slice(0, idx) + '-' + key.slice(idx);

  return newString;
}
