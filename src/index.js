import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import HandleState from "./hooks/HandleState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HandleState>
      <App />
    </HandleState>
  </React.StrictMode>
);
