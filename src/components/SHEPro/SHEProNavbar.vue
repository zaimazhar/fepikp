<template>
	<div>
		<v-system-bar></v-system-bar>
		<v-app-bar
			app
			color="deep-orange lighten-2"
			elevation="0"
			fixed
		>
			<v-spacer></v-spacer>
			<div class="hidden-md-and-up">
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			</div>
			<div class="hidden-sm-and-down">
				<v-btn
					v-for="link in links"
					v-bind:key="link.id"
					v-bind:to="link.href"
					text
				>
					<span class="mr-2">{{ link.name }}</span>
				</v-btn>
			</div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute right temporary>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-orange--text text--accent-4"
				>
					<v-list-item
						v-for="link in links"
						v-bind:key="link.id"
						v-bind:to="link.href"
					>
						<v-list-item-title>{{ link.name }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
	export default {
		data: () => ({
			drawer: false,
			group: null,
			titlePage:
				"SHEPro Training and Consultancy",
			links: [
				{
					href: "/pikp",
					name: "PIKP",
				},
				{
					href: "/",
					name: "Laman Utama",
				},
				{
					href: "/courses",
					name: "Daftar Kos",
				},
				{
					href: "/contact",
					name: "Hubungi Kami",
				},
				{
					href: "/login",
					name: "Log Masuk"
				}
			]
		}),
		watch: {
			group() {
				this.drawer = false;
			},
		},
	};
</script>

<style></style>
