import { languages } from "@/data/languages";
import type { AppLang } from "@/types";

export const supportedLangs = Object.keys(languages) as AppLang[];

export const translations = Object.fromEntries(
  Object.entries(languages).map(([key, val]) => [key, val.translations])
) as Record<AppLang, (typeof languages)[AppLang]["translations"]>;

export const speechLocales = Object.fromEntries(
  Object.entries(languages).map(([key, val]) => [key, val.speechLocale])
) as Record<AppLang, string>;

export const langLabels = Object.fromEntries(
  Object.entries(languages).map(([key, val]) => [key, val.label])
) as Record<AppLang, string>;

export const langCountries = Object.fromEntries(
  Object.entries(languages).map(([key, val]) => [key, val.country])
) as Record<AppLang, string>;

export function detectInitialLang(): AppLang {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem("appLang");
  if (saved && saved in languages) return saved as AppLang;

  const browser = navigator.language.slice(0, 2);
  const match = supportedLangs.find((l) => l === browser);

  return match || "en";
}
