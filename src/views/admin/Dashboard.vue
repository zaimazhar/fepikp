<template>
	<v-app>
		<v-main class="dash">
			<v-container class="py-10">
				<Authbar /><br>
				<v-row>
					<Navbar />
					<v-col>
						<v-card elevation="5">
							<v-main>
								<v-container class="pa-5">
									<router-view />
								</v-container>
							</v-main>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	import Navbar from "../../components/Admin/Navbar.vue";
	import Authbar from "../../components/Admin/Authbar.vue";

	export default {
		components: {
			Navbar,
			Authbar,
		},
	};
</script>

<style scoped>
	.dash {
		background: rgb(180, 56, 56, 0.7);
	}
</style>
