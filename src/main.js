import Vue from 'vue'
import App from '@src/App.vue'
import router from '@src/router'
import store from '@src/store'
require('@assets/less/common.less')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
