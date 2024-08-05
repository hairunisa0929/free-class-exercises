import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

it("Check the initial state should be Off", () => {
  render(<App />);
  expect(screen.getByText(/The light is/i)).toHaveTextContent("The light is Off");
});

it("Click the 'Turn On' button and check the state", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Turn On"));
  expect(screen.getByText(/The light is/i)).toHaveTextContent("The light is On");
});

it("Click the 'Turn Off' button and check the state", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Turn Off"));
  expect(screen.getByText(/The light is/i)).toHaveTextContent("The light is Off");
});