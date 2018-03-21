import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en'
//import es from './locales/es'
//import de from './locales/de'

Vue.use(VueI18n)

var locales = {
  en
  //,es,
  //de
}

export default new VueI18n({
  locale: navigator.language.slice(0,2),
  messages: locales,
  fallbackLocale: 'en'
})
