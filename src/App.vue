<template>
  <v-app>
    <v-navigation-drawer dark temporary v-model="sideNav" class="teal" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="teal darken-4">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Vue DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          class="text-capitalize"
          :to="item.link"
        >
          <v-icon left dark class="hidden-sm-and-down">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn v-if="userIsAuthenticated" class="text-capitalize" flat @click="onLogout">
          <v-icon left dark class="hidden-sm-and-down">exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main class>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ];

      if (this.userIsAuthenticated) {
        menuItems = [
          {
            icon: "supervisor_account",
            title: "View Meetups",
            link: "/meetups"
          },
          { icon: "room", title: "Organize Meetup", link: "/meetup/new" },
          { icon: "person", title: "Profile", link: "/profile" }
        ];
      }

      return menuItems;
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout").then(_ => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="scss">
a[class~="v-list__tile--active"] {
  color: darkblue !important;
}
// .primary--text {
//   color: red !important;
// }
</style>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
