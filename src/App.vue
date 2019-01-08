<template>
  <v-app>
    <v-navigation-drawer dark v-model="sideNav" class="teal">
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-icon left>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="teal darken-4">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Vue DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left dark>supervisor_account</v-icon>View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main></main>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        sideNav: false
      };
    }
  };
</script>
