import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { AppProvider } from "./components/AppContext";

import "./index.css";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
