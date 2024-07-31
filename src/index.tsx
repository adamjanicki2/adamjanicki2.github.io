import React from "react";
import ReactDOM from "react-dom/client";
// Stylesheets
import "@adamjanicki/ui/style.css";
import "tachyons/css/tachyons.min.css";
import "src/style.css";
import "src/media.css";
import App from "src/components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
