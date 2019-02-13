import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import Clickers from "./Clickers";

afterEach(cleanup);

it("displays the count", () => {
  const { getByTestId } = render(<Clickers />);
  expect(getByTestId("count")).toHaveTextContent("0");
});

it("increments count", () => {
  const { getByTestId, getByText } = render(<Clickers />);
  fireEvent.click(getByText("Up"));
  expect(getByTestId("count")).toHaveTextContent("1");
});

it("decrements count delayed", async () => {
  const { getByText } = render(<Clickers />);
  fireEvent.click(getByText("Down"));

  const countSpan = await waitForElement(() => getByText("-1"));
  expect(countSpan).toHaveTextContent("-1");
});
