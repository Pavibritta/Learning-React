import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppEl from "./reactCreateElement.js";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />

    <AppEl />
  </>,
);
