import Vue from 'vue';
import './plugins/vuetify';
// import Vuetify from 'vuetify';
import * as firebase from 'firebase';
import App from './App.vue';
import router from './router';
// import store from './store';
import './registerServiceWorker';
import store from '@/store';
import DateFilter from '@/filters/date';
import AlertCmp from './components/shared/Alert.vue';

// Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.filter('date', DateFilter);
Vue.component('app-alert', AlertCmp);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbA1H6ZLadHkQ0wuzS_1NYRkDiIgZKHlw',
      authDomain: 'vue-devmeetup-eadcf.firebaseapp.com',
      databaseURL: 'https://vue-devmeetup-eadcf.firebaseio.com',
      projectId: 'vue-devmeetup-eadcf',
      storageBucket: 'vue-devmeetup-eadcf.appspot.com'
    });
  }
});
