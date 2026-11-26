import { useEffect, useState } from "react";
import { LanguageContext, languages } from "./context";
import de from "./de";
import en from "./en";
import fr from "./fr";

const dictionaries = { de, en, fr };

const detect = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (languages.includes(saved)) return saved;
  } catch {
    /* ignore */
  }
  const browser = (navigator.language || "de").slice(0, 2);
  return languages.includes(browser) ? browser : "de";
};

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detect);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dictionaries[lang].meta.title;
  }, [lang]);

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* ignore */
    }
  };

  const loc = (value) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? (value[lang] ?? value.de)
      : value;

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: dictionaries[lang], loc }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
