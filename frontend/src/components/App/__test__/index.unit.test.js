import React from "react";
import { Provider } from "react-redux";
import App from "../index";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";
import { render, fireEvent, screen } from "../../../settings/test-utils";
import configureStore from "redux-mock-store";

jest.mock("../../Currencies", () => () => <div></div>);
jest.mock("../../Filter", () => () => <div></div>);

const mockStore = configureStore([]);

describe("App Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      locale: "en",
      filter: {},
    });

    component = create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  afterEach(cleanup);

  it("Renders without crashing", () => {
    const div = document.createElement("div");
    render(<App />, div);
  });

  it("Matches snapshot empty", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
