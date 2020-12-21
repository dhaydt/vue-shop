import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'bootstrap';
import 'popper.js';
import './assets/app.scss'

window.$ = window.jQuery = jQuery;
Vue.config.productionTip = false
Vue.component('navBar', require('./components/navBar.vue').default);
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
