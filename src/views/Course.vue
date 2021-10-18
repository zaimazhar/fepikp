<template>
	<div>
		<Base>
			<v-container>
				<h1 class="text-center main">Program</h1>
				<br /><br />
				<v-data-table
					loading="true"
					light
					:headers="headers"
					:items="courses"
					:items-per-page="5"
					class="elevation-1"
					item-class="text-center"
				>
					<template v-slot:item.id="{ item }">
						<v-btn
							@click="setCourseName(item.courseName, item.id)"
							color="green"
							v-bind:value="item.id"
							>Daftar</v-btn
						>
					</template>
				</v-data-table>
			</v-container>
		</Base>
	</div>
</template>

<script>
	import Base from "./Base.vue";
	export default {
		components: { Base },
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
					value: "id",
				},
			],
		}),
		methods: {
			setCourseName(kosName, id) {
				this.$store.dispatch("SetCourse", kosName);
				this.$router.replace(`/register/${id}`);
			},
		},
		created() {
			this.$http.get("/course").then((courses) => {
				const data = courses.data;
				data.map((course) => {
					course.courseCost = `RM${course.courseCost}`;
					course.courseStart = new Intl.DateTimeFormat("ms-MY").format(
						new Date(course.courseStart)
					);
					course.courseEnd = new Intl.DateTimeFormat("ms-MY").format(
						new Date(course.courseEnd)
					);
					course.courseVenue = Object.values(course.courseVenue)
						.filter((data) => data.length > 1)
						.join(", ");
				});
				this.courses = data;
			});
		},
	};
</script>

<style>
	.main {
		color: #30336b;
	}
</style>
