<template>
  <v-app>
    <SHEProNavbar />
		<v-main class="deep-orange lighten-2">
			<slot />
		</v-main>
    <SHEProFooter />
	</v-app>
</template>

<script>
import SHEProFooter from '../components/SHEPro/SHEProFooter.vue'
import SHEProNavbar from '../components/SHEPro/SHEProNavbar.vue'
export default {
  components: { SHEProNavbar, SHEProFooter },

}
</script>

<style>

</style>