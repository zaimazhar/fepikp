<template>
  <v-container>
    <h1 class="text-center">Courses</h1>
    <br><br>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
    <br><br>
    <v-btn
      @click="login"
      color="primary"
    >
      Login
    </v-btn>
    <v-btn
      @click="checkConnection"
      color="danger"
    >
      Check
    </v-btn>
  </v-container>
</template>

<script>

export default {
  name: 'Course',
  title: 'Courses',
  methods: {
    login() {
      fetch('http://localhost:3000/auth/login', {
        method: 'post'
      }).then( data => {
        console.log(data)
      }).catch( err => console.error(err))
    },
    checkConnection() {
      fetch('http://localhost:3000/auth/check')
    }
  }
}

</script>

<style>

</style>