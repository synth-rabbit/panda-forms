/* @flow */

export function isValidEmail(data: string): boolean{
  var email = require('email-validation');

  // checks that email is a valid format
  return email.valid(data);
}
