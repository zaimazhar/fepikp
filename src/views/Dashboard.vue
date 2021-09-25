<template>
	<v-container>
		<v-card color="brown lighten-1" dark :elevation="5" pa-4 class="pa-5">
			<p>{{ username }}</p>
			<p>{{ authState }}</p>
		</v-card>
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
			username: "zaimazhar97",
			age: 24,
		}),
	};
</script>

<style></style>
