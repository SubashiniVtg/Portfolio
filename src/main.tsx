import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
const redirect = sessionStorage.redirect;
if (redirect) {
  delete sessionStorage.redirect;
  window.history.replaceState(null, "", redirect);
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
