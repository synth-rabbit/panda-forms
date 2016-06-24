/* @flow */

import React from 'react';

export default function Form(props){
  return (
    <form style={props.styles} className={props.styleClass}>
      <h2 className='panda-form__title'>
        {props.title}
      </h2>
      {props.children}
    </form>
  );
}

Form.propTypes = {
  title: React.PropTypes.string,
  styleClass: React.PropTypes.string,
  styles: React.PropTypes.object
};
