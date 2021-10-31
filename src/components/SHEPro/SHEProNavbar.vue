<template>
	<div>
		<v-app-bar app class="bg" elevate-on-scroll elevation="4">
			<v-spacer></v-spacer>
			<div class="hidden-md-and-up">
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			</div>
			<div class="hidden-sm-and-down">
				<v-btn
					dark
					class="btn mx-1 rounded-lg font-weight-black"
					v-for="link in links"
					v-bind:key="link.id"
					v-bind:to="link.href"
					text
					active-class="btn-active"
				>
					<span class="mr-2">{{ link.name }}</span>
				</v-btn>
				<v-btn
					v-if="authState"
					dark
					class="btn mx-1 rounded-lg font-weight-black"
					to="/dashboard"
					text
					active-class="btn-active"
				>
					<span class="mr-2">Papan Pemuka</span>
				</v-btn>
				<v-btn
					v-else
					dark
					class="btn mx-1 rounded-lg font-weight-black"
					to="/login"
					text
					active-class="btn-active"
				>
					<span class="mr-2">Log Masuk</span>
				</v-btn>
			</div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" app fixed right temporary>
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
	import { mapGetters } from "vuex";
	export default {
		data: () => ({
			drawer: false,
			group: null,
			titlePage: "SHEPro Training and Consultancy",
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
					name: "Daftar Kursus",
				},
				{
					href: "/contact",
					name: "Hubungi Kami",
				},
			],
		}),
		computed: mapGetters(["authState"]),
		watch: {
			group() {
				this.drawer = false;
			},
		},
	};
</script>

<style scoped>
	.btn {
		background-color: #273c75;
	}

	.btn-active {
		background-color: #45aaf2;
	}

	.bg {
		width: 100%;
		background: rgb(255, 230, 59);
		background: linear-gradient(
			80deg,
			rgba(255, 230, 59, 1) 0%,
			rgba(255, 244, 167, 1) 100%
		);
	}
</style>
