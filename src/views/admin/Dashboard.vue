<template>
	<v-app>
		<v-main class="yellow">
			<v-container class="py-10">
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

	export default {
		components: {
			Navbar,
		},
	};
</script>

<style scoped>
	.yellow {
		background: rgb(180, 56, 56);
	}
</style>
