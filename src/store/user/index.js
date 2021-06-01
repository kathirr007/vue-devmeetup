/* eslint-disable no-restricted-syntax */
import * as firebase from "firebase";

// eslint-disable-next-line import/prefer-default-export
export default {
  state: {
    user: null,
    isForgotPassword: false,
    isEmailSent: false
  },
  mutations: {
    registerUserForMeetup(state, payload) {
      const id = payload.id;
      if (state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >= 0) {
        return;
      }
      state.user.registeredMeetups.push(id);
      state.user.fbKeys[id] = payload.fbKey;
    },
    unregisterUserFromMeetup(state, payload) {
      const registeredMeetups = state.user.registeredMeetups;
      registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1);
      Reflect.deleteProperty(state.user.fbKeys, payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    toggleForgotPassword(state, value) {
      state.isForgotPassword = value;
    },
    setEmailSent(state, value) {
      state.isEmailSent = value;
    }
  },
  actions: {
    registerUserForMeetup({ commit, getters }, payload) {
      commit("setLoading", true);
      const user = getters.user;
      firebase
        .database()
        .ref(`/users/${user.id}`)
        .child(`/registrations/`)
        .push(payload)
        .then(data => {
          commit("setLoading", false);
          commit("registerUserForMeetup", { id: payload, fbKey: data.key });
        })
        .catch(err => {
          console.log(err);
          commit("setLoading", false);
        });
    },
    unregisterUserFromMeetup({ commit, getters }, payload) {
      commit("setLoading", true);
      const user = getters.user;
      if (!user.fbKeys) {
        return;
      }
      const fbKey = user.fbKeys[payload];
      firebase
        .database()
        .ref(`/users/${user.id}/registrations/`)
        .child(fbKey)
        .remove()
        .then(() => {
          commit("setLoading", false);
          commit("unregisterUserFromMeetup", payload);
        })
        .catch(err => {
          console.log(err);
          commit("setLoading", false);
        });
    },
    signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            registeredMeetups: [],
            fbKeys: {}
          };

          commit("setUser", newUser);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.warn(err);
        });
    },
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            registeredMeetups: [],
            fbKeys: {}
          };

          commit("setUser", newUser);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.warn(err);
        });
    },
    sendEmail() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch(error => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
    async resetPassword({ commit, state }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        // eslint-disable-next-line
        .then(_ => {
          commit("setLoading", false);
          commit("toggleForgotPassword", !state.isForgotPassword);
          commit("setEmailSent", true);
          console.log(`Password reset has been sent to ${payload.email}`);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.warn(err);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", {
        id: payload.uid,
        registeredMeetups: [],
        fbKeys: {}
      });
    },
    fetchUserData({ commit, getters }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref(`/users/${getters.user.id}/registrations`)
        .once("value")
        .then(data => {
          const dataPairs = data.val();
          const registeredMeetups = [];
          const swappedPairs = {};
          for (const key in dataPairs) {
            registeredMeetups.push(dataPairs[key]);
            swappedPairs[dataPairs[key]] = key;
          }
          console.log(registeredMeetups);
          console.log(swappedPairs);
          const updatedUser = {
            id: getters.user.id,
            registeredMeetups: registeredMeetups,
            fbKeys: swappedPairs
          };
          commit("setLoading", false);
          commit("setUser", updatedUser);
        })
        .catch(err => {
          console.log(err);
          commit("setLoading", false);
        });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isForgotPassword(state) {
      return state.isForgotPassword;
    },
    isEmailSent(state) {
      return state.isEmailSent;
    }
  }
};
