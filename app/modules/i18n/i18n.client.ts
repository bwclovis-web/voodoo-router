import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: import.meta.env.DEV,
      load: 'languageOnly',
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },
      react: {
        useSuspense: true,
        bindI18n: 'languageChanged'
      }
    })
}

export default i18n
