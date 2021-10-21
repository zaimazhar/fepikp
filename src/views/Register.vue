<template>
	<div>
		<Base>
			<v-container>
				<span v-if="!success">
					<v-card color="white" dark :elevation="5" class="pa-5">
						<p class="display-1 blue--text my-5">{{ kosName }}</p>
						<br />
						<v-form class="blue--text" @submit="courseRegister">
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
										light
										outlined
										@keyup="uppercase()"
										color="blue"
										class="mb-5 black--text"
									></v-text-field>
								</v-col>
								<v-col cols="12" md="6">
									<p class="headline">
										Maklumat Surat Menyurat (Penghantaran Sijil)
									</p>
									<v-text-field
										v-for="(personal, index) in personals[1]"
										v-bind:key="`B${index}`"
										v-model="$data[personal.bind]"
										v-bind:label="personal.label"
										persistent-hint
										v-bind:hint="personal.hint"
										@keyup="uppercase()"
										required
										outlined
										light
										color="blue"
										class="mb-5"
									></v-text-field>
									<v-autocomplete
										v-for="(pilih, index) in pilihSendiri[0]"
										v-bind:key="`C${index}`"
										v-bind:label="pilih.label"
										v-bind:items="$data[pilih.kategori]"
										:loading="loading[0]"
										required
										outlined
										loader-height="3"
										filled
										light
										return-object
										item-text="name"
										class="mb-5"
										color="blue"
										@change="populate($event, pilih.kelas)"
									></v-autocomplete>
									<v-autocomplete
										label="Poskod"
										:loading="loading[2]"
										:items="postcodeSendiri"
										filled
										light
										return-object
										outlined
										color="blue"
										@change="poskod($event, 'p1')"
									></v-autocomplete>
								</v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-switch
									v-model="syarikat"
									inset
									light
									v-bind:label="syarikat ? 'Syarikat' : 'Persendirian'"
									color="blue	"
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
											light
											@keyup="uppercase()"
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
											light
											v-bind:hint="syarikat.hint"
											@keyup="uppercase()"
											required
											outlined
											color="blue"
											class="mb-5"
										></v-text-field>
										<v-autocomplete
											v-for="(pilih, index) in pilihSendiri[1]"
											v-bind:key="`F${index}`"
											v-bind:label="pilih.label"
											v-bind:items="$data[pilih.kategori]"
											:loading="loading[1]"
											required
											outlined
											filled
											light
											return-object
											class="mb-5"
											item-text="name"
											color="blue"
											@change="populate($event, pilih.kelas)"
										></v-autocomplete>
										<v-autocomplete
											label="Poskod"
											:loading="loading[3]"
											:items="postcodeSyarikat"
											filled
											light
											return-object
											outlined
											color="blue"
											@change="poskod($event, 'p2')"
										></v-autocomplete>
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
				</span>
				<span v-else>
					<v-row justify="center" align="center">
						<v-card width="500" rounded="5" elevation="10" class="py-10 mx-3">
							<v-card-text class="text-center">
								<span class="display-1 font-weight-bold">Terima Kasih</span
								><br /><br />
								<v-icon color="green" size="100">
									mdi-check-circle-outline </v-icon
								><br /><br />
								<span class="headline font-weight-bold">{{ kosName }}</span
								><br /><br />
								<span class="title"
									>Email pengesahan pendaftaran akan dihantar ke alamat email
									<strong>{{ email }}</strong></span
								> </v-card-text
							><br />
							<v-card-actions class="text-center">
								<v-row justify="center" align="center">
									<v-btn large color="green" dark to="/">Terus</v-btn>
								</v-row>
							</v-card-actions>
						</v-card>
					</v-row>
				</span>
			</v-container>
		</Base>
	</div>
</template>

