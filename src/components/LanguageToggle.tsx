import { useI18n } from "../i18n/I18nProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="langToggle" role="group" aria-label="Language toggle">
      <button
        type="button"
        className={["langToggle__btn", locale === "ja" ? "isActive" : ""].filter(Boolean).join(" ")}
        onClick={() => setLocale("ja")}
      >
        JA
      </button>
      <button
        type="button"
        className={["langToggle__btn", locale === "en" ? "isActive" : ""].filter(Boolean).join(" ")}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
}


