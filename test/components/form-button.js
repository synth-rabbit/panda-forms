import React from 'react';
import chai from 'chai';
import {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import FormButton from '../../src/components/FormButton/FormButton.jsx';
import sinon from 'sinon';

chai.use(chaiEnzyme());

describe('FormButotn', ()=>{
  describe('With all props', ()=>{
    let wrapper;

    let props = {
      styleClass:'form-button--active',
      symbol:'>',
      submitFunction: sinon.spy(),
      text:'continue'
    }

    beforeEach(()=>{
      wrapper = shallow(
        <FormButton {...props} />
      );
    });

    it('exists', ()=> {

      expect(wrapper).to.exist;
    });

    it('has class', ()=> {
      expect(wrapper.hasClass('form-button--active')).to.be.true;
    });

    it('has text', ()=> {
      expect(wrapper.childAt(0)).to.have.text('continue');
    });

    it('has a symbol', ()=> {
      expect(wrapper.childAt(1)).to.have.text('>');
    });

    it('calls submit function', ()=>{
      wrapper = mount(
        <FormButton {...props} />
      );

      wrapper.find('.form-button').simulate('click');
      expect(props.submitFunction.calledOnce).to.be.true;
    });
  });

  describe('Without props', ()=>{
    let wrapper;

    beforeEach(()=>{
      wrapper = shallow(
        <FormButton submitFunction={()=>{}} text='required' />
      )
    });

    it('does not have a symbol', ()=> {
      expect(wrapper.childAt(1)).to.have.text('');
    });

    it('does not have a class', ()=> {
      expect(wrapper).to.have.className('undefined');
    });
  });
});
