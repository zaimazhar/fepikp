<template>
	<v-app>
		<v-system-bar color="deep-purple darken-1"></v-system-bar>
		<v-app-bar app color="blue-grey darken-1" elevation="0" class="px-lg-16" dark>
			<v-img src="@/assets/PIKP.png" max-height="40" max-width="40"></v-img>
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
				<span v-if="!authState">
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
						<span class="mr-2">Dashboard</span>
					</v-btn>
					<v-btn @click="logout()" color="error" depressed>
						<span class="mr-2">Logout</span>
					</v-btn>
				</span>
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
					<v-list-item to="/login" v-if="!authState">
						<v-list-item-title>Login</v-list-item-title>
					</v-list-item>
					<span v-else>
						<v-list-item to="/dashboard">
							<v-list-item-title>Dashboard</v-list-item-title>
						</v-list-item>
						<v-list-item @click="logout()">
							<v-list-item-title>Logout</v-list-item-title>
						</v-list-item>
					</span>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<v-main class="blue-grey darken-1 px-lg-16">
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "App",
		data: () => ({
			drawer: false,
			group: null,
			titlePage: "PERSATUAN PENDIDIK ILMU IKHTISAS DAN KEMAHIRAN PEKERJAAN (PIKP)",
			links: [
				{
					href: "/",
					name: "Home",
				},
				{
					href: "/courses",
					name: "Courses",
				},
			],
			processLinks: [
				{
					href: "/login",
					name: "Login",
				},
			],
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
