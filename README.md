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

## Documentation

### styles
* [Styles](#styles)

### components
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

### store
* [formStore](#formstore)
* [validation](#validation)




## Styles <a name='styles'></a>

To use the default styles include the panda-form.css stylesheet found in lib/assets.
And follow the naming conventions outlined below.




## Components

Have the changeFunction on components call this.props.formStore.updateInfo to properly validate




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
