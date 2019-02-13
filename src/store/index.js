/* eslint-disable no-restricted-syntax */
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
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    loadMeetups({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (const key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', true)
        })
    },
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString(),
      };
      firebase.database().ref('meetups').push(meetup)
      .then((data) => {
          console.log(data)
          const {key} = data.key;
          commit('createMeetup', {...meetup, key});
        })
        .catch((error) => {
            console.log(error)
        })
    //   Reach out to firebase and store it
    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };
          commit('setUser', newUser);
        })
        .catch(err => {
          commit('setLoading', false)
          commit('setError', err)
          console.warn(err);
        });
    },
    signUserIn({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };
          commit('setUser', newUser);
        })
        .catch(err => {
          commit('setLoading', false)
          commit('setError', err)
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
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    }
  }
});