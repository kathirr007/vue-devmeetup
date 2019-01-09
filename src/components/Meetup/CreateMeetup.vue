<template>
  <v-container fluid>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="teal--text headline">Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" v-model="title" label="Title" id="title" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                v-model="location"
                label="Location"
                id="location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                v-model="imageUrl"
                label="Image URL"
                id="imageUrl"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="200">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea label="Description" v-model="description" name="description" required></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                :disabled="!formIsValid"
                class="teal white--text text-capitalize ma-0"
                type="submit"
              >Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: "",
        location: "",
        description: "",
        imageUrl: ""
      };
    },
    computed: {
      formIsValid() {
        return (
          this.title !== "" &&
          this.location !== "" &&
          this.imageUrl !== "" &&
          this.description !== ""
        );
      }
    },
    methods: {
      onCreateMeetup() {
        if (!this.formIsValid) {
          return;
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date(),
          id: `wert78ikjhgfd${Math.floor(Math.random() * 10000)}`
        };
        this.$store.dispatch("createMeetup", meetupData);
        this.$router.push("/meetups");
      }
    }
  };
</script>

<style scoped>
</style>