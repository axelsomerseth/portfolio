import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enJSON from "./locales/en.json";
import esJSON from "./locales/es.json";
import ptJSON from "./locales/pt.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // Not needed for React
    },
    resources: {
      en: {
        ...enJSON,
      },
      es: {
        ...esJSON,
      },
      pt: {
        ...ptJSON,
      },
    },
  });

export default i18n;
