"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "@/types";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  isAr: boolean;
  t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const isAr = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [lang, isAr]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  const t = (en: string, ar: string) => (isAr ? ar : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isAr, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
