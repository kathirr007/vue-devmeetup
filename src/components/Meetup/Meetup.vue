<template>
  <v-container fluid>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular :value="70"
        indeterminate
        class="primary--text"
        :width="7"
        v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline teal--text">{{ meetup.title }}</h4>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
            </template>
          </v-card-title>
          <v-img responsive height="400" :src="meetup.imageUrl"></v-img>
          <v-card-text class="mt-2">
            <div class="info--text title mb-2">{{ formatDate(meetup.date) }} - {{ meetup.location }}</div>
            <div>
              <app-edit-meetup-date-dialog :meetup="meetup" v-if="userIsCreator"></app-edit-meetup-date-dialog>
              <app-edit-meetup-time-dialog :meetup="meetup" v-if="userIsCreator"></app-edit-meetup-time-dialog>
            </div>
            <p>{{meetup.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="teal">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import format from "date-fns/format";

  export default {
    data() {
      return {
        format
      };
    },
    methods: {
      formatDate(date) {
        return format(date, "Do MMM YYYY hh:mm A");
      }
    },
    props: ["id"],
    computed: {
      meetup() {
        return this.$store.getters.loadedMeetup(this.id);
      },
      userIsAuthenticated() {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator() {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.meetup.creatorId
      },
      loading() {
        return this.$store.getters.loading;
      }
    }
  };
</script>

<style scoped>
</style>
