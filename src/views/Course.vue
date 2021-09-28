<template>
	<v-container>
		<v-card color="brown lighten-1" dark :elevation="5" class="pa-5">
			<h1 class="text-center">Program</h1>
			<br /><br />
			<v-data-table
				loading="true"
				:headers="headers"
				:items="courses"
				:items-per-page="5"
				class="elevation-1"
				item-class="text-center"
			>
				<template v-slot:item.id="{ item }">
					<v-btn @click="setCourseName(item.courseName, item.id)"  color="green" v-bind:value="item.id">Daftar</v-btn>
				</template>
			</v-data-table>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		name: "Course",
		title: "Program PIKP",
		data: () => ({
			courses: [],
			headers: [
				{
					align: "center",
					text: "Nama Program",
					value: "courseName",
				},
				{
					align: "center",
					text: "Tarikh Mula",
					value: "courseStart",
				},
				{
					align: "center",
					text: "Tarikh Tamat",
					value: "courseEnd",
				},
				{
					align: "center",
					text: "Yuran",
					value: "courseCost",
				},
				{
					align: "center",
					text: "Tempat",
					value: "courseVenue",
				},
				{ 
					text: "", 
					value: "id" 
				},
			],
		}),
		methods: {
			setCourseName(kosName, id) {
				this.$store.dispatch('SetCourse', kosName)
				this.$router.replace(`/register/${id}`)
			}
		},
		created() {
			this.$http.get("/course").then((courses) => {
				const data = courses.data;
				data.map((course) => {
					console.log(course.id);
					course.courseCost = `RM${course.courseCost}`
					course.courseStart = new Intl.DateTimeFormat("ms-MY").format(
						new Date(course.courseStart)
					);
					course.courseEnd = new Intl.DateTimeFormat("ms-MY").format(
						new Date(course.courseEnd)
					);
					course.courseVenue = Object.values(course.courseVenue).filter(data => data.length > 1).join(", ");
				});
				this.courses = data;
			});
		},
	};
</script>

<style></style>
