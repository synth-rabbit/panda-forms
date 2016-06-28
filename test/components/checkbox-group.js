import React from 'react';
import chai from 'chai';
import {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import CheckboxGroup from '../../src/components/CheckboxGroup/CheckboxGroup.jsx';
import sinon from 'sinon';

chai.use(chaiEnzyme());

describe('CheckboxGroup', ()=>{
  describe('With all props', ()=>{

    let wrapper;
    let checkedValue = true;
    let props = {
      groupWidth: '100%',
      label: 'label',
      labelStyleClass: 'label-class',
      changeFunction: sinon.spy(),
      checked: checkedValue,
      groupStyleClass: 'group-class',
      id: 'check-id',
      inputStyleClass: 'input-class',
      required: true
    };

    beforeEach(()=>{
      wrapper = mount(
        <CheckboxGroup {...props} />
      );
    })

    describe('handles change event', ()=>{

      it('has the correct type value', ()=>{
        wrapper.find('input').simulate('change');
        expect(props.changeFunction.firstCall.args[0]).to.equal('check-id');
      });

      it('gives true when value is true', ()=>{
        wrapper.find('input').simulate('change');
        let value = props.changeFunction.firstCall.args[1].target.value;
        expect(value).to.equal('true');
      });

      it('gives false when value is false', ()=>{
        let newProps = {
          groupWidth: '100%',
          label: 'label',
          labelStyleClass: 'label-class',
          changeFunction: sinon.spy(),
          checked: false,
          groupStyleClass: 'group-class',
          id: 'check-id',
          inputStyleClass: 'input-class',
          required: true
        };

        let newWrapper = mount(
          <CheckboxGroup {...newProps} />
        )

        newWrapper.find('input').simulate('change');
        let value = newProps.changeFunction.firstCall.args[1].target.value;
        expect(value).to.equal('false');
      });
    });


  });
});
