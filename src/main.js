import Vue from 'vue';
import './plugins/vuetify';
// import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
// import store from './store';
import './registerServiceWorker';
import store from '@/store';

// Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
