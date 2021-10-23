<template>
	<v-card class="pa-5 text-right">
		<v-btn dark class="btn mx-1" active-class="btn-active" text>Profil</v-btn>
		<v-btn dark class="logout mx-1" @click="logout()" text>Log Keluar</v-btn>
	</v-card>
</template>

<script>
	export default {
		methods: {
			logout() {
        try {
          this.$http
            .post("/auth/logout")
            .then(() => this.$store.dispatch("Logout"))
            .catch((err) => console.log(err));
        } catch(err) {
          console.error(err)
        }
			},
		},
	};
</script>

<style scoped>
	.logout {
		background-color: red;
	}

	.btn {
		background-color: #273c75;
	}

	.btn-active {
		background-color: #45aaf2;
	}
</style>
