import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import "jest-dom/extend-expect";
import axiosMock from "axios";
import Fetch from "./Fetch";

afterEach(cleanup);

it("fetches on load", async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } });

  const url = "/greeting";
  const { getByTestId } = render(<Fetch url={url} />);

  expect(getByTestId("pending")).toHaveTextContent("Loading data...");

  const greetingNode = await waitForElement(() => getByTestId("resolved"));

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(greetingNode).toHaveTextContent("hello there");
});
