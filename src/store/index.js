import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://lorempixel.com/1024/700/sports',
        id: 'qsdfhsdfghjk',
        title: 'Meetup-01',
        date: '2019-02-18'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/cats',
        id: '12wedrt678uijk',
        title: 'Meetup-02',
        date: '2019-02-26'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/business',
        id: '1234eftyukl',
        title: 'Meetup-03',
        date: '2019-02-10'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/fashion',
        id: 'dfgh7678ijhg',
        title: 'Meetup-04',
        date: '2019-02-28'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/animals',
        id: 'qw46yghjio',
        title: 'Meetup-05',
        date: '2019-02-24'
      }
    ],
    user: {
      id: 'asdfghuio1234',
      registeredMeetups: ['qw46yghjio']
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: payload.id
      };
      commit('createMeetup', meetup);
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => meetupA.date > meetupB.date);
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId => state.loadedMeetups.find(meetup => meetup.id === meetupId);
    }
  }
});
