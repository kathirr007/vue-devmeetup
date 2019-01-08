<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="headline teal--text">{{ meetup.title }}</h4>
          </v-card-title>
          <v-img height="400" :src="meetup.imageUrl"></v-img>
          <v-card-text class="mt-2">
            <div
              class="info--text title mb-2"
            >{{ format(meetup.date, "dddd, Do MMMM, YYYY") }} -Where it takes place</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sequi placeat sint eveniet quisquam aliquam autem temporibus vel velit? Vitae fuga soluta laudantium porro sunt labore ipsam consequuntur magnam. Debitis.</p>
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