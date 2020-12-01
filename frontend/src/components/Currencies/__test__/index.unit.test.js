import React from "react";
import ReactDom from "react-dom";
import Currencies from "../index";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";

jest.mock("react-redux", () => ({
  useSelector: () => ({ locale: "en" }),
}));

describe("Currencies Component", () => {
  afterEach(cleanup);

  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Currencies />, div);
  });

  it("Matches snapshot empty", () => {
    const app = create(<Currencies />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
