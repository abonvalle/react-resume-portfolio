import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";
import "../src/locales/i18n.ts";

i18n.changeLanguage("fr");
createRoot(document.getElementById("root")!).render(
  <StrictMode>{/* <App /> */}</StrictMode>
);
