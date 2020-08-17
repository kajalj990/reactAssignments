import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'
import Clock from './components/Clock';
import renderer from 'react-test-renderer';
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Digital Clock');
  expect(linkElement).toBeInTheDocument();
});

test('Snapshot',()=>{
  const clock= shallow(<Clock/>);
  const tree = renderer.create(<Clock/>).toJSON();
 // clock.setState({time:new Date().getTime()});
  expect(tree).toMatchSnapshot();
})

test('State Changes successfully',()=>{
  const clock= shallow(<Clock/>);
 // const tree = renderer.create(<Clock/>).toJSON();
  clock.setState({time:new Date().getTime()});
  expect(clock).toMatchSnapshot();
})
//time zone 
//toggle button
//date 