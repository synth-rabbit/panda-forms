import React from 'react';
import chai from 'chai';
import {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import FormRow from '../../src/components/FormRow/FormRow.jsx';

chai.use(chaiEnzyme());

describe('FormRow', ()=>{
  describe('With all props', ()=>{
    let wrapper;
    let props = {
      styleClass: 'panda-row'
    }

    beforeEach(()=>{
      wrapper = shallow(
        <FormRow {...props}>
          <div className='child' />
        </FormRow>
      );
    });

    it('exists', ()=>{

      expect(wrapper).to.exist;
    });

    it('has children', ()=>{

      expect(wrapper.contains(<div className='child' />)).to.equal(true);
    });

    it('has a class', ()=>{

      expect(wrapper.hasClass('panda-row')).to.be.true;
    });
  });

  describe('Without props', ()=>{
    let wrapper;

    beforeEach(()=>{
      wrapper = shallow(
        <FormRow></FormRow>
      );
    });

    it('exists', ()=>{

      expect(wrapper).to.exist;
    });

    it('does not have a class', ()=>{
      expect(wrapper).to.not.have.attr('class');
    })
  });
});
