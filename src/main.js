import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import titleMixin from './mixins/titleMixin'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import '@/assets/global.css'
import axiosInstance from './plugins/axios'

Vue.prototype.$http = axiosInstance
Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
