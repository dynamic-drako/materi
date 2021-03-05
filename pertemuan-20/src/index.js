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

// import { createStore } from "redux";
// import Counter from "./redux/reducers/counter.reducers";

// const storeReducers = createStore(Counter);
