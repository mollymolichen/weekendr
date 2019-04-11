import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,                
  render: h => h(App)
}).$mount('#app')