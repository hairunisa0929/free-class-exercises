import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../src/App';
import Greeting from './../src/components/Greeting';

it("Receives and displays props name", () => {  
  const name = "Leehan";

  render(<Greeting name={name} />);

  expect(screen.getByText(`Hello ${name}`)).toBeInTheDocument();
})