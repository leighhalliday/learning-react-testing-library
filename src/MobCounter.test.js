import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import { Provider } from "mobx-react";
import { observable, action, decorate } from "mobx";
import MobCounter from "./MobCounter";

afterEach(cleanup);

class CounterStore {
  count = 0;

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };
}

const DecoratedCounterStore = decorate(CounterStore, {
  count: observable,
  increment: action,
  decrement: action
});

const renderWithStore = counterStore =>
  render(
    <Provider CounterStore={counterStore}>
      <MobCounter />
    </Provider>
  );

it("renders initial count", () => {
  const counterStore = new DecoratedCounterStore();

  const { getByTestId } = renderWithStore(counterStore);

  expect(getByTestId("count")).toHaveTextContent("0");
});

it("renders after increment", () => {
  const counterStore = new DecoratedCounterStore();
  const { getByTestId, getByText } = renderWithStore(counterStore);

  fireEvent.click(getByText("+"));

  expect(getByTestId("count")).toHaveTextContent("1");
});
