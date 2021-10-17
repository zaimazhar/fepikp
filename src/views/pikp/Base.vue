<template>
	<v-app>
		<PIKPNavbar />
		<v-main class="bg-sky">
			<router-view />
		</v-main>
		<PIKPFooter />
	</v-app>
</template>

<script>
	import PIKPFooter from "../../components/PIKP/PIKPFooter.vue";
	import PIKPNavbar from "../../components/PIKP/PIKPNavbar.vue";
	export default {
		components: { PIKPNavbar, PIKPFooter },
	};
</script>

<style>
  .bg-sky { 
    background-image: linear-gradient(135deg, #204666, #22313f);
  }
</style>>
