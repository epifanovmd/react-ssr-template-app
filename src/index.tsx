import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {Routes} from "./App";
// import "./assets/clearfix.scss";

const root = (
  <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(
  root,
  document.getElementById("root"),
);
