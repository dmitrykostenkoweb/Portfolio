import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import "./Components/globalStyles.css";


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// "linear-gradient(106.51deg, rgba(255, 255, 255, 0.05) 3.44%, rgba(255, 255, 255, 0.02) 64.82%)",
