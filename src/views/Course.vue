<template>
	<v-container>
		<v-card color="brown lighten-1" dark :elevation="5" pa-4 class="pa-5">
      {{ courses }}
			<h1 class="text-center">Courses</h1>
			<br /><br />
			<v-data-table
				:headers="headers"
				:items="desserts"
				:items-per-page="5"
				class="elevation-1"
			>
			</v-data-table>
			<br /><br />
			<v-btn @click="login" color="primary">
				Login
			</v-btn>
			<v-btn @click="checkConnection" color="danger">
				Check
			</v-btn>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		name: "Course",
		title: "Courses",
		data: () => ({
      courses: []
    }),
		methods() {},
		created() {
      this.$http.get('/course').then( courses => {
        this.courses = courses.data
      })
    },
	};
</script>

<style></style>
