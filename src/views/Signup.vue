<template>
  <div>
    <div v-if="status">
      <p>{{ username }} has been successfully created!</p>
    </div>
    <div v-else>
      <h4>Please register an account</h4>
      <v-text-field 
        :rules="rules"
        label="Username"
        color="blue"
        v-model="username"
      ></v-text-field>
      <v-text-field 
        :rules="rules"
        label="Email"
        color="blue"
        type="email"
        v-model="email"
      ></v-text-field>
      <v-text-field 
        :rules="rules"
        label="Password"
        color="blue"
        type="password"
        v-model="password"
      ></v-text-field>
      <v-btn
        color="blue"
        @click="signup()"
      >
        Submit
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    email: '',
    password: '',
    status: false
  }),
  methods: {
    signup() {
      this.$http.post('http://localhost:3000/auth/signup', {
        username: this.username,
        password: this.password,
        email: this.email
      }).then( () => {
        this.status = true
      }).catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>