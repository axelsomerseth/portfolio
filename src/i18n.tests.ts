import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSON from "./locales/en.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  // Uncomment to have a common namespace used around the full app and remove the locale files.
  // ns: ["translationsNS"],
  // defaultNS: "translationsNS",

  // Turn on to debug in local development
  debug: true,

  interpolation: {
    escapeValue: false, // Not needed for React
  },

  resources: {
    en: {
      ...enJSON,
    },
  },
});

export default i18n;
