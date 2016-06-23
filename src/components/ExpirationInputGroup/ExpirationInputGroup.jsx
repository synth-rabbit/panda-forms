/* @flow */

import React from 'react';

export default function ExpirationInputGroup(props) {

  return(
    <div className={props.groupStyleClass} width={props.groupWidth}>
      <label className={props.labelStyleClass} htmlFor={props.name}>
        {props.label} <span style={{display: props.required ? 'inline' : 'none'}} className='text-group__required'>*</span>
      </label>
      <br />
      <div className='expiration-group__container'>
        <input
          onChange={props.changeFunction.bind(event, props.idMonth)}
          id={props.idMonth}
          type='text'
          name={props.idMonth}
          value={props.valueMonth}
          placeholder={props.monthPlaceholder}
          className={props.monthStyleClass}
          maxLength={props.monthMaxLength}
          style={{width: props.monthWidth}} />
        <input
          onChange={props.changeFunction.bind(event, props.idYear)}
          id={props.idYear}
          type='text'
          name={props.idYear}
          value={props.valueYear}
          className={props.yearStyleClass}
          placeholder={props.yearPlaceholder}
          maxLength={props.yearMaxLength}
          style={{width: props.yearWidth}} />
      </div>
    </div>
  );

}

ExpirationInputGroup.propTypes = {
  groupStyleClass: React.PropTypes.string,
  groupWidth: React.PropTypes.string,
  label: React.PropTypes.string,
  labelStyleClass: React.PropTypes.string,
  monthMaxLength: React.PropTypes.number,
  monthPlaceholder: React.PropTypes.string,
  monthStyleClass: React.PropTypes.string,
  monthWidth: React.PropTypes.string,
  yearMaxLength: React.PropTypes.number,
  yearPlaceholder: React.PropTypes.string,
  yearStyleClass: React.PropTypes.string,
  yearWidth: React.PropTypes.string,
  changeFunction: React.PropTypes.func.isRequired,
  idMonth: React.PropTypes.string.isRequired,
  idYear: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool.isRequired,
  valueMonth: React.PropTypes.string.isRequired,
  valueYear: React.PropTypes.string.isRequired
};
