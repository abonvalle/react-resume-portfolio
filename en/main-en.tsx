import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App.tsx";
import "../src/i18n.ts";
import "../src/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
