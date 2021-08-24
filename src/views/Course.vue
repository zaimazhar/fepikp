<template>
  <v-container>
    <p class="text-center text-h4">Courses</p>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </v-container>
</template>

<script>

export default {
  name: 'Course',
  title: 'Courses'
}

</script>

<style>

</style>