<script>
	import Base from "./Base.vue";
	export default {
		components: { Base },
		data: () => ({
			success: false,
			search: "",
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
			negeri: [
				{ name: "Pulau Pinang", id: 7 },
				{ name: "Kedah", id: 2 },
				{ name: "Perlis", id: 9 },
				{ name: "Sabah", id: 10 },
				{ name: "Johor", id: 1 },
				{ name: "Sarawak", id: 11 },
				{ name: "Perak", id: 8 },
				{ name: "Pahang", id: 6 },
				{ name: "Selangor", id: 12 },
				{ name: "Terengganu", id: 13 },
				{ name: "Kelantan", id: 3 },
				{ name: "Kuala Lumpur", id: 0 },
				{ name: "Melaka", id: 4 },
				{ name: "Labuan", id: 14 },
				{ name: "Putrajaya", id: 15 },
				{ name: "Negeri Sembilan", id: 5 },
			],
			daerahSendiri: [],
			daerahSyarikat: [],
			postcodeSendiri: [],
			postcodeSyarikat: [],
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
					// { label: "Poskod", bind: "postcode", hint: "" },
				],
			],
			pilihSendiri: [
				[
					{ label: "Negeri", hint: "", kategori: "negeri", kelas: "ns" },
					{ label: "Daerah", hint: "", kategori: "daerahSendiri", kelas: "ds" },
				],
				[
					{ label: "Negeri", hint: "", kategori: "negeri", kelas: "nsy" },
					{
						label: "Daerah",
						hint: "",
						kategori: "daerahSyarikat",
						kelas: "dsy",
					},
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
					// { label: "Poskod Syarikat", bind: "companyPostcode", hint: "" },
				],
			],
			loading: [false, false, false, false],
		}),
		methods: {
			uppercase() {
				this.fullname = this.fullname.toUpperCase();
				this.addr1 = this.addr1.toUpperCase();
				this.addr2 = this.addr2.toUpperCase();
				this.companyAttention = this.companyAttention.toUpperCase();
				this.companyAddr1 = this.companyAddr1.toUpperCase();
				this.companyAddr2 = this.companyAddr2.toUpperCase();
			},
			async courseRegister(e) {
				e.preventDefault();
				try {
					const data = {
						id: this.id,
						fullname: this.fullname,
						ic: this.ic,
						phone: this.phone,
						email: this.email,
						addr1: this.addr1,
						addr2: this.addr2,
						postcode: this.postcode,
						region: this.region,
						state: this.state,
					};

					if (this.syarikat) {
						Object.assign(data, {
							companyName: this.companyName,
							companyPhone: this.companyPhone,
							companyEmail: this.companyEmail,
							companyAttention: this.companyAttention,
							companyAddr1: this.companyAddr1,
							companyAddr2: this.companyAddr2,
							companyPostcode: this.companyPostcode,
							companyRegion: this.companyRegion,
							companyState: this.companyState,
						});
					}

					this.$http.post("/course/register", data)
					.then( () => this.success = true)
					.reject( err => { throw new Error(err) })
				} catch (err) {
					console.error(err);
				}
			},
			async populate(a, check) {
				switch (check) {
					case "ns": {
						try {
							this.loading[0] = true;
							const region = await this.$http.get(`/city/${a.id}`);
							this.state = a.name;
							this.region = "";
							this.daerahSendiri = [];
							this.postcodeSendiri = [];
							this.daerahSendiri = region.data;
						} catch (err) {
							throw new Error(err);
						} finally {
							this.loading[0] = false;
						}
						break;
					}
					case "ds": {
						this.region = a.name;
						this.postcodeSendiri = a.postcode;
						break;
					}
					case "nsy": {
						try {
							this.loading[1] = true;
							const region = await this.$http.get(`/city/${a.id}`);
							this.companyState = a.name;
							this.companyRegion = "";
							this.daerahSyarikat = [];
							this.postcodeSyarikat = [];
							this.daerahSyarikat = region.data;
						} catch (err) {
							throw new Error(err);
						} finally {
							this.loading[1] = false;
						}
						break;
					}
					case "dsy": {
						this.companyRegion = a.name;
						this.postcodeSyarikat = [];
						this.postcodeSyarikat = a.postcode;
						break;
					}
					default: {
						window.prompt("Error Processing Selection");
					}
				}
			},
			async poskod(a, check) {
				switch (check) {
					case "p1": {
						this.postcode = a;
						break;
					}
					case "p2": {
						this.companyPostcode = a;
						break;
					}
					default: {
						window.prompt("Error with Postcode Selector");
					}
				}
			},
		},
		beforeRouteLeave(to, from, next) {
			if (this.success) next();
			else {
				if (window.confirm("Anda Pasti Mahu Batalkan Pendaftaran Ini?")) {
					this.$store.dispatch("ClearCourse");
					next();
				} else {
					next(false);
				}
			}
		},
		created() {
			this.kosName = this.$store.getters.courseGet;
			this.id = this.$route.params.id;
		},
	};
</script>
