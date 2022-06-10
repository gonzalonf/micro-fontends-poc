import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

const rootElement = document.getElementById("root");

// NOTE: old react just for POC, no fragment or new features
ReactDOM.render(
  <div>
    <Home></Home>
  </div>,
  rootElement
);
