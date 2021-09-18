<template>
  <v-app>
    <v-system-bar color="deep-purple darken-1"></v-system-bar>
    <v-app-bar
      app
      color="brown lighten-1"
      dark
      :elevation="5"
    >
      <v-toolbar-title>My files</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-md-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <div class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          v-bind:key="link.id"
          v-bind:href="link.href"
          text
        >
          <span class="mr-2">{{link.name}}</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
          v-model="drawer"
          absolute
          right
          temporary
        >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="link in links" v-bind:key="link.id" v-bind:href="link.href">
              <v-list-item-title>{{ link.name }}</v-list-item-title>
              
            </v-list-item>
          </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    <v-main class="blue-grey lighten-2">
      <v-container>
        <v-card
          color="brown lighten-1"
          dark
          :elevation="5"
          pa-4
          class="pa-5"
        >
          <router-view />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
    links: [
      {
        href: "/",
        name: "Home"
      },
      {
        href: "/courses",
        name: "Courses"
      },
      {
        href: "/login",
        name: "Login"
      },
      {
        href: "/signup",
        name: "Signup"
      },
      {
        href: "/dashboard",
        name: "Dashboard"
      }
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>
