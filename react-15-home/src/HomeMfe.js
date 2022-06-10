import singleSpaReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

const lifecycles = new singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
