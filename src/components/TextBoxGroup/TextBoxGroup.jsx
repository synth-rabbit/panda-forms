/* @flow */

import React from 'react';

export default function TextBoxGroup(props) {

  return(
    <div className={props.groupStyleClass} style={{width: props.groupWidth}}>
      <label className={props.labelStyleClass} htmlFor={props.id}>
        {props.label} <span style={{display: props.required ? 'inline' : 'none'}} className='text-group__required'>*</span>
      </label>
      <br />
      <textarea
        onChange={props.changeFunction.bind(event, props.id)}
        placeholder={props.placeholder}
        id={props.id}
        rows={props.rows || 5}
        name={props.id}
        value={props.value}
        className={props.inputStyleClass}
        maxLength={props.maxLength}
        style={{width: props.inputWidth}} />
    </div>
  );
}

TextBoxGroup.propTypes = {
  groupStyleClass: React.PropTypes.string,
  groupWidth: React.PropTypes.string,
  inputStyleClass: React.PropTypes.string,
  inputWidth: React.PropTypes.string,
  label: React.PropTypes.string,
  labelStyleClass: React.PropTypes.string,
  maxLength: React.PropTypes.number,
  placehoplder: React.PropTypes.string,
  rows: React.PropTypes.number,
  changeFunction: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired
};
