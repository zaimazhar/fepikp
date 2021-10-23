<template>
	<div>
		<v-data-table
			:items-per-page="10"
			:headers="headers"
			:items="pesertas"
			class="elevation-5"
		></v-data-table>
	</div>
</template>

<script>
	export default {
		data: () => ({
			headers: [
				{ text: "Nama Peserta", value: "participantFullname", align: "center" },
				{ text: "Kad Pengenalan", value: "participantId", align: "center" },
				{ text: "Alamat Email", value: "participantEmail", align: "center" },
				{ text: "No. Telefon", value: "participantPhone", align: "center" },
				{ text: "Alamat", value: "participantAddress", align: "center" },
			],
			pesertas: [],
		}),
		created() {
			this.$http
				.get(`/course/participants/${this.$route.params.id}`)
				.then((participants) => {
					const data = participants.data;
					data.map((participant) => {
						participant.participantAddress = Object.values(
							participant.participantAddress
						)
							.filter((data) => data.length > 1)
							.join(", ");
					});
					this.pesertas = data;
				})
				.catch((err) => {
					throw new Error(err);
				});
		},
	};
</script>

<style></style>
