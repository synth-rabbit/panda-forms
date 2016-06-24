/* @flow */

import React from 'react';

export default class SelectGroup extends React.Component {


  handleChange(event: Object){
    this.props.changeFunction(this.props.id, event);
  }

  render(): Object {
    return(
      <div className={this.props.groupStyleClass} style={{width: this.props.groupWidth}}>
        <label className={this.props.labelStyleClass} htmlFor={this.props.id}>
          {this.props.label} <span style={{display: this.props.required ? 'inline' : 'none'}} className='text-group__required'>*</span>
        </label>
        <br />
        <label className='select-group__arrow'>
          <select
            style={{width: this.props.inputWidth}}
            name={this.props.id}
            id={this.props.id}
            value={this.props.value}
            className={this.props.inputStyleClass}
            onChange={this.props.changeFunction.bind(event, this.props.id)}
          >
            <option value='' default>{this.props.placeholder}</option>
            {
              this.props.options.map((option) => {
                return <option key={option} value={option}>{option}</option>;
              })
            }
          </select>
        </label>
      </div>
    );
  }
}

SelectGroup.propTypes = {
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
  options: React.PropTypes.array.isRequired,
  required: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired
};
