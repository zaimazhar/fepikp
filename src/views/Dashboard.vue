<template>
  <v-container>
    <p>{{ username }}</p>
    <p>{{ authState }}</p>
    <v-btn
      @click="changeState"
    >
      Click Me!!!
    </v-btn>
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
    username: 'zaimazhar97',
    age: 24
  })
}
</script>

<style>

</style>