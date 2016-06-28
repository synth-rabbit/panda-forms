/* @flow */

import React from 'react';

export default function GroupContainer(props){
  return(
    <div className={props.groupStyleClass} style={{width: props.groupWidth}}>
      <label className={props.labelStyleClass} htmlFor={props.id}>
        {props.label} <span style={{display: props.required ? 'inline' : 'none'}} className='text-group__required'>*</span>
      </label>
      <br />
      {props.children}
    </div>
  );
}

GroupContainer.propTypes = {
  groupStyleClass: React.PropTypes.string,
  groupWidth: React.PropTypes.string,
  label: React.PropTypes.string,
  labelStyleClass: React.PropTypes.string,
  required: React.PropTypes.bool.isRequired
};
