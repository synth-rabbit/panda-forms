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
      return(
        <Form title='Example' styleClass='panda-form'>
          <FormRow styleClass='form-row'>
            <TextInputGroup
              groupWidth='49%'
              inputWidth='100%'
              label='Email Input'
              required={true}
              changeFunction={this.handleChange}
              id={'$email-email'}
              value={values.$emailEmail}
              placeholder='Enter Text'
              inputStyleClass='text-group__text-input'
              labelStyleClass='text-group__label'
            />
            <GroupContainer
              groupWidth='49%'
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

Coming Soon...
