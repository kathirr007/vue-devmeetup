/* eslint-disable no-restricted-syntax */
import Vue from 'vue';
import Vuex from 'vuex';

import meetup from './meetup';
import user from './user';
import shared from './shared';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export default new Vuex.Store({
  modules: {
    meetup,
    user,
    shared
  }
});
