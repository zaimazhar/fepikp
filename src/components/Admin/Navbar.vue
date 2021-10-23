<template>
  <v-col cols="2">
			<v-card class="pa-3" elevation="5">
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
			</v-card>
					</v-col>
</template>

<script>
export default {
data: () => ({
			items: [
				{ text: "Senarai Program", icon: "mdi-format-list-bulleted-square", to: "/dashboard/home" },
				{ text: "Cipta Program", icon: "mdi-plus", to: "/dashboard/program" },
			],
		}),
}
</script>

<style>

</style>