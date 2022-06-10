import React, { useEffect, useState } from "react";

import store from "vanilla/store";

export default function Header({ userName }) {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(store.user.name);
    // store.subscribe(() => {
    //   console.log(store.user.name);
    // });
  }, []);
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
        <h1>Welcome HOME {name || "my son"}</h1>
        <h2>This is a React 15 component</h2>
      </div>
    </div>
  );
}
