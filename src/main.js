import Vue from 'vue'
import App from '@src/App.vue'
import router from '@src/router'
import store from '@src/store'
require('@assets/less/common.less')
Vue.config.productionTip = false
Vue.prototype.$Bus = new Vue()

window.ins = new Vue({
  name: 'root',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
