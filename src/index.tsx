import React from "react";
import ReactDOM from "react-dom/client";
// Stylesheets
import "@adamjanicki/ui/style.css";
import "tachyons/css/tachyons.min.css";
import "src/css/style.css";
import "src/css/media.css";
import App from "src/components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
