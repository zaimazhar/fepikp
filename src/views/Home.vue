<template>
  <div>
    <p v-if="authState">
      Welcome back, user.
    </p>
    <p v-else>Hello World</p>
    <p>{{ authState }}</p>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Home',
    title: 'Home',
    computed: mapGetters(['authState']),
  }
</script>
