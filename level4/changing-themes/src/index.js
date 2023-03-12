import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ThemeContextProvider } from "./components/themeContext";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
