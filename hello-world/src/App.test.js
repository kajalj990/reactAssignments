import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Check if widge exists
test('Elements Exists', () => {
  const wrapper = render(<App />)
  expect(wrapper).toBeTruthy();
})

// Validate content
test('Test the Application content', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Hello World");
  expect(linkElement).toBeInTheDocument();
});

