<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline teal--text">{{ meetup.title }}</h4>
          </v-card-title>
          <v-img responsive height="400" :src="meetup.imageUrl"></v-img>
          <v-card-text class="mt-2">
            <div class="info--text title mb-2">{{ formatDate(meetup.date) }} - {{ meetup.location }}</div>
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
      }
    }
  };
</script>

<style scoped>
</style>