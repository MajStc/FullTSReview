import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";

import App from "./App";
import { store, StoreContext } from "./store/store";
import { ToastContainer } from "react-toastify";

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <StoreContext.Provider value={store}>
        <ToastContainer />
        <App />
      </StoreContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
