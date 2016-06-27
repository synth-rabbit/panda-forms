/* @flow */

import {observable, action} from 'mobx';
import {
          camelToSnake,
          removeTokens,
          radioStringFormat,
          snakeToCamel,
          snakeToError,
          isNumber,
          isValidDate,
          isValidEmail,
          isValidCreditCard,
          isValidString,
          regex} from '../helpers';


export default class FormStore {
  errors: Array<string>;
  updateInfo: Function;
  validateAll: Function;
  validate: Function;
  required: Array<string>;

  @observable errors = [];
  @observable info = {};
  @observable dateFormat = '';


  constructor(info: Object, required: Array<string>, dateFormat: string){
    this.info = info;
    this.required = required;
    this.dateFormat = dateFormat;

    this.updateInfo = this.updateInfo.bind(this);
    this.updateRadio = this.updateRadio.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.validate = this.validate.bind(this);
    this.getRadioGroup = this.getRadioGroup.bind(this);
    this.getRadioGroupKeys = this.getRadioGroupKeys.bind(this);
  }



  formatErrors(type: string, errorType: string): string{
    // remove validation tokens and then return proper error message

    let cleanType = removeTokens(type);
    let formattedType = snakeToError(cleanType);

    switch(errorType){
      case 'required':
        return `${formattedType} field is required.  Please fill out ${formattedType} field.`;
      case 'date':
        return `${formattedType} format is incorrect. Please enter a date in the ${this.dateFormat} format.`;
      case 'invalid':
        return `${formattedType} field is invalid. Please enter a valid ${formattedType} value.`;
      case 'number':
        return `${formattedType} field is not a numeric value.  Please enter a numeric value.`;
      case 'length':
        return `${formattedType} field must be two digits long. Pleanse enter a two digit value.`;
      default:
        return '';
    }
  }

  getRadioGroup(key: string){
    // get the group name
    let tokens = key.split('-');
    let location = tokens.indexOf('$radiogrp');
    let group = tokens[location + 1];

    return group;
  }

  getRadioGroupKeys(key: string): Array<string>{
    let group = this.getRadioGroup(key);

    let keys = Object.keys(this.info);

    // get keys of items in group
    let groupKeys = keys.filter((key)=>{
      let isRadio = regex.radio.test(key.toLowerCase());
      let isGroup = key.toLowerCase().indexOf(group) !== -1;

      return isRadio && isGroup;
    });

    return groupKeys;
  }

  updateErrors(type: string, errorType: string, newValue: boolean){
    // if true removes error from list
    // if false checks if error is already in list
    // if not it adds error to list

    let newError = this.formatErrors(type, errorType);

    if(newValue){
      this.errors = this.errors.filter((error)=>{
        return error !== newError;
      });
    }else {
      if(this.errors.indexOf(newError) === -1){
        this.errors.push(newError);
      }
    }
  }

  updateInfo(key: string, value: any){
    // update current value
    // if checkbox or radio type handle accordingly

    let newValue = value;
    let checkbox = regex.checkbox.test(key);
    let radio = regex.radio.test(key);

    if(checkbox){
      let parseValue = (value === 'true');
      newValue = !parseValue;
    }

    if(radio && value != true){
      newValue = this.updateRadio(key);
    }else if(radio){
      newValue = false;
    }

    this.info[snakeToCamel(key)] = newValue;
    this.validate(key);
  }

  updateRadio(key: string){
    let groupKeys = this.getRadioGroupKeys(key);

    // set all the non-selected members of group to false
    groupKeys.forEach((gkey)=>{
      if(gkey !== snakeToCamel(key)){
        this.info[gkey] = false;
      }
    });

    return true;
  }

  validate(key: string): boolean{
    // validate data of info[key]

    const formattedKey = snakeToCamel(key);


    let isValid = true;

    // check if field is required

    if(this.required.indexOf(key) !== -1){
      let valid;

      // makes sure required checkbox is checked
      // if not checks if field has a value

      if(regex.checkbox.test(key)){
        valid = this.info[formattedKey];
      }else {
        valid = isValidString(this.info[formattedKey]);
      }

      if(!valid){
        isValid = false;
      }

      this.updateErrors(key, 'required', valid);

    }

    // checks if radio group is required
    if(regex.radioGroup.test(key)){
      let isRequired = false;
      let keyGroup = this.getRadioGroup(key);
      let groupKeys = this.getRadioGroupKeys(key);
      let isValid;

      this.required.forEach((item)=>{
        if(regex.radioGroup.test(item)){
          let itemGroup = this.getRadioGroup(item);

          if(itemGroup === keyGroup){
            isRequired = true;
          }
        }
      });

      //checks if at least one radio button in group is checked

      if(isRequired){

        let values = groupKeys.map((item)=>{
          return this.info[item];
        });

        isValid = values.indexOf(true) !== -1;

        this.updateErrors(keyGroup + '-radio-group', 'required', isValid);
      }
    }

    // validates date

    if(regex.date.test(key)){
      let isDate = isValidDate(this.info[formattedKey]);

      this.updateErrors(key, 'date', isDate);
      if(isDate === false){
        isValid = false;
      }
    }

    // validates email

    if(regex.email.test(key)){
      let isEmail = isValidEmail(this.info[formattedKey]);

      this.updateErrors(key, 'invalid', isEmail);

      if(isEmail === false){
        isValid = false;
      }
    }

    // validates credit Card

    if(regex.credit.test(key)){
      let isCreditCard = isValidCreditCard(this.info[formattedKey]);

      this.updateErrors(key, 'invalid', isCreditCard);

      if(isCreditCard === false){
        isValid = false;
      }
    }

    // validates credit card expiration

    if(regex.expiration.test(key)){
      let isValidNum = isNumber(this.info[formattedKey]);
      let isTwo = (this.info[formattedKey].length === 2);

      this.updateErrors(key, 'number', isValidNum);
      this.updateErrors(key, 'length', isTwo);
    }

    return isValid;
  }

  validateAll(): boolean{
    // check all of the required fields to see if they are valid
    let valid = false;

    let validation = this.required.map((item)=>{
      if(regex.radioGroup.test(item)){
        let groupKeys = this.getRadioGroupKeys(item);
        let key = radioStringFormat(camelToSnake(groupKeys[0]));

        return this.validate(camelToSnake(key));
      }else {
        return this.validate(item);
      }
    });

    if(validation.indexOf(false) === -1){
      valid = true;
    }

    return valid;
  }
}
