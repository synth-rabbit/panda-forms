import React from 'react';
import chai from 'chai';
import {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import GroupContainer from '../../src/components/GroupContainer/GroupContainer.jsx';

describe('GroupContainer', ()=>{
  let wrapper;
  let props = {
    groupStyleClass:'group-class',
    groupWidth:'100%',
    label:'label',
    labelStyleClass:'label-class',
    required:true
  }

  describe('With all props', ()=>{
    beforeEach(()=>{
      wrapper = shallow(
        <GroupContainer {...props}>
          <div className='child' />
        </GroupContainer>
      );
    });

    it('exists', ()=> {

      expect(wrapper).to.exist;
    });

    it('has children', ()=>{

      expect(wrapper.contains(<div className='child' />)).to.equal(true);
    });

    it('has a group class', ()=>{

      expect(wrapper.hasClass('group-class')).to.be.true;
    });

    it('has a label', ()=>{
      expect(wrapper.find('label')).to.have.text('label *');
    });

    it('has a label class', ()=>{

      expect(wrapper.find('label').hasClass('label-class')).to.be.true;
    });

    it('displays span when required', ()=>{

      expect(wrapper.find('span')).to.have.style('display', 'inline');
    });

    it('does not display span when not required', ()=>{

      let wrapper = shallow(<GroupContainer required={false} />);
      expect(wrapper.find('span')).to.have.style('display', 'none');
    });

    it('has a width set', ()=>{
      expect(wrapper).to.have.style('width', '100%');
    });
  });

  describe('Without Props', ()=>{
    let wrapper;

    beforeEach(()=>{
      wrapper = shallow(
        <GroupContainer required={false}></GroupContainer>
      );
    });

    it('does not have a group class', ()=>{

      expect(wrapper).to.not.have.attr('class');
    });

    it('does not have a label', ()=>{

      expect(wrapper.find('label')).to.have.text(' *');
    });

    it('does not have a label class', ()=>{

      expect(wrapper.find('label')).to.not.have.attr('class');
    });

    it('does not have a width', ()=>{

      expect(wrapper).to.not.have.style('width');
    });
  });
});
