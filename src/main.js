import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import titleMixin from './mixins/titleMixin'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import '@/assets/global.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.mixin(titleMixin)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
