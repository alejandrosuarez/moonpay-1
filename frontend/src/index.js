import React, { useState } from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./styles";
import { Provider } from "react-redux";
import store from "./redux/store";

const renderApp = () => {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./components/App", renderApp);
}

renderApp();
