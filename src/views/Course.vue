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