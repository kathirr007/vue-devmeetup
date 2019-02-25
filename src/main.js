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
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

// Vue.use(Vuetify);
Vue.config.productionTip = false;

/* Github token for travis deployment
const GH_TOKEN=ef66c37d9505eee83cd1ac56caa9e7651bbaafe2 */

Vue.filter('date', DateFilter);
Vue.component('app-alert', AlertCmp);
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog);
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog);
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog);
Vue.component('app-meetup-register-dialog', RegisterDialog);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAbA1H6ZLadHkQ0wuzS_1NYRkDiIgZKHlw",
      authDomain: "vue-devmeetup-eadcf.firebaseapp.com",
      databaseURL: "https://vue-devmeetup-eadcf.firebaseio.com",
      projectId: "vue-devmeetup-eadcf",
      storageBucket: "gs://vue-devmeetup-eadcf.appspot.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user);
        this.$store.dispatch('fetchUserData');
      }
    });
    this.$store.dispatch('loadMeetups');
  }
});
