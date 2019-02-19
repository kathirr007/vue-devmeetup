<template>
  <v-container class fluid>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large dark color="teal" router to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large dark color="teal" router to="/meetup/new">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular :value="70"
        indeterminate
        class="primary--text"
        :width="7"
        v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="(meetup,i) in meetups"
            :key="i"
            :src="meetup.imageUrl"
            @click="onLoadMeetup(meetup.id)"
            style="cursor: pointer"
          >
            <div align-center class="title">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our Awesome Meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups() {
        return this.$store.getters.featuredMeetups;
      },
      loading() {
        return this.$store.getters.loading;
      }
    },
    methods: {
      onLoadMeetup(id) {
        this.$router.push(`/meetups/${id}`);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    position: absolute;
    left: 50%;
    bottom: 50px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    transform: translateX(-50%);
  }
</style>
