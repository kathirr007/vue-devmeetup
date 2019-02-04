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
              <form @submit.prevent="onSignup">
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
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      color="teal"
                      :rules="[comparePasswords]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn color="teal white--text ma-0" type="submit" :disabled="loading" :loading="loading">Sign up
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: ""
      };
    },
    computed: {
      comparePasswords() {
        return this.password !== this.confirmPassword
          ? "Passwords do not match"
          : true;
      },
      user() {
        return this.$store.getters.user;
      },
      err() {
        return this.$store.getters.error;
      },
      loading() {
        return this.$store.getters.loading;
      }
    },
    watch: {
      user(value) {
        if (value !== null && value !== undefined) {
          this.$router.push("/");
        }
      }
    },
    methods: {
      onSignup() {
        console.log({
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        this.$store.dispatch("signUserUp", {
          email: this.email,
          password: this.password
        });
      },
      onDismissed() {
        console.log('Alert Dismissed...');
        this.$store.dispatch('clearError');
      }
    }
  };
</script>

<style scoped>
</style>