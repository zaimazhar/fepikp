<template>
	<v-app>
		<PIKPNavbar />
		<v-main class="bg-sky">
			<slot />
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
    background-color: #273c75;
  }
</style>>
