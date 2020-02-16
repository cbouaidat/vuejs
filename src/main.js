import Vue from 'vue'
import App from './App.vue'
import router from './route'
import vuetify from './plugins/vuetify';
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
