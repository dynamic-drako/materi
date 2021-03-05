import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import storeReducers from "./redux/store";

ReactDOM.render(
  <Provider store={storeReducers}>
    <App />
  </Provider>,
  document.getElementById("root")
);