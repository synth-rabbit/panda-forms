/* @flow */

import React from 'react';

export default function FormButton(props) {
  return(
    <a onClick={props.submitFunction} className={`form-button ${props.styleClass}`}>
      <span>{props.text}</span>
      <span>{props.symbol}</span>
    </a>
  );
}

FormButton.propTypes = {
  styleClass: React.PropTypes.string,
  symbol: React.PropTypes.string,
  submitFunction: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};
