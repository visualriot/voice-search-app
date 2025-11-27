"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { detectInitialLang } from "@/lib/i18n";
import type { AppLang } from "@/types/index";

type LanguageContextType = {
  lang: AppLang;
  setLang: (lang: AppLang) => void;
  hydrated: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<AppLang>("en");
  const [hydrated, setHydrated] = useState(false);

  // detect on first load (browser or saved)
  useEffect(() => {
    const initial = detectInitialLang();
    setLangState(initial);
    setHydrated(true);
  }, []);

  // wrap setter to also save to localStorage
  const setLang = (value: AppLang) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("appLang", value);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, hydrated }}>
      {hydrated ? children : null}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within <LanguageProvider>");
  }
  return ctx;
}
