<template>
	<Base>
		<v-container>
			<v-card color="brown lighten-1" dark :elevation="5" pa-4 class="pa-5">
				<v-alert
					dismissible
					elevation="6"
					icon="$mdiAccount"
					type="error"
					transition="scale-transition"
					prominent
					v-text="errorMessage"
					:value="loginError"
				></v-alert>
				<v-form v-model="valid">
					<v-text-field
						v-model="auth"
						label="Nama Pengguna / Email Pengguna"
						required
					></v-text-field>
					<v-text-field
						v-model="password"
						:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
						:type="show ? 'text' : 'password'"
						label="Kata Laluan"
						@click:append="show = !show"
						required
					></v-text-field>
					<v-btn
						color="blue"
						min-width="350"
						class="mr-4"
						@click="loginUser()"
						:disabled="invalid"
					>
						Log Masuk
					</v-btn>
				</v-form>
			</v-card>
		</v-container>
	</Base>
</template>

<script>
	import { mapGetters } from "vuex";
	import Base from "./Base.vue";

	export default {
		components: { Base },
		name: "Log Masuk",
		title: `Log Masuk`,
		computed: mapGetters(["authState"]),
		methods: {
			changeState() {
				this.$store.commit("login");
			},
			loginUser() {
				this.$http
					.post("/login", {
						auth: this.auth,
						password: this.password,
					})
					.then((user) => {
						this.$store.dispatch("Login", user.data);
						this.$router.replace("/dashboard");
					})
					.catch((err) => {
						console.error(err);
						this.loginError = true;
						setTimeout(() => (this.loginError = false), 5000);
					});
			},
		},
		data: () => ({
			valid: false,
			loginError: false,
			errorMessage: "Butiran Pengguna Tidak Dijumpai",
			show: false,
			auth: "",
			password: "",
		}),
	};
</script>

<style></style>
