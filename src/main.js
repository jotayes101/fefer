import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

// import 'font-awesome/css/font-awesome.css';

import router from './router'

import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'fa',
  // theme: {
  //   primary: colors.red.darken1, // #E53935
  //   secondary: colors.red.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // }
})
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app',
//   // router,
//   components: { App },
//   template: '<App/>'
// });