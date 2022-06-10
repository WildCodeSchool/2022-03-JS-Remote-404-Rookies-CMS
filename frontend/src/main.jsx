import React from "react";
import ReactDOM from "react-dom";
import ExportContext from "./contexts/Context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ExportContext.Provider>
      <App />
    </ExportContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
