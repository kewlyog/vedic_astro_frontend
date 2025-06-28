import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      name: 'Name',
      dob: 'Date of Birth',
      tob: 'Time of Birth',
      pob: 'Place of Birth',
      language: 'Language',
      submit: 'Get Astrology Info',
      result: 'Astrology Result',
      select_language: 'Select your language',
    },
  },
  hi: {
    translation: {
      name: 'नाम',
      dob: 'जन्म तिथि',
      tob: 'जन्म का समय',
      pob: 'जन्म स्थान',
      language: 'भाषा',
      submit: 'ज्योतिष जानकारी प्राप्त करें',
      result: 'ज्योतिष परिणाम',
      select_language: 'अपनी भाषा चुनें',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 