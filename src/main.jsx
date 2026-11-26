import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "@fontsource/instrument-serif/400-italic.css";
import "./styles/variables.css";
import "./styles/global.css";
import ThemeProvider from "./theme/ThemeProvider";
import LanguageProvider from "./i18n/LanguageProvider";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>,
);
