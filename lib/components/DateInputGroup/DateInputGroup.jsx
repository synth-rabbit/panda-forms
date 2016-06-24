/* @flow */

import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class DateInputGroup extends React.Component {
  handleChange: Function;

  constructor(props: Object){
    super(props);

    this.state = {
      date: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    // gets parent width then sets input width to percentage value of parent width

    let element = document.querySelector(`.${this.props.groupStyleClass}`);
    let groupWidth = element.clientWidth;

    if(this.props.inputWidth){
      let percent = parseInt(this.props.inputWidth.replace('%', '')) / 100;
      let width = Math.floor(groupWidth * percent);

      document.querySelector(`.${this.props.inputStyleClass}`).style.width = width + 'px';
    }
  }

  handleChange(date: Object){
    // creates proxy event to mimic actual change event

    let eventProxy = {
      target: {
        value: ''
      }
    };

    eventProxy.target.value = moment(date).format(this.props.dateFormat);

    this.setState({
      date: date
    }, this.props.changeFunction(this.props.id, eventProxy));
  }

  render(): Object {
    let value = null;

    if(this.props.value !== ''){
      value = moment(new Date(this.props.value));
    }

    return(
      <div className={this.props.groupStyleClass} style={{width: this.props.groupWidth}}>
        <label className={this.props.labelStyleClass} htmlFor={this.props.id}>
          {this.props.label} <span style={{display: this.props.required ? 'inline' : 'none'}} className='text-group__required'>*</span>
        </label>
        <br />
        <DatePicker
          dateFormat={this.props.dateFormat}
          onChange={this.handleChange}
          selected={value}
          className={this.props.inputStyleClass}
          placeholderText={this.props.placeholder}
        />
      </div>
    );
  }
}

DateInputGroup.propTypes = {
  groupWidth: React.PropTypes.string,
  label: React.PropTypes.string,
  labelStyleClass: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  changeFunction: React.PropTypes.func.isRequired,
  dateFormat: React.PropTypes.string.isRequired,
  groupStyleClass: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  inputStyleClass: React.PropTypes.string.isRequired,
  inputWidth: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired
};
