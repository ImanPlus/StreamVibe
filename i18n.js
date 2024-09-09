import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
import en from "./src/translations/en.json";
import fa from "./src/translations/fa.json";

// Configuration i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fa: {
      translation: fa,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Alternative language in the absence of translation
  interpolation: {
    escapeValue: false, // Prevent data escape
  },
});

export default i18n;
