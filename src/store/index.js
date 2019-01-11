import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://lorempixel.com/1024/700/sports',
        id: 'qsdfhsdfghjk',
        title: 'Meetup-01',
        date: new Date(),
        location: 'Madurai',
        description: 'The meetup is happening at Madurai'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/cats',
        id: '12wedrt678uijk',
        title: 'Meetup-02',
        date: new Date(),
        location: 'Delhi',
        description: 'The meetup is happening at Delhi'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/business',
        id: '1234eftyukl',
        title: 'Meetup-03',
        date: new Date(),
        location: 'Chennai',
        description: 'The meetup is happening at Chennai'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/fashion',
        id: 'dfgh7678ijhg',
        title: 'Meetup-04',
        date: new Date(),
        location: 'Bangalore',
        description: 'The meetup is happening at Bangalore'
      },
      {
        imageUrl: 'https://lorempixel.com/1024/700/animals',
        id: 'qw46yghjio',
        title: 'Meetup-05',
        date: new Date(),
        location: 'Mysore',
        description: 'The meetup is happening at Mysore'
      }
    ],
    user: null
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: new Date(),
        id: payload.id
      };
      commit('createMeetup', meetup);
    },
    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };
          commit('setUser', newUser);
        })
        .catch(err => {
          console.warn(err);
        });
    },
    signUserIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };
          commit('setUser', newUser);
        })
        .catch(err => {
          console.warn(err);
        });
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
    },
    user(state) {
      return state.user;
    }
  }
});
