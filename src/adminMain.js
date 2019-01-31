import Vue from 'vue'
import AdminApp from './AdminApp.vue'
import Adminrouter from './adminrouter'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  Adminrouter,
  render: h => h(AdminApp)
}).$mount('#adminapp');
