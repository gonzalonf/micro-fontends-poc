import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

function Header(props) {
  return (
    <ul>
      <li>
        <a href="/start">Start Single-spa</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/chekcout">Chekcout</a>
      </li>
    </ul>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
