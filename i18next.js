import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Add the backend plugin to load translations
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    lng: "en", // default language
    fallbackLng: "en", // fallback language if the translation key is missing
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files in the public folder
    },
  });

export default i18n;
