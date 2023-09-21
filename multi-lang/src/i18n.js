import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import koTranslation from './locales/ko.json';
import spTranslation from './locales/sp.json';

const resources = {
  en: { translation: enTranslation },
  hi: { translation: hiTranslation },
  ko: { translation: koTranslation },
  sp: { translation: spTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'hi',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
