<template>
  <v-container class>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large color="info" router to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large color="info" router to="/meetup/new">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="(meetup,i) in meetups" :key="i" :src="meetup.imageUrl">
            <div align-center class="title">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class>
        <p>Join our Awesome Meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        meetups: [
          {
            imageUrl: "https://picsum.photos/1024/700/?random",
            id: "1",
            title: "carousel-01"
          },
          {
            imageUrl: "https://picsum.photos/1024/700/?random",
            id: "2",
            title: "carousel-02"
          },
          {
            imageUrl: "https://picsum.photos/1024/700/?random",
            id: "3",
            title: "carousel-03"
          }
        ]
      };
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