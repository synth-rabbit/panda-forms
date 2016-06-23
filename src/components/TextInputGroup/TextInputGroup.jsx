/* @flow */

import React from 'react';

export default function TextInputGroup(props) {

  return(
    <div className={props.groupStyleClass} style={{width: props.groupWidth}}>
      <label className={props.labelStyleClass} htmlFor={props.id}>
        {props.label} <span style={{display: props.required ? 'inline' : 'none'}} className='text-group__required' >*</span>
      </label>
      <br />
      <input
        onChange={props.changeFunction.bind(event, props.id)}
        id={props.id}
        type='text'
        name={props.id}
        value={props.value}
        placeholder={props.placeholder}
        className={props.inputStyleClass}
        maxLength={props.maxLength}
        style={{width: props.inputWidth}} />
    </div>
  );

}

TextInputGroup.propTypes = {
  groupStyleClass: React.PropTypes.string,
  groupWidth: React.PropTypes.string,
  inputStyleClass: React.PropTypes.string,
  inputWidth: React.PropTypes.string,
  label: React.PropTypes.string,
  labelStyleClass: React.PropTypes.string,
  maxLength: React.PropTypes.number,
  placehoplder: React.PropTypes.string,
  changeFunction: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired
};
