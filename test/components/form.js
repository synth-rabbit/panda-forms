import React from 'react';
import chai from 'chai';
import {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import Form from '../../src/components/Form/Form.jsx';

chai.use(chaiEnzyme());

describe('Form', ()=>{
  describe('With all props', ()=>{
    let wrapper;
    let props = {
      title: 'title',
      styleClass: 'panda-form',
      styles: {
        height: '100px'
      }
    }

    beforeEach(()=>{
      wrapper = shallow(
        <Form title='test' styleClass='panda-form' styles={{height: '100px'}}>
          <div className='child' />
        </Form>
      );
    });

    it('exists', ()=>{

      expect(wrapper).to.exist;
    });

    it('has children', ()=>{

      expect(wrapper.contains(<div className='child' />)).to.equal(true);
    });

    it('has a title', ()=>{

      expect(wrapper.find('.panda-form__title')).to.have.style('display', 'block');
    });

    it('has a form', ()=>{
      expect(wrapper.is('form')).to.be.true;
    });

    it('has a class', ()=>{
      expect(wrapper.hasClass('panda-form')).to.be.true;
    });

    it('has style', ()=>{
      expect(wrapper).to.have.style('height', '100px');
    });
  });
  describe('Without props', ()=>{

    let wrapper;

    beforeEach(()=>{
      wrapper = shallow(<Form></Form>);
    });

    it('exists', ()=>{

      expect(wrapper).to.exist;
    });

    it('does not have a title', ()=>{

      expect(wrapper.find('.panda-form__title')).to.have.style('display', 'none');
    });

    it('does not have a class', ()=>{
      expect(wrapper).to.not.have.attr('class');
    });

    it('does not have styles', ()=>{
      expect(wrapper).to.not.have.attr('style');
    });
  });
});
