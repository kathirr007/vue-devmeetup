<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="teal lighten-2">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs5 sm4 md3>
                <v-card-media height="125" src="https://picsum.photos/1024/700/?random"></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title class="pa-3">
                  <div>
                    <h4 class="headline white--text mb-0">Meetup 01</h4>
                    <div>23rd February 2019</div>
                  </div>
                </v-card-title>
                <v-card-actions class="pa-0 px-3">
                  <v-btn class="teal" dark to="/meetups/1">
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
  export default {};
</script>

<style scoped>
</style>