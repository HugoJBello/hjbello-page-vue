import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import i18n from './i18n'
import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.component('vue-markdown', VueMarkdown);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
