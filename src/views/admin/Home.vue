<template>
	<div>
		<v-row class="text-center">
			<v-col cols="12" sm="2">Nama Program</v-col>
			<v-col cols="12" sm="2">Tarikh Mula</v-col>
			<v-col cols="12" sm="2">Tarikh Tamat</v-col>
			<v-col cols="12" sm="2">Yuran Program</v-col>
			<v-col cols="12" sm="2">Tempat Program</v-col>
			<v-col cols="12" sm="2">Tindakan</v-col>
		</v-row>
		<v-row
			class="text-center"
			v-for="(program, index) in programs"
			:key="index"
		>
			<v-col cols="12" sm="2">{{ program.courseName }}</v-col>
			<v-col cols="12" sm="2">{{ program.courseStart }}</v-col>
			<v-col cols="12" sm="2">{{ program.courseEnd }}</v-col>
			<v-col cols="12" sm="2">{{ program.courseCost }}</v-col>
			<v-col cols="12" sm="2">{{ program.courseVenue }}</v-col>
			<v-col cols="12" sm="2">
				<v-btn
					class="ma-1"
					color="primary"
					v-bind:to="`/dashboard/view/${program.id}`"
					>Lihat</v-btn
				>
				<v-btn
					class="ma-1"
					color="warning"
					v-bind:to="`/dashboard/edit/${program.id}`"
					>Sunting</v-btn
				>
				<v-btn
					class="ma-1"
					color="red"
					dark
					v-bind:to="`/dashboard/delete/${program.id}`"
					>Padam</v-btn
				>
			</v-col>
			<v-divider></v-divider>
		</v-row>
	</div>
</template>

<script>
	export default {
		title: "Laman Utama",
		data: () => ({
			programs: [],
		}),
		methods: {
			async getPrograms() {
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
					this.programs = data;
				});

				console.log(this.programs);
			},
		},
		created() {
			this.getPrograms();
		},
	};
</script>

<style></style>
