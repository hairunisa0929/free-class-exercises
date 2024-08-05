import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import App from "./../src/App";

it("Check the initial state", () => {
  render(<App />);
  const lightOffImg = screen.getByRole("img");
  expect(lightOffImg).toHaveAttribute("src", "https://www.svgrepo.com/show/513218/light-bulb.svg");  
});

it("Check when the button is clicked (bulb on and off)", () => {
  render(<App />);
  const switchButton = screen.getByText("Switch Light");

  //turn on the light
  fireEvent.click(switchButton);

  const lightOnImg = screen.getByRole("img");
  expect(lightOnImg).toHaveAttribute("src", "https://www.svgrepo.com/show/513316/light-bulb.svg");


  // turn off the light
  fireEvent.click(switchButton);
  expect(screen.getByRole("img")).toHaveAttribute("src", "https://www.svgrepo.com/show/513218/light-bulb.svg");
});