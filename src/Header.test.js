import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Header from "./Header";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Header text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});

it("inserts text in h1", () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />);

  expect(getByTestId("h1tag")).toHaveTextContent("Hello!");
  expect(getByText("Hello!")).toHaveClass("fancy-h1");
});
