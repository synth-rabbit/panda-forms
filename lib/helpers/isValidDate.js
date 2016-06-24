/* @flow */

export function isValidDate(date: string): boolean {
  let parts = date.split('/');
  let day;
  let month;
  let year;

  // Check if MM/DD/YYYY or YYYY/MM/DD
  if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)){
    day   = parseInt(parts[1], 10);
    month = parseInt(parts[0], 10);
    year  = parseInt(parts[2], 10);
  }else if(/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(date)){
    day   = parseInt(parts[2], 10);
    month = parseInt(parts[1], 10);
    year  = parseInt(parts[0], 10);
  }else {
    return false;
  }

  // Check the ranges of month and year
  if(year < 1000 || year > 3000 || month == 0 || month > 12){
    return false;
  }

  var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  // Adjust for leap years
  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
    monthLength[1] = 29;
  }

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}
