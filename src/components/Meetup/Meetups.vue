<template>
  <v-container fluid>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-3">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="teal lighten-2">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12 sm4 md3>
                <v-img cover height="125" :src="meetup.imageUrl"></v-img>
              </v-flex>
              <v-flex sm8 md9>
                <v-card-title
                  primary-title
                  :class="{'pa-3': $vuetify.breakpoint.smAndUp, 'pa-0 py-3': $vuetify.breakpoint.xs}"
                >
                  <div>
                    <h4 class="headline white--text mb-0">{{meetup.title}}</h4>
                    <div>{{ formatDate(meetup.date) }}</div>
                  </div>
                </v-card-title>
                <v-card-actions
                  :class="{'pa-0 px-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}"
                >
                  <v-btn class="teal" dark :to="`meetups/${meetup.id}`">
                    <v-icon left light>arrow_forward</v-icon>View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
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
    computed: {
      meetups() {
        return this.$store.getters.loadedMeetups;
      }
    }
  };
</script>

<style scoped>
</style>
