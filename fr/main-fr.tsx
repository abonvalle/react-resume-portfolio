import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/i18n.ts";
import "../src/index.css";

i18n.changeLanguage("fr");
createRoot(document.getElementById("root")!).render(
  <StrictMode>{/* <App /> */}</StrictMode>
);
