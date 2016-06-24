/* @flow */

import React from 'react';
import {observer} from 'mobx-react';

const ErrorGroup = observer((props)=> {

  let errors = [];
  if(props.errors.length !== 0){
    errors = props.errors.map((error, idx)=>{
      return <li key={idx} className='error-group__list-item'>{error}</li>;
    });
  }

  return(
    <div className='error-group' style={{display: props.errors.length === 0 ? 'none' : 'block'}}>
      <ul className='error-group__list'>
        {
          errors
        }
      </ul>
    </div>
  );

});

ErrorGroup.propTypes = {
  errors: React.PropTypes.array.isRequired
};

export default ErrorGroup;
