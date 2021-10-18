<template>
	<v-app>
		<SHEProNavbar />
		<v-main class="bg">
      <div class="py-16"></div>
			<slot />
      <div class="py-16"></div>
		</v-main>
		<SHEProFooter />
	</v-app>
</template>

<script>
	import SHEProFooter from "../components/SHEPro/SHEProFooter.vue";
	import SHEProNavbar from "../components/SHEPro/SHEProNavbar.vue";
	export default {
		components: { SHEProNavbar, SHEProFooter },
	};
</script>

<style scoped>

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
