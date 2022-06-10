import React from "react";

export default function Header(props) {
  return (
    <nav style={{ width: "100%", height: "100px", background: "lightblue" }}>
      <ul style={{ listStyle: "none" }}>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a href="/login">Login</a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a href="/home">Home</a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a href="/other-link">Other link</a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <h2>MFE with SSpa & Module Feredation (React 17 app)</h2>
        </li>
      </ul>
    </nav>
  );
}
