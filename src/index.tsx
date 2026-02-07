import "@adamjanicki/ui/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/components/App";
import "src/css/media.css";
import "src/css/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
