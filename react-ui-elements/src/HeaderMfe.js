import singleSpaReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

function domElementGetter() {
  return document.getElementById("test-parcel");
}

// const { bootstrap, mount, unmount } = lifecycles;

const lifecycles = new singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  // domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;
// export default {
//   name: "gonza",
// };

// export default Header;
