<template>
  <v-container>
    <v-layout row wrap v-if="err">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="err.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <transition v-if="isForgotPassword" name="fade" mode="out-in">
                <form @submit.prevent="onResetPassword">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email Address"
                        id="email"
                        v-model="email"
                        type="email"
                        color="teal"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn
                        color="teal white--text ma-0"
                        type="submit"
                        :disabled="loading"
                        :loading="loading"
                        >Reset Password
                        <span slot="loader" class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </v-btn>
                      <v-btn
                        color="teal white--text ma-0 ml-4"
                        @click="$store.commit('toggleForgotPassword', !isForgotPassword)"
                        >Sign in
                        <span slot="loader" class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </transition>
              <transition v-else name="fade" mode="out-in">
                <form @submit.prevent="onSignin">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email Address"
                        id="email"
                        v-model="email"
                        type="email"
                        color="teal"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="password"
                        color="teal"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn
                        color="teal white--text ma-0"
                        type="submit"
                        :disabled="loading"
                        :loading="loading"
                        >Sign in
                        <span slot="loader" class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </v-btn>
                      <v-btn
                        color="teal white--text ma-0 ml-4"
                        @click="$store.commit('toggleForgotPassword', !isForgotPassword)"
                        >Forgot Password
                        <span slot="loader" class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </transition>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar top right v-model="snackbar" :multi-line="multiLine" color="teal">
      {{ info }}

      <v-btn color="teal darken-4" text @click="snackbar = false">
        Close
      </v-btn>
      <!-- <template v-slot:action="{ attrs }">
      </template> -->
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      multiLine: true,
      snackbar: false,
      info: ``
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    err() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
    isForgotPassword() {
      return this.$store.getters.isForgotPassword;
    },
    isEmailSent() {
      return this.$store.getters.isEmailSent;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
    isEmailSent(newVal, oldVal) {
      if (newVal) {
        this.info = `Password reset has been sent to ${this.email}`;
        this.snackbar = true;
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onResetPassword() {
      this.$store.dispatch("resetPassword", {
        email: this.email
      });
    },
    onDismissed() {
      console.log("Alert Dismissed...");
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style scoped></style>
