/* @flow */

import React from 'react';

export default function RadioButtonGroup(props) {
  return(
    <div className={props.groupStyleClass} width={props.groupWidth}>
      <input
        type='radio'
        onChange={props.changeFunction.bind(event, props.id)}
        className={props.inputStyleClass}
        id={props.id}
        checked={props.checked}
        value={props.checked}
        name={props.id} />
      <span
        value={props.checked}
        onClick={props.changeFunction.bind(event, props.id)}
        className='radio-button-group__custom'></span>
      <label
        htmlFor={props.id}
        className={props.labelStyleClass}
      >
        {props.label} <span
                        style={{display: props.required ? 'inline' : 'none'}}
                        className='text-group__required' >*</span>
      </label>
    </div>
  );
}


RadioButtonGroup.propTypes = {
  groupWidth: React.PropTypes.string,
  label: React.PropTypes.string,
  labelStyleClass: React.PropTypes.string,
  changeFunction: React.PropTypes.func.isRequired,
  checked: React.PropTypes.bool.isRequired,
  groupStyleClass: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  inputStyleClass: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool.isRequired
};
