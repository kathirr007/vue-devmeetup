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
        imageUrl: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg',
        id: 'qsdfhsdfghjk',
        title: 'Meetup-01',
        date: new Date(),
        location: 'Madurai',
        description: 'The meetup is happening at Madurai'
      },
      {
        imageUrl: 'https://images.pexels.com/photos/682016/pexels-photo-682016.jpeg',
        id: '12wedrt678uijk',
        title: 'Meetup-02',
        date: new Date(),
        location: 'Delhi',
        description: 'The meetup is happening at Delhi'
      },
      {
        imageUrl: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        id: '1234eftyukl',
        title: 'Meetup-03',
        date: new Date(),
        location: 'Chennai',
        description: 'The meetup is happening at Chennai'
      },
      {
        imageUrl: 'https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg',
        id: 'dfgh7678ijhg',
        title: 'Meetup-04',
        date: new Date(),
        location: 'Bangalore',
        description: 'The meetup is happening at Bangalore'
      },
      {
        imageUrl: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg',
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
      state.loadedMeetups = payload;
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    updateMeetup(state, payload) {
      const meetup = state.loadedMeetups.find((meetup) => meetup.id === payload.id)
      if (payload.title) {
        meetup.title = payload.title
      }
      if (payload.description) {
        meetup.description = payload.description
      }
      if (payload.date) {
        meetup.date = payload.date
      }
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
      commit('setLoading', true);
      firebase.database().ref('meetups').once('value')
        .then(data => {
          const meetups = [];
          const obj = data.val();

          for (const key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              location: obj[key].location,
              creatorId: obj[key].creatorId
            });
          }
          commit('setLoadedMeetups', meetups);
          commit('setLoading', false);
        })
        .catch(error => {
          console.log(error);
          commit('setLoading', true);
        });
    },
    createMeetup({ commit, getters }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      };
      let imageUrl;
      let key;

      firebase.database().ref('meetups').push(meetup)
      .then(data => {
          console.log(data);
          key = data.key;

return key;
        })
        .then(key => {
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf('.'));


return firebase.storage().ref(`meetups/${key}.${ext}`).put(payload.image);
        })
        .then(fileData => {
          console.log(fileData);
          imageUrl = fileData.metadata.name;

return firebase.storage().ref(fileData.metadata.fullPath)
          .getDownloadURL();
        })
        .then(url => {
          imageUrl = url;

return firebase.database().ref('meetups').child(key).update({ imageUrl: url });
        })
        .then(() => {
          commit('createMeetup', {
            ...meetup,
            id: key,
            imageUrl
          });
        })
        .catch(error => {
            console.log(error);
        });
    //   Reach out to firebase and store it
    },
    updateMeetupData({ commit }, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.date) {
        updateObj.date = payload.date
      }
      firebase.database().ref('meetups').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateMeetup', payload)
        })
        .catch(err => {
          console.log(err)
          commit('setLoading', false)
        })
    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };

          commit('setUser', newUser);
        })
        .catch(err => {
          commit('setLoading', false);
          commit('setError', err);
          console.warn(err);
        });
    },
    signUserIn({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };

          commit('setUser', newUser);
        })
        .catch(err => {
          commit('setLoading', false);
          commit('setError', err);
          console.warn(err);
        });
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid, registeredMeetups: [] });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit('setUser', null);
    },
    clearError({ commit }) {
      commit('clearError');
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
      return state.loading;
    },
    error(state) {
      return state.error;
    }
  }
});
