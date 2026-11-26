import { createContext, useContext } from "react";

export const languages = ["de", "en", "fr"];

export const L = (de, en = de, fr = de) => ({ de, en, fr });

export const LanguageContext = createContext(null);
export const useLang = () => useContext(LanguageContext);
