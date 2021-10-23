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
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<router-link :to="`/dashboard/view/${program.id}`">
							<v-icon color="primary" dark v-bind="attrs" v-on="on">
								mdi-eye
							</v-icon>
						</router-link>
					</template>
					<span>Senarai Pendaftar</span>
				</v-tooltip>
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<router-link :to="`/dashboard/edit/${program.id}`">
							<v-icon color="green" dark v-bind="attrs" v-on="on">
								mdi-pencil
							</v-icon>
						</router-link>
					</template>
					<span>Sunting Program</span>
				</v-tooltip>
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-icon
							color="red"
							dark
							v-bind="attrs"
							v-on="on"
							@click="promptDelete(program.id)"
						>
							mdi-delete
						</v-icon>
					</template>
					<span>Padam Program</span>
				</v-tooltip>
			</v-col>
			<v-divider></v-divider>
		</v-row>
		<v-dialog v-model="dialog" max-width="290">
			<v-card>
				<v-card-title class="text-h5">
					Delete?
				</v-card-title>

				<v-card-text>
					The program will be permanently deleted
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="red" dark @click="deleteId()">
						Yes
					</v-btn>

					<v-btn color="gray" dark @click="dialog = false">
						No
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		title: "Laman Utama",
		data: () => ({
			programs: [],
			dialog: false,
			tempId: '',
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

				// console.log(this.programs);
			},
			promptDelete(id) {
				this.dialog = true
				this.tempId = id
			},
			deleteId() {
				console.log(`Deleted: ${this.tempId}`);
				this.dialog = false
			},
		},
		created() {
			this.getPrograms();
		},
	};
</script>

<style scoped>
	a {
		text-decoration: none;
		margin: 0 3px 0 3px;
	}
</style>
