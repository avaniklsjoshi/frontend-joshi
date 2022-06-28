import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files

import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";
import translationHN from "./locales/hn/translation.json";

//Creating object with the variables of imported translation files
const resources = {
  de: {
    translation: translationDE,
  },
  en: {
    translation: translationEN,
  },
  hn: {
    translation: translationHN,
  },
};

//i18N Initialization

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  lng: "hn", //default language
  resources,
});

export default i18n;
