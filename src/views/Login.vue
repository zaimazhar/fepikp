<template>
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
					v-model="firstname"
					:rules="nameRules"
					:counter="10"
					label="Nama Pengguna"
					required
				></v-text-field>
				<v-text-field
					v-model="password"
					:rules="[rules.required]"
					:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
					:type="show ? 'text' : 'password'"
					label="Kata Laluan"
					@click:append="show = !show"
					required
				></v-text-field>

				<v-text-field
					v-model="email"
					:rules="emailRules"
					label="Alamat Email"
					required
				></v-text-field>
				<v-btn class="mr-4" @click="loginUser()" :disabled="invalid">
					Hantar
				</v-btn>
			</v-form>
		</v-card>
	</v-container>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "Dashboard",
		title: `Dashboard`,
		computed: mapGetters(["authState"]),
		methods: {
			changeState() {
				this.$store.commit("login");
			},
			loginUser() {
				this.$http
					.post("/login", {
						username: this.firstname,
						password: this.password,
						email: this.email,
					})
					.then((user) => {
						this.$store.dispatch("Login", user.data);
						console.log(user.data);
						this.$router.replace("/dashboard");
					})
					.catch((err) => {
						console.error(err)
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
			firstname: "",
			password: "",
			rules: {
				required: (value) => !!value || "Kata Laluan Diperlukan.",
			},
			nameRules: [
				(v) => !!v || "Nama Diperlukan",
				(v) =>
					v.length <= 10 || "Nama Tidak Boleh Lebih Dari 10 Patah Perkataan",
			],
			email: "",
			emailRules: [
				(v) => !!v || "Alamat Email Diperlukan",
				(v) => /.+@.+/.test(v) || "Format Alamat Email Yang Salah",
			],
		}),
	};
</script>

<style></style>
