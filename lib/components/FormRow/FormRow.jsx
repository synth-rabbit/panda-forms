/* @flow */

import React from 'react';

export default function FormRow(props) {

  return(
    <div className={props.styleClass}>
      {props.children}
    </div>
  );
}

FormRow.propTypes = {
  styleClass: React.PropTypes.string
};
