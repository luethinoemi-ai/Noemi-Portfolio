import { useState } from "react";
import { ThemeContext } from "./context";

const read = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(read);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
