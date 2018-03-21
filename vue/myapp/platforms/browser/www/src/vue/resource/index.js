import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs.org/'

Vue.http.interceptor.before = (request, next) => {
  /* eslint-disable no-undef */
  console.log('request - ', request)
  next((response) => {
    // $('#loader').css('display', 'none')
    console.log('response - ', response)
  })
}
