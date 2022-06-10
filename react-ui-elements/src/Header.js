import React, { useEffect, useState } from "react";
import store from "vanilla/store";

// NOTE: please, don't do any of this practices (navigation, styling, etc...).. all is just for simpliicty in POC

export default function Header(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(store.user.name);
  }, []);

  return (
    <nav
      style={{
        width: "100%",
        height: "100px",
        background: "lightblue",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <ul style={{ listStyle: "none" }}>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              history.pushState({}, "login", "/login");
            }}
          >
            Login
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              history.pushState({}, "home", "/home");
            }}
          >
            Home
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a
            href="/other-link"
            onClick={(e) => {
              e.preventDefault();
              history.pushState({}, "other", "/other-link");
            }}
          >
            Other link
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <h2>MFE with SSpa & Module Feredation (React 17 app)</h2>
        </li>
      </ul>
      {!!name && (
        <span style={{ fontWeight: "bold", color: "blue", fontSize: "20px" }}>
          User: {name}
        </span>
      )}
    </nav>
  );
}
