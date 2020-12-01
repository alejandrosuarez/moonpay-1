import React from "react";
import ReactDom from "react-dom";
import Filter from "../index";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";

jest.mock("react-redux", () => ({
  useSelector: () => ({ locale: "en" }),
  useDispatch: () => jest.fn(),
}));

describe("Filter Component", () => {
  afterEach(cleanup);

  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Filter />, div);
  });

  it("Matches snapshot empty", () => {
    const currency = create(<Filter />).toJSON();
    expect(currency).toMatchSnapshot();
  });
});
