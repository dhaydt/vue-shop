import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'bootstrap';
import 'popper.js';
import './assets/app.scss'

window.$ = window.jQuery = jQuery;
Vue.config.productionTip = false
Vue.component('navBar', require('./components/navBar.vue').default);
Vue.use(ViewUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
