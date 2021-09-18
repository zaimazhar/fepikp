<template>
  <v-container>
    <v-form v-model="valid">
      <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>

          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>


          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  title: `Dashboard`,
  computed: mapGetters(['authState']),
  methods: {
    changeState() {
      this.$store.commit('login')
    },
  },
  data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
}
</script>

<style>

</style>