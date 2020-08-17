import React from 'react';
//import { render } from '@testing-library/react';
//import App from './App';
import { shallow } from 'enzyme';
import Table from './components/Table'

  test('test delete button',()=>{
    const wrapper = shallow(<Table/>)
   //wrapper.find('button').simulate('click');
    expect(wrapper.exists()).toBe(true);
  
  })



