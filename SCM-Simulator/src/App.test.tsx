import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import TruckContainer from './containers/TruckContainer';
import LocationComponent from './components/LocationComponent';
import LocationContainer from './containers/LocationContainer';

test('renders learn react link', () => {
  render(<TruckContainer />);
  const linkElement = screen.getByText(/SCM Application/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<LocationContainer />);
  const linkElement = screen.getByText(/Table/i);
  expect(linkElement).toBeInTheDocument();
});