import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../src/App';

it('Renders hello world', () => {
  render(<App />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});