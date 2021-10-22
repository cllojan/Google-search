import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ResultContextProvider } from "./contexts/ResultsContectProvider";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
