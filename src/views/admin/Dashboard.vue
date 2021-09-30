<template>
	<v-container>
		<v-main class="blue-grey darken-4 px-lg-16">
			<div class="text-center">
				<span class="white--text text-center display-1">Papan Pemuka</span
				><br /><br />
			</div>
			<v-card class="pa-3" elevation="5">
				<v-row no-gutters>
					<v-col cols="12" sm="2">
						<v-navigation-drawer floating permanent>
							<v-list nav dense>
								<v-list-item-group color="primary">
									<v-list-item
										v-for="(item, i) in items"
										:key="i"
										v-bind:to="item.to"
									>
										<v-list-item-icon>
											<v-icon v-text="item.icon"></v-icon>
										</v-list-item-icon>

										<v-list-item-content>
											<v-list-item-title v-text="item.text"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-navigation-drawer>
					</v-col>
					<v-col cols="12" sm="10">
						<router-view />
					</v-col>
				</v-row>
			</v-card>
		</v-main>
	</v-container>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "Dashboard",
		title: `Dashboard`,
		computed: mapGetters(["authState"]),
		methods: {},
		data: () => ({
			items: [
				{ text: "Senarai Program", icon: "mdi-format-list-bulleted-square", to: "/dashboard/home" },
				{ text: "Cipta Program", icon: "mdi-plus", to: "/dashboard/program" },
			],
		}),
	};
</script>

<style></style>
