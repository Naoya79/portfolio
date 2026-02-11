import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { Locale, Translations } from "./types";
import { translationsByLocale } from "./translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio.locale";

function getDefaultLocale(): Locale {
  const fromStorage = localStorage.getItem(STORAGE_KEY);
  if (fromStorage === "ja" || fromStorage === "en") return fromStorage;
  const browser = navigator.language.toLowerCase();
  return browser.startsWith("ja") ? "ja" : "en";
}

function getByPath(obj: Translations, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getDefaultLocale());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string) => {
      const table = translationsByLocale[locale];
      const value = getByPath(table, key);
      return typeof value === "string" ? value : key;
    },
    [locale],
  );

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


