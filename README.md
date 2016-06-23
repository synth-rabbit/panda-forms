[docs](#documentation)

# Panda Forms

Panda Forms is a form library made with react and mobx to provide a way to rapidly develop forms with basic front end validation. Panda Forms comes pre-built with validation for expiration dates on credit cards, credit cards, dates, email addresses, and required fields.  There is built in styles for all of the form elements but you are not required to use them for Panda Forms to function.

## Simple Example

```javascript
  // App.js

  import {observer} from 'mobx-react';

  import Form, FormRow, TextInputGroup, GroupContainer, RadioButtonGroup from 'panda-form';

  @observer
  export default class App extends React.Component {
    constructor(props){
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type, event){
      this.props.formStore.updateInfo(type, event.target.value);
    }

    handleSubmit(){
      let canSubmit = this.props.formStore.validateAll();

      if(canSubmit){
        // code to submit form
      }
    }

    render(){
      let values = this.props.formStore.info;

      return(
        <Form title='Example' styleClass='panda-form'>
          <FormRow styleClass='form-row'>
            <TextInputGroupgroup
              Width='49%'inputWidth='100%'
              label='Email Input'
              required={true}
              changeFunction={this.handleChange}id={'$email-email'}
              value={values.$emailEmail}
              placeholder='Enter Text'
              inputStyleClass='text-group__text-input'
              labelStyleClass='text-group__label'/>
              <GroupContainergroup
                Width='49%'
                label='Check Box Group'
                labelStyleClass='group-container__label'
                required={false}
              >
                <CheckboxGroup
                  inputStyleClass='checkbox-group__checkbox'
                  labelStyleClass='checkbox-group__label'
                  groupStyleClass='checkbox-group'
                  checked={values.$checkboxCheckboxA}
                  id='$checkbox-checkbox-a'
                  required={true}
                  groupWidth='100%'
                  label='Check this box A'
                  changeFunction={this.handleChange}
                />
                <CheckboxGroup
                  inputStyleClass='checkbox-group__checkbox'
                  labelStyleClass='checkbox-group__label'
                  groupStyleClass='checkbox-group'
                  checked={values.$checkboxCheckboxB}
                  id='$checkbox-checkbox-b'
                  required={false}
                  groupWidth='100%'
                  label='Check this box B'
                  changeFunction={this.handleChange}
                />
                <CheckboxGroup
                  inputStyleClass='checkbox-group__checkbox'
                  labelStyleClass='checkbox-group__label'
                  groupStyleClass='checkbox-group'
                  checked={values.$checkboxCheckboxC}
                  id='$checkbox-checkbox-c'
                  required={false}
                  groupWidth='100%'
                  label='Check this box C'
                  changeFunction={this.handleChange}
                />
              </GroupContainer>
          </FormRow>
        </Form>
      )
    }
  }
```

```javascript
// Main.js

  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App.jsx';
  import 'babel-polyfill';

  import FormStore from './stores/FormStore';

  const initialInfo = {
    $emailEmail: '',
    $checkboxCheckboxA: '',
    $checkboxCheckboxB: '',
    $checkboxCheckboxC: ''
  }

  const required = ['$email-email', '$checkbox-checkbox-a'];

  const dateFormat = 'MM/DD/YYYY';

  let formStore = new FormStore(initialInfo, required, dateFormat);

  ReactDOM.render(
    <App formStore={formStore} />,
    document.getElementById('app')
  );
```

## <a name='documentation'></a> Documentation

### [styles](#styles)
* [Styles](#styles)

### [components](#components)
* [CheckboxGroup](#checkboxgroup)
* [DateInputGroup](#dateinputgroup)
* [ExpirationInputGroup](#expirationgroup)
* [ErrorGroup](#errorgroup)
* [Form](#form)
* [FormRow](#formrow)
* [FormButton](#formbutton)
* [GroupContainer](#groupcontainer)
* [RadioButtonGroup](#radiobuttongroup)
* [SelectGroup](#selectgroup)
* [TextBoxGroup](#textboxgroup)
* [TextInputGroup](#textinputgroup)

### [store](#store)
* [formStore](#formstore)
* [validation](#validation)

### [utils](#utils)
* [camelToSnake](#cameltosnake)
* [isNumber](#isnumber)
* [isValidCreditCard](#isvalidcreditcard)
* [isValidDate](#isdaliddate)
* [isValidEmail](#isvalidemail)
* [isValidString](#isvalidstring)
* [radioStringFormat](#radiostringformat)
* [regex](#regex)
* [removeTokens](#removetokens)
* [snakeToCamel](#snaketocamel)
* [snakeToError](#snaketoerror)




## Styles <a name='styles'></a>

To use the default styles include the panda-form.css stylesheet found in lib/assets and follow the naming conventions outlined below.




## Components <a name='components'></a>

Have the changeFunction on components call this.props.formStore.updateInfo to properly validate

* [CheckboxGroup](#checkboxgroup)
* [DateInputGroup](#dateinputgroup)
* [ExpirationInputGroup](#expirationgroup)
* [ErrorGroup](#errorgroup)
* [Form](#form)
* [FormRow](#formrow)
* [FormButton](#formbutton)
* [GroupContainer](#groupcontainer)
* [RadioButtonGroup](#radiobuttongroup)
* [SelectGroup](#selectgroup)
* [TextBoxGroup](#textboxgroup)
* [TextInputGroup](#textinputgroup)

___


### CheckboxGroup <a name='checkboxgroup'></a>

creates a checkbox with a label to the right

group multiple checkboxes inside of a group container

must have $checkbox token in front of checked prop and id prop
to function correctly

#### PropTypes
* **groupWidth :** string
* **label :** string
* **labelStyleClass :** string
* **changeFunction :** function *required*
* **checked :** boolean *required*
* **groupStyleClass :** string *required*
* **id :** string *required*
* **inputStyleClass :** string *required*
* **required :** boolean *required*

#### Config (for default style and validation)
```javascript
  inputStyleClass='checkbox-group__checkbox'
  labelStyleClass='checkbox-group__label'
  groupStyleClass='checkbox-group'
  checked={this.props.formStore.info.$checkboxWhateverYouWant
  id='$checkbox-whatever-you-want'
```


___


### ErrorGroup <a name='errorgroup'></a>

creates a box to display errors

use formStore.errors if not managing yourself

include stylesheet for default styles

#### PropTypes
* **errors** array<string> *required*

#### Config (for default behavior)
```javascript
  errors={this.props.formStore.errors}
```


___


### ExpirationInputGroup <a name='expirationinputgroup'></a>

displays credit card expiration inputs

currently only supports 2 digit lengths for month and year

must have $expiration token in front of value and id prop
to function correctly

#### PropTypes
* **groupStyleClass :** string
* **groupWidth :** string
* **label :** string
* **labelStyleClass :** string
* **monthMaxLength :** number
* **monthPlaceholder :** string
* **monthStyleClass :** string
* **monthWidth :** string
* **yearMaxLength :** number  
* **yearPlaceholder :** string
* **yearStyleClass :** string
* **yearWidth :** string
* **changeFunction :** function *required*
* **idMonth :** string *required*
* **idYear :** string *required*
* **required :** boolean *required*
* **valueMonth :** string *required*
* **valueYear :** string *required*

#### Config (for default style and validation)
```javascript
  monthStyleClass='expiration-group__text-input'
  yearStyleClass='expiration-group__text-input'
  valueMonth={values.$expirationWhatever}
  valueYear={values.$expirationWhatever}
  idMonth='$expiration-whatever'
  idYear='$expiration-whatever'
  monthMaxLength={2}
  yearMaxLength={2}
```


___


### Form <a name='form'></a>

acts as a container for other components.  not required for other components to work

#### PropTypes
* **title :** string
* **styleClass :** string
* **styles :** object

#### Config (for default style)
```javascript
  styleClass='panda-form'
```

#### Example
```javascript
  <Form styleClass='panda-form'>
    <child-component />
    <child-component />
    <child-component />
  </FormRow>
```


___


### FormButton <a name='formbutton'></a>

calls the submit function.  submit function should call formStore.validateAll.

include stylesheet for default style

symbol is what follows after text

#### PropTypes  
* **styleClass :** string
* **symbol :** string
* **submitFunction :** function *required*
* **text :** string *required*

#### Config (for default style)


___


### FormRow <a name='formrow'></a>

wraps other components into a row

doesn't do anything if stylesheet not used

#### PropTypes
* **styleClass :** string

#### Config (for default style)
```javascript
  styleClass='form-row'
```

#### Example
```javascript
  <FormRow styleClass='form-row'>
    <child-component />
    <child-component />
    <child-component />
  </FormRow>
```


___


### GroupContainer

used to wrap groups of elements (mostly checkboxs or radio buttons)

required set to true will put an asterisk next to the label

#### PropTypes
* **groupStyleClass :** string
* **groupWidth :** string
* **label :** string
* **labelStyleClass :** string
* **required :** boolean *required*

#### Config (for default style)
```javascript
  labelStyleClass='group-container__label'
```

#### Example
```javascript
  <GroupContainer
    groupWidth='49%'
    label='Group'
    labelStyleClass='group-container__label'
    required={true}
  >
    <child-component />
    <child-component />
    <child-component />
  </GroupContainer>
```


___


### RadioButtonGroup <a name='radiobuttongroup'></a>

creates a radio button with a label to the right

group multiple radio buttons inside of a group container

must have $radiobtn$radiogrpGroupname token in front of checked prop and id prop
to function correctly

can only be used in groups for select one (ie no multiselct within a group)

you can have multiple radio button groups they just need a different group name

#### PropTypes
* **groupWidth :** string
* **label :** string
* **labelStyleClass :** string
* **changeFunction :** function *required*
* **checked :** boolean *required*
* **groupStyleClass :** string *required*
* **id :** string *required*
* **inputStyleClass :** string *required*
* **required :** boolean *required*

#### Config (for default style and validation)
```javascript
  inputStyleClass='radio-button-group__button'
  labelStyleClass='radio-button-group__label'
  groupStyleClass='radio-button-group'
  checked={values.$radiobtn$radiogrpGroupnameWhatever}
  id='$radiobtn-$radiogrp-cats-groupname-whatever'
```


___


### SelectGroup <a name='selectgroup'></a>

creates a select box

#### PropTypes
* **groupStyleClass :** string
* **groupWidth :** string
* **inputStyleClass :** string
* **inputWidth :** string
* **label :** string
* **labelStyleClass :** string
* **maxLength :** number
* **placeholder :** string
* **changeFunction :** function *required*
* **id :** string *required*
* **options :** array<string> *required
* **required :** boolean *required*
* **value :** string *required*

#### Config (for default style and validation)
```javascript
  inputStyleClass='select-group__select'
  labelStyleClass='text-group__label'
  value={this.props.formStore.info.whatever}
```


___


### TextBoxGroup <a name='textboxgroup'></a>

creates a text area input  

#### PropTypes
* **groupStyleClass :** string
* **groupWidth :** string
* **inputStyleClass :** string
* **inputWidth :** string
* **label :** string
* **labelStyleClass :** string
* **maxLength :** number
* **placeholder :** string
* **rows :** number
* **changeFunction :** function *required*
* **id :** string *required*
* **required :** boolean *required*
* **value :** string *required*

#### Config (for default style and validation)
```javascript
  inputStyleClass='text-box__input'
  labelStyleClass='text-group__label'
  value={this.props.formStore.info.whatever}
```


  ___


### TextInputGroup <a name='textinputgroup'></a>

creates a text input  

must have $credit token or $email token (if being used for those) in front of value and id prop
to function correctly

#### PropTypes
* **groupStyleClass :** string
* **groupWidth :** string
* **inputStyleClass :** string
* **inputWidth :** string
* **label :** string
* **labelStyleClass :** string
* **maxLength :** number
* **placeholder :** string
* **changeFunction :** function *required*
* **id :** string *required*
* **required :** boolean *required*
* **value :** string *required*

#### Config (for default style and validation)
```javascript
  inputStyleClass='text-group__text-input'
  labelStyleClass='text-group__label'
  value={this.props.formStore.info.whatever}

  // if validating as email
  value={this.props.formatStore.info.$emailWhatever}
  id={$emailWhatever}

  // if validating as credit card
  value={this.props.formatStore.info.$creditWhatever}
  id={$creditWhatever}
```


__


## store <a name='store'></a>

The store is used to handle validation and to manage the state of the form.

* [formStore](#formstore)
* [validation](#validation)

___


### formStore <a name='formstore'></a>

The formStore is a class wrapped in a mobx observable.  You should import the store
and initiate it at the top of your app. You should have one store for a form but you can
have multiple stores and multiple forms if you want.

```javascript
  import FormStore from 'panda-form';

  let formStore = new FormStore(/* info object */, /* required array */, /* date format string */);
```

The info object is a key value pair for all of the form items you want to keep track of and what you want
their initial value to be. The keys should be camel case, and any validation tokens you use should be first.
The id's that give to the form elements are snake case version of the key names.  If you need to convert there
are functions that you can import from utils called camelToSnake and snakeToCamel that return a converted string value.

```javascript
  //example

  let info = {
    firstName: '',
    $creditCreditCard: '',
    $checkboxRed: false,
    $radiobtn$radiobtngrpCatBlack: false,
    $radiobtn$radiogrpCatOrange: false
  }
```

The required array is an array of strings which are the camel case of the key name
in the info object and determine what fields will be validated for required. For a radio button group you just put in $radiogrp-groupname.

```javascript
  //example

  let required = [
    'first-name',
    '$credit-credit-card',
    '$radiogrp-cat'
  ]
```

The date format string is just a string.  Currently it can only be `'MM/DD/YYY'` or `'YYYY/MM/DD'`. It is
only needed if you are going to use the DateInputGroup component.


___


### validation <a name='validation'></a>

There are several tokens that you can put on your info keys and ids that tell the store how to validate information.
In order to validate it as required make sure the proper value in the required array passed into the new formStore object.

#### $credit

validates the value in the info object as a credit card

**camelCase: ** $creditWhatever
**snake-case: ** $credit-whatever

#### $checkbox

lets the store know how to update a checkbox field. Currently can only require one checkbox and not groups of checkboxes.

**camelCase: ** $checkboxWhatever
**snake-case: ** $checkbox-whatever

#### $date

validates the value in the info object as a date.  date format must be `'MM/DD/YYYY'` or `'YYYY/MM/DD'`

**camelCase: ** $dateWhatever
**snake-case: ** $date-whatever

### $expiration

validates that the value is numerical and 2 digits in length

**camelCase: ** $expirationWhatever
**snake-case: ** $expirationWhatever

#### $email

validates the value in the info object as an email address

**camelCase: ** $emailWhatever
**snake-case: ** $email-whatever

#### $radiobtn$radiogrp

validations a group of radio buttons (currently can't have a single radio button). you must put the group name after $radiogrp.

**camelCase: ** $radiobtn$radiogrpGroupnameWhatever
**snakeCase: ** $radiobtn-$radiogrp-groupname-whatever


___


## utils <a name='utils'></a>

The utils are the various utilities utilized by the formStore but they can be useful on their own if not using the store.

```javascript
  // example
  import utils from 'panda-form'

  utils.camelToSnake('camelCase');
```

* [camelToSnake](#cameltosnake)
* [isNumber](#isnumber)
* [isValidCreditCard](#isvalidcreditcard)
* [isValidDate](#isdaliddate)
* [isValidEmail](#isvalidemail)
* [isValidString](#isvalidstring)
* [radioStringFormat](#radiostringformat)
* [regex](#regex)
* [removeTokens](#removetokens)
* [snakeToCamel](#snaketocamel)
* [snakeToError](#snaketoerror)


___



### camelToSnake(type: string): string <a name='cameltosnake'></a>

Takes a string in form camelCase and returns it as snake-case

```javascript
  let type = 'isWhatever'

  let newType = utils.camelToSnake(type)

  // newType = 'is-whatever'
```

___


### isNumber(value: string): boolean <a name='isnumber'></a>

Takes a string and determines if it is a number.

```javascript
  let value = '123';
  let isValid = utils.isNumber(value);

  // isValid = true;
```


___


### isValidCreditCard(value: string): boolean <a name='isvalidcreditcard'></a>

Takes a string and determines if it is a valid credit card number.

```javascript
  let value = '4444 4444 4444 4444';
  let isValid = utils.isValidCreditCard(value);

  // isValid = true;
```


___


### isValidDate(value: string): boolean <a name='isvaliddate'></a>

Takes a string and determines if it is a date of format `'MM/DD/YYYY'` or `'YYYY/MM/DD'`.

```javascript
  let value = '12/13/1987';
  let isValid = utils.isValidDate(value);

  // isValid = true;
```


___


### isValidEmail(value: string): boolean <a name='isvalidemail'></a>

Takes a string and determines if it is a valid email.

```javascript
  let value = 'bob@bob.com';
  let isValid = utils.isValidEmail(value);

  // isValid = true;
```


___


### isValidString(value: string): boolean <a name='isvalidstring'></a>

Takes a string and determines if it's length is greater then 0.

```javascript
  let value = '';
  let isValid = utils.isValidString(value);

  // isValid = false;
```


___


### radioStringFormat(type: string): string <a name='radiostringformat'></a>

Takes a camel case string and seperates $radiobtn$radiogrp into $radiobtn-$radiogrp.

```javascript
  let type = '$radiobtn$radiogrp-cats-black'
  let newType = utils.radioStringFormat(type);

  // newType = '$radiobtn-$radiogrp-cats-black'
```


___


### regex <a name='regex'></a>

contains the regex for getting all of the various tokens.

* regex.date -> $date
* regex.checkbox -> $checkbox
* regex.radio -> $radiobtn
* regex.radioGroup -> $radiogrp
* regex.expiration -> $expiration
* regex.email -> $email
* regex.credit -> $credit

```javascript
  let rx = utils.regex.email;
  let value = '$email-whatever';
  let isEmail = rx.test(value);

  //isEmail = true
```


___


### removeTokens(type: string): string <a name='removetokens'></a>

Takes a snake-case string and removes the tokens from it and returns a snake case string

```javascript
  let type = '$credit-whatever';
  let newType = utils.removeTokens(type);

  // newType = 'whatever'
```


___


### snakeToCamel(type: string): string <a name='snaketocamel'></a>

Takes a string in form snake-case and returns it as camelCase

```javascript
  let type = 'is-whatever'

  let newType = utils.snakeToCamel(type)

  // newType = 'isWhatever'
```


___


### snakeToError(type: string): string <a name='snaketoerror'></a>

Takes a string in the form snake-case and returns it without tokens in the form 'Capital Case With Spaces'

```javascript
  let type = $credit-credit-card;
  let newType = utils.snakeToError;

  // newType = 'Credit Card'
```
