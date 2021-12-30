import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
