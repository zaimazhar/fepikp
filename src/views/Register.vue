<template>
	<v-container>
		<v-card color="brown lighten-1" dark :elevation="5" class="pa-5">
			<p class="display-1 white--text my-5">{{ kosName }}</p>
			<br />
			<v-form @submit="courseRegister">
				<v-row>
					<v-col cols="12" md="6">
						<p class="headline">Maklumat Individu</p>
						<v-text-field
							v-for="(personal, index) in personals[0]"
							v-bind:key="`A${index}`"
							v-model="$data[personal.bind]"
							v-bind:label="personal.label"
							persistent-hint
							v-bind:hint="personal.hint"
							required
							outlined
							color="blue"
							class="mb-5"
						></v-text-field>
					</v-col>
					<v-col cols="12" md="6">
						<p class="headline">Maklumat Surat Menyurat (Penghantaran Sijil)</p>
						<v-text-field
							v-for="(personal, index) in personals[1]"
							v-bind:key="`B${index}`"
							v-model="$data[personal.bind]"
							v-bind:label="personal.label"
							persistent-hint
							v-bind:hint="personal.hint"
							required
							outlined
							color="blue"
							class="mb-5"
						></v-text-field>
						<v-select
							v-for="(pilih, index) in pilihSendiri[0]"
							v-bind:key="`C${index}`"
							v-model="$data[pilih.bind]"
							v-bind:label="pilih.label"
							v-bind:items="$data[pilih.kategori]"
							required
							outlined
							filled
							item-text="state"
							item-value="id"
							cache-items
							color="blue"
							@change="populateDaerahSendiri"
						></v-select>
					</v-col>
				</v-row>
				<v-row justify="center" align="center">
					<v-switch
						v-model="syarikat"
						inset
						v-bind:label="syarikat ? 'Syarikat' : 'Persendirian'"
						color="primary"
					></v-switch>
				</v-row>
				<span v-if="syarikat">
					<br />
					<v-row>
						<v-col cols="12" md="6">
							<p class="headline">Maklumat Syarikat</p>
							<v-text-field
								v-for="(syarikat, index) in syarikats[0]"
								v-bind:key="`D${index}`"
								v-model="$data[syarikat.bind]"
								v-bind:label="syarikat.label"
								persistent-hint
								v-bind:hint="syarikat.hint"
								required
								outlined
								color="blue"
								class="mb-5"
							></v-text-field>
						</v-col>
						<v-col cols="12" md="6">
							<p class="headline">Maklumat Surat Menyurat (Syarikat)</p>
							<v-text-field
								v-for="(syarikat, index) in syarikats[1]"
								v-bind:key="`E${index}`"
								v-model="$data[syarikat.bind]"
								v-bind:label="syarikat.label"
								persistent-hint
								v-bind:hint="syarikat.hint"
								required
								outlined
								color="blue"
								class="mb-5"
							></v-text-field>
							<v-select
								v-for="(pilih, index) in pilihSendiri[0]"
								v-bind:key="`F${index}`"
								v-model="$data[pilih.bind]"
								v-bind:label="pilih.label"
								required
								outlined
								color="blue"
							></v-select>
						</v-col>
					</v-row>
				</span>
				<span v-else class="mb-4 pb-4"></span>
				<v-row
					justify="center"
					align="center"
					class="mb-6"
					v-bind:class="syarikat ? '' : 'mt-5'"
				>
					<v-btn type="submit" color="blue" min-width="500" large>
						HANTAR
					</v-btn>
				</v-row>
			</v-form>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			syarikat: false,
			fullname: "",
			ic: "",
			phone: "",
			email: "",
			addr1: "",
			addr2: "",
			region: "",
			state: "",
			postcode: "",
			companyName: "",
			companyPhone: "",
			companyEmail: "",
			companyAttention: "",
			companyAddr1: "",
			companyAddr2: "",
			companyRegion: "",
			companyState: "",
			companyPostcode: "",
			id: "",
			negeri: [{ state: 'Kedah', id: 123}],
			daerah: [],
			personals: [
				[
					{ label: "Nama Penuh", bind: "fullname", hint: "" },
					{ label: "Nombor Kad Pengenalan", bind: "ic", hint: "990101021234" },
					{ label: "No. Telefon", bind: "phone", hint: "0123456789" },
					{ label: "Alamat Emel", bind: "email", hint: "" },
				],
				[
					{ label: "Alamat 1", bind: "addr1", hint: "" },
					{ label: "Alamat 2", bind: "addr2", hint: "" },
					{ label: "Poskod", bind: "postcode", hint: "" },
				],
			],
			pilihSendiri: [
				[
					{ label: "Negeri", bind: "state", hint: "", kategori: 'negeri' },
					{ label: "Daerah", bind: "region", hint: "", kategori: 'daerah' },
				],
				[
					{ label: "Negeri", bind: "companyState", hint: "" },
					{ label: "Daerah", bind: "companyRegion", hint: "" },
				],
			],
			syarikats: [
				[
					{ label: "Nama Syarikat", bind: "companyName", hint: "" },
					{
						label: "No. Telefon Syarikat",
						bind: "companyPhone",
						hint: "0123456789 / 04123456",
					},
					{ label: "Alamat Emel Syarikat", bind: "companyEmail", hint: "" },
					{ label: "Untuk Perhatian", bind: "companyAttention", hint: "" },
				],
				[
					{ label: "Alamat 1 Syarikat", bind: "companyAddr1", hint: "" },
					{ label: "Alamat 2 Syarikat", bind: "companyAddr2", hint: "" },
					{ label: "Poskod Syarikat", bind: "companyPostcode", hint: "" },
				],
			],
		}),
		methods: {
			courseRegister(e) {
				e.preventDefault();
				const data = {
					fullname: this.fullname,
					ic: this.ic,
					phone: this.phone,
					email: this.email,
					addr1: this.addr1,
					addr2: this.addr2,
					region: this.region,
					state: this.state,
					postcode: this.postcode,
				};

				if (this.syarikat) {
					console.log("WTF");
				} else {
					console.log(data);
				}
			},
			populateDaerahSendiri() {
				console.log(this.state)
				this.daerah = [
					'wtf',
					'ada dah'
				]
			},
			populateDaerahSyarikakt() {
				console.log(this.companyState)
			}
		},
		beforeRouteLeave(to, from, next) {
			if (window.confirm("Anda Pasti Mahu Batalkan Pendaftaran Ini?")) {
				this.$store.dispatch("ClearCourse");
				next();
			} else {
				next(false);
			}
		},
		created() {
			this.kosName = this.$store.getters.courseGet;
			this.id = this.$route.params.id;
		},
	};
</script>
