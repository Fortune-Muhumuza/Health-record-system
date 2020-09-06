import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react', () => {
  const { getByText } = render(<App />);
  const Element = getByText(/learn react/i);
  expect(Element).toBeInTheDocument();
});

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});

afterEach(cleanup);

it('increments counter', () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId('button-up'));

  expect(getByTestId('counter')).toHaveTextContent('2');
});

it('decrements counter', () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId('button-down'));

  expect(getByTestId('counter')).toHaveTextContent('-1');
});


afterEach(cleanup);

it('adds yess to the array', () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId('addToArray'));

  expect(getByTestId('array')).toHaveTextContent('ab');
});
