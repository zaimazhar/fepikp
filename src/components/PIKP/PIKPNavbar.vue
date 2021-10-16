<template>
	<div>
		<v-system-bar></v-system-bar>
		<v-app-bar
			app
			color="blue-grey darken-4"
			elevation="0"
			class="px-lg-16"
			dark
		>
			<v-img src="@/assets/PIKP.png" max-height="45" max-width="45"></v-img>
			<v-toolbar-title class="pl-3" v-if="$vuetify.breakpoint.mdAndDown">
				PIKP
			</v-toolbar-title>
			<v-toolbar-title class="pl-3" v-else>
				PERSATUAN PENDIDIK ILMU IKHTISAS DAN KEMAHIRAN PEKERJAAN (PIKP)
			</v-toolbar-title>
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
				<!-- <span v-if="!authState">
					<v-btn
						v-for="link in processLinks"
						v-bind:key="link.id"
						v-bind:to="link.href"
						text
					>
						<span class="mr-2">{{ link.name }}</span>
					</v-btn>
				</span>
				<span v-else>
					<v-btn to="/dashboard" text>
						<span class="mr-2">Papan Pemuka</span>
					</v-btn>
					<v-btn @click="logout()" color="error" depressed>
						<span class="mr-2">Log Keluar</span>
					</v-btn>
				</span> -->
			</div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute right temporary>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item
						v-for="link in links"
						v-bind:key="link.id"
						v-bind:to="link.href"
					>
						<v-list-item-title>{{ link.name }}</v-list-item-title>
					</v-list-item>
					<!-- <v-list-item to="/login" v-if="!authState">
						<v-list-item-title>Log Masuk</v-list-item-title>
					</v-list-item>
					<span v-else>
						<v-list-item to="/dashboard">
							<v-list-item-title>Papan Pemuka</v-list-item-title>
						</v-list-item>
						<v-list-item @click="logout()">
							<v-list-item-title>Log Keluar</v-list-item-title>
						</v-list-item>
					</span> -->
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		data: () => ({
			drawer: false,
			group: null,
			titlePage:
				"PERSATUAN PENDIDIK ILMU IKHTISAS DAN KEMAHIRAN PEKERJAAN (PIKP)",
			links: [
				{
					href: "/pikp",
					name: "Laman Utama",
				},
				{
					href: "/pikp/about",
					name: "Tentang Kami",
				},
			],
			// processLinks: [
			// 	{
			// 		href: "/pikp/login",
			// 		name: "Log Masuk",
			// 	},
			// ],
		}),
		computed: {
			...mapGetters(["authState"]),
		},
		methods: {
			async logout() {
				this.$http.post("/logout", {
					token: localStorage.getItem("jwt"),
				});
				this.$store.dispatch("Logout");
				this.$router.push("/");
			},
		},
		watch: {
			group() {
				this.drawer = false;
			},
		},
	};
</script>

<style>
	.bg-home {
		background-image: linear-gradient(135deg, #204666, #22313f);
	}
</style>
