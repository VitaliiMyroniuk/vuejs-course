import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import netfix from './plugins/netfix.js'

Vue.config.productionTip = false
Vue.use(netfix)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
