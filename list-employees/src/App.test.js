import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import TableClass from './components/TableClass';
test('Elements Exists', () => {
  const wrapper = render(<App />)
  expect(wrapper).toBeTruthy();
})


test('Contains Table child ', () => {
  const wrapper = shallow(<App/>)
  wrapper.children(<TableClass/>)
  expect(wrapper.exists()).toBe(true);
})





