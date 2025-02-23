import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App.tsx";
import "../src/index.css";
import "../src/locales/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
