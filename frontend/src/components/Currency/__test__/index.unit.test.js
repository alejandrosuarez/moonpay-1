import React from "react";
import ReactDom from "react-dom";
import Currency from "../index";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";

jest.mock("react-redux", () => ({
  useSelector: () => ({ locale: "en" }),
}));

describe("Currency Component", () => {
  afterEach(cleanup);

  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Currency />, div);
  });

  it("Renders currency correctly", () => {
    const currency = {
      code: "test",
      name: "Test",
      isSupportedInUS: true,
      supportsTestMode: true,
    };
    const sortBy = "code";
    const { getByTestId } = render(
      <Currency currency={currency} sortBy={sortBy} />
    );
    expect(getByTestId("tag-us")).toHaveTextContent("US");
    expect(getByTestId("tag-test-mode")).toHaveTextContent("Test Mode");
    expect(getByTestId("title-code")).toHaveTextContent(
      `${currency.code.toUpperCase()} - ${currency.name}`
    );
  });

  it("Matches snapshot empty", () => {
    const currency = create(<Currency />).toJSON();
    expect(currency).toMatchSnapshot();
  });

  it("Matches snapshot with props", () => {
    const currency = {
      code: "test",
      name: "Test",
      isSupportedInUS: true,
      supportsTestMode: true,
    };
    const sortBy = "code";
    const currencyElement = create(
      <Currency currency={currency} sortBy={sortBy} />
    ).toJSON();
    expect(currencyElement).toMatchSnapshot();
  });
});
