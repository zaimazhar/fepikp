<template>
	<Base>
		<v-row class="pa-sm-6 pa-md-0 mb-16">
			<v-col cols="12" md="5" align-self="center" class="my-6 ma-md-auto">
				<v-container>
					<v-row
						v-bind:justify="$vuetify.breakpoint.mdAndDown ? 'center' : 'end'"
						align="center"
					>
						<v-img
							src="@/assets/shepro.png"
							max-height="500"
							max-width="400"
						></v-img>
					</v-row>
				</v-container>
			</v-col>
			<v-col
				cols="12"
				md="7"
				:class="$vuetify.breakpoint.mdAndDown ? 'pr-5' : 'p-0'"
				align-self="center"
			>
				<v-container>
					<v-row justify="start" align="center" class="ml-md-12">
						<v-col v-bind:cols="$vuetify.breakpoint.mdAndDown ? 12 : 10">
							<p
								:class="
									$vuetify.breakpoint.mdAndDown ? 'display-2' : 'display-3'
								"
							>
								<span class="font-new "
									>Latihan Professional Untuk Keselamatan Anda</span
								>
							</p>
						</v-col>
						<v-col cols="12">
							<p class="headline sc">
								Latihan keselamatan yang diyakini bermanfaat dan berbaloi.
								Kami menyediakan kepakaran untuk melatih pekerja anda mengenai keselamatan tempat kerja.
							</p>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
		<section class="bg-sec my-16 py-16 ">
			<v-container>
				<p class="display-1 text-center font-weight-black main">
					Pengalaman para pengajar sangat berharga
				</p>
				<p class="headline text-center sc">
					SHEPro menyediakan semuanya untuk anda
				</p><br><br>
				<v-row>
					<v-col cols="4">
						<v-card>
							<v-img src="@/assets/shepro-bg.png"></v-img>
							<v-card-title class="headline">CIDB</v-card-title>
							<v-card-subtitle>Get your greenbook</v-card-subtitle>
						</v-card>
					</v-col>
					<v-col cols="4">
						<v-card>
							<v-img src="@/assets/shepro-bg.png"></v-img>
							<v-card-title class="headline">CIDB</v-card-title>
							<v-card-subtitle>Get your greenbook</v-card-subtitle>
						</v-card>
					</v-col>
					<v-col cols="4">
						<v-card>
							<v-img src="@/assets/shepro-bg.png"></v-img>
							<v-card-title class="headline">CIDB</v-card-title>
							<v-card-subtitle>Get your greenbook</v-card-subtitle>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</section>
		<div class="m-16"></div>
	</Base>
</template>

<script>
	import Base from "./Base.vue";
	export default {
		components: { Base },
	};
</script>

<style scoped>
	* {
		font-family: "Poppins", sans-serif;
	}
	.bg-sec {
		background: rgb(251,197,49);
background: linear-gradient(0deg, rgba(251,197,49,1) 0%, rgba(254,228,157,1) 100%);
	}

	/* .bg {
		background-size: cover;
		background-image: linear-gradient(
				80deg,
				rgba(255, 230, 59, 0.6) 100%,
				rgba(255, 244, 167, 0.6) 0%
			),
			url("../assets/shepro-bg.png");
		background-position: center;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	} */
	.intro {
		color: #2699ec;
	}

	.main {
		color: #30336b;
	}

	.sc {
		color: #7f81aa;
	}

	.font-new {
		font-family: "Permanent Marker", cursive;
		color: #30336b;
	}
</style>
