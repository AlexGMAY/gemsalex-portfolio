"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  isFrench: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "en" || savedLang === "fr") {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prevLang) => {
      const newLang = prevLang === "en" ? "fr" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        isFrench: lang === "fr",
        toggleLanguage,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

