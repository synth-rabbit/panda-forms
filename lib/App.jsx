/* @flow */

import React from 'react';

require('./styles/main.scss');

import {observer} from 'mobx-react';

import Form from './components/Form/Form.jsx';
import FormRow from './components/FormRow/FormRow.jsx';
import FormButton from './components/FormButton/FormButton.jsx';
import TextInputGroup from './components/TextInputGroup/TextInputGroup.jsx';
import DateInputGroup from './components/DateInputGroup/DateInputGroup.jsx';
import ErrorGroup from './components/ErrorGroup/ErrorGroup.jsx';
import ExpirationInputGroup from './components/ExpirationInputGroup/ExpirationInputGroup.jsx';
import TextBoxGroup from './components/TextBoxGroup/TextBoxGroup.jsx';
import SelectGroup from './components/SelectGroup/SelectGroup.jsx';
import CheckboxGroup from './components/CheckboxGroup/CheckboxGroup.jsx';
import GroupContainer from './components/GroupContainer/GroupContainer.jsx';
import RadioButtonGroup from './components/RadioButtonGroup/RadioButtonGroup.jsx';

@observer
export default class App extends React.Component {
  handleChange: Function;
  handleSubmit: Function;

  constructor(props: Object){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type: string, event: Object){
    this.props.formStore.updateInfo(type, event.target.value);
  }

  handleSubmit(){
    let canSubmit = this.props.formStore.validateAll();

    if(canSubmit){
      // code to submit form
    }
  }

  render(): Object{
    const values = this.props.formStore.info;

    return(
      <div>
        <Form title='Form Title' styleClass='panda-form'>
          {/*<ErrorGroup errors={this.props.formStore.errors} />*/}
          <FormRow styleClass='form-row'>
            <TextInputGroup
              groupWidth='33%'
              inputWidth='100%'
              label='Credit Card Input'
              required={true}
              changeFunction={this.handleChange}
              id={'$credit-credit-card'}
              value={values.$creditCreditCard}
              placeholder='Enter Text'
              inputStyleClass='text-group__text-input'
              labelStyleClass='text-group__label'
            />
            <DateInputGroup
              label='Date Input'
              id='$date-date'
              groupStyleClass='date-input__group'
              inputStyleClass='date-input__date'
              changeFunction={this.handleChange}
              required={true}
              inputWidth='100%'
              groupWidth='33%'
              dateFormat='MM/DD/YYYY'
              placeholder='Select a Date'
              value={values.$dateDate}
            />
            <ExpirationInputGroup
              groupStyleClass='expiration-group'
              groupWidth='33%'
              monthWidth='48%'
              yearWidth='48%'
              monthStyleClass='expiration-group__text-input'
              yearStyleClass='expiration-group__text-input'
              valueMonth={values.$expirationExpirationMonth}
              valueYear={values.$expirationExpirationYear}
              required={true}
              changeFunction={this.handleChange}
              idMonth='$expiration-expiration-month'
              idYear='$expiration-expiration-year'
              label='Expiration Input'
              monthPlaceholder='MM'
              yearPlaceholder='YY'
              monthMaxLength={2}
              yearMaxLength={2}
            />
          </FormRow>
          <FormRow styleClass='form-row'>
            <TextBoxGroup
              groupWidth='49%'
              inputWidth='100%'
              label='Text Area'
              required={true}
              changeFunction={this.handleChange}
              id={'text-box'}
              value={values.textBox}
              placeholder='Enter Text'
              inputStyleClass='text-box__input'
              labelStyleClass='text-group__label'
              rows={10}
            />
            <SelectGroup
              groupWidth='29%'
              inputWidth='100%'
              label='Select Group'
              required={true}
              changeFunction={this.handleChange}
              id={'select'}
              value={values.select}
              options={['opt 1', 'opt 2', 'opt 3']}
              placeholder='Enter Text'
              inputStyleClass='select-group__select'
              labelStyleClass='text-group__label'
            />
            <GroupContainer
              groupWidth='19%'
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
          <FormRow styleClass='form-row'>
            <GroupContainer
              groupWidth='49%'
              label='Cats Radio Group -- Choose 1'
              labelStyleClass='group-container__label'
              required={true}
            >
              <RadioButtonGroup
                inputStyleClass='radio-button-group__button'
                labelStyleClass='radio-button-group__label'
                groupStyleClass='radio-button-group'
                checked={values.$radiobtn$radiogrpCatsWhite}
                id='$radiobtn-$radiogrp-cats-white'
                required={false}
                groupWidth='100%'
                label='White Cat'
                changeFunction={this.handleChange}
              />
              <RadioButtonGroup
                inputStyleClass='radio-button-group__button'
                labelStyleClass='radio-button-group__label'
                groupStyleClass='radio-button-group'
                checked={values.$radiobtn$radiogrpCatsBlack}
                id='$radiobtn-$radiogrp-cats-black'
                required={false}
                groupWidth='100%'
                label='Black Cat'
                changeFunction={this.handleChange}
              />
              <RadioButtonGroup
                inputStyleClass='radio-button-group__button'
                labelStyleClass='radio-button-group__label'
                groupStyleClass='radio-button-group'
                checked={values.$radiobtn$radiogrpCatsOrange}
                id='$radiobtn-$radiogrp-cats-orange'
                required={false}
                groupWidth='100%'
                label='Orange Cat'
                changeFunction={this.handleChange}
              />
            </GroupContainer>
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
          </FormRow>
        </Form>
        <FormButton symbol='>' text='continue' submitFunction={this.handleSubmit} />
      </div>
    );
  }
}
