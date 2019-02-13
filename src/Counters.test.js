import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Counters from "./Counters";

afterEach(cleanup);

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  };
}

it("can render redux with defaults", () => {
  const { getByTestId, getByText } = renderWithRedux(<Counters />);
  fireEvent.click(getByText("+"));
  expect(getByTestId("count")).toHaveTextContent("1");
});

it("can render with custom initial state", () => {
  const { getByTestId, getByText } = renderWithRedux(<Counters />, {
    initialState: { count: 3 }
  });
  fireEvent.click(getByText("-"));
  expect(getByTestId("count")).toHaveTextContent("2");
});

it("can render with a custom store", () => {
  const store = createStore(() => ({ count: 1000 }));
  const { getByTestId, getByText } = renderWithRedux(<Counters />, { store });
  fireEvent.click(getByText("-"));
  expect(getByTestId("count")).toHaveTextContent("1000");
  fireEvent.click(getByText("+"));
  expect(getByTestId("count")).toHaveTextContent("1000");
});
