<template>
	<v-container fluid class="white--text" style="height: 100%">
		<v-row style="height: 80%" class="pa-sm-6 pa-md-0">
			<v-col cols="12" md="4" align-self="center" class="my-6 ma-md-auto">
				<v-row v-bind:justify="$vuetify.breakpoint.mdAndDown ? 'center' : 'end'" align="center">
					<v-img
						class="animate-box"
						src="@/assets/PIKP.png"
						max-height="500"
						max-width="250"
						transition="0.4"
					></v-img>
				</v-row>
			</v-col>
			<v-col cols="12" md="8" align-self="center" style="width: 350px;">
				<v-row justify="start" align="center" class="ml-md-12">
					<v-col v-bind:cols="$vuetify.breakpoint.mdAndDown ? 12 : 10 ">
						<p :class="$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-2'" class="font-new">
							PERSATUAN PENDIDIK ILMU IKHTISAS DAN KEMAHIRAN PEKERJAAN (PIKP)
						</p>
					</v-col>
					<v-col cols="12">
						<p class="subtitle">
							Berbekalkan Tenaga Kemahiran Mahir Untuk Menawarkan Latihan
							Kemahiran Yang Berkualiti
						</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	export default {
		name: "Home",
		title: "Home",
		methods: {},
	};
</script>
<style>
	* {
		font-family: "Nunito", sans-serif;
	}

	@keyframes box {
		0% {
			transform: translateY(0px);
		}
    50% {
      transform: translateY(-20px);
    }
		100% {
			transform: translateY(0px);
		}
	}

	.animate-box {
		animation: box 5s infinite linear;
	}

	.font-new {
		font-family: "Ubuntu", sans-serif;
	}
</style>
