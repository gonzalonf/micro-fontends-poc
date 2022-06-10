import React from "react";
import ReactDOM from "react-dom";

export default function Header(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "300px",
          borderRadius: "5px",
          background: "pink",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h1>Welcome HOME my son</h1>
        <h2>This is a React 15 component</h2>
      </div>
    </div>
  );
}
