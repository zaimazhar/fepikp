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
          href="/"
          text
        >
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn
          href="/courses"
          text
        >
          <span class="mr-2">Courses</span>
        </v-btn>
        <v-btn
          href="/login"
          text
        >
          <span class="mr-2">Login</span>
        </v-btn>
        <v-btn
          href="/dashboard"
          text
        >
          <span class="mr-2">Dashboard</span>
        </v-btn>
        <v-btn
          href="/signup"
          text
        >
          <span class="mr-2">Signup</span>
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
            active-class="deep-purple--text blue-grey darken-1"
          >
            <v-list-item>
              <v-list-item-title>
                <v-btn
                  href="/"
                  text
                >
                  <span class="mr-2">Home</span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-btn
                  href="/courses"
                  text
                >
              <v-list-item-title>
                  <span class="mr-2">Courses</span>
              </v-list-item-title>
                </v-btn>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
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
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>
