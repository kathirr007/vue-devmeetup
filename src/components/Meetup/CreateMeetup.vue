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
              <v-btn class="teal white--text text-capitalize ma-0 mb-3" @click="onPickFile">Upload Image</v-btn>
              <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
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
          <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker header-color="teal" color="cyan" v-model="date"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker header-color="teal" color="cyan" v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row class="mt-3">
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                :disabled="!formIsValid"
                class="teal white--text ma-0"
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
        imageUrl: "",
        date: new Date().toISOString().substr(0, 10),
        time: new Date(),
        image: null
      };
    },
    computed: {
      formIsValid() {
        return (
          this.title !== ""
          && this.location !== ""
          && this.imageUrl !== ""
          && this.description !== ""
        );
      },
      submitableDateTime() {
        const date = new Date(this.date);

        if (typeof this.time === "string") {
          const hours = this.time.match(/^(\d+)/)[1];
          const minutes = this.time.match(/:(\d+)/)[1];

          date.setHours(hours);
          date.setMinutes(minutes);
        } else {
          date.setHours(this.time.getHours());
          date.setMinutes(this.time.getMinutes());
        }

        return date;
      }
    },
    methods: {
      onCreateMeetup() {
        if (!this.formIsValid) {
          return;
        }
        if (!this.image) {
          return;
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          date: this.submitableDateTime,
          id: `wert78ikjhgfd${Math.floor(Math.random() * 10000)}`
        };

        this.$store.dispatch("createMeetup", meetupData);
        this.$router.push("/meetups");
      },
      onPickFile() {
        this.$refs.fileInput.click();
      },
      onFilePicked(event) {
        const files = event.target.files;
        const filename = files[0].name;

        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a value file!');
        }
        const fileReader = new FileReader();

        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result;
        });
        fileReader.readAsDataURL(files[0]);
        [this.image] = files;
      }
    }
  };
</script>

<style scoped>
</style>
