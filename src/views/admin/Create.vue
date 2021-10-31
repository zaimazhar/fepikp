<template>
	<div>
		<v-form @submit="createProgram">
			<v-text-field
				outlined
				label="Nama Program"
				v-model="courseName"
			></v-text-field>
			<v-combobox
				v-model="benefitItems"
				hide-selected
				outlined
				label="Tambah Kemudahan Label"
				multiple
				persistent-hint
				small-chips
			>
				<template v-slot:no-data>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>
								Tulis dan tekan <kbd>enter</kbd> untuk tambah kemudahan terbaru
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-combobox>
			<br />
			<v-row>
				<v-col cols="12" sm="6">
					<p class="blue--text">Maklumat Program</p>
					<v-card class="pa-5" elevation="5">
						<v-menu
							ref="menu1"
							v-model="menu1"
							:close-on-content-click="false"
							:return-value.sync="date"
							transition="scale-transition"
							offset-y
							min-width="auto"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									v-model="courseStartDate"
									label="Tarikh Mula"
									prepend-icon="mdi-calendar"
									readonly
									v-bind="attrs"
									v-on="on"
								></v-text-field>
							</template>
							<v-date-picker
								v-model="courseStartDate"
								no-title
								scrollable
								:min="new Date().toISOString().substr(0, 10)"
							>
								<v-spacer></v-spacer>
								<v-btn text color="primary" @click="menu1 = false">
									Cancel
								</v-btn>
								<v-btn text color="primary" @click="changeVal">
									OK
								</v-btn>
							</v-date-picker>
						</v-menu>
						<v-menu
							ref="menu2"
							v-model="menu2"
							:close-on-content-click="false"
							:return-value.sync="date1"
							transition="scale-transition"
							offset-y
							min-width="auto"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									v-model="courseEndDate"
									label="Tarikh Tamat"
									prepend-icon="mdi-calendar"
									readonly
									v-bind="attrs"
									v-on="on"
								></v-text-field>
							</template>
							<v-date-picker
								:min="
									this.courseStartDate
										? new Date(this.courseStartDate).toISOString().substr(0, 10)
										: new Date().toISOString().substr(0, 10)
								"
								v-model="courseEndDate"
								no-title
								scrollable
							>
								<v-spacer></v-spacer>
								<v-btn text color="primary" @click="menu2 = false">
									Cancel
								</v-btn>
								<v-btn text color="primary" @click="$refs.menu2.save(date1)">
									OK
								</v-btn>
							</v-date-picker>
						</v-menu>
						<v-text-field label="Yuran" v-model="courseCost">
							<span slot="prepend" class="pt-1">RM</span>
						</v-text-field>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6">
					<p class="blue--text">Alamat Program</p>
					<v-hover v-slot="{ hover }">
						<v-card
							class="pa-5"
							:elevation="hover ? 12 : 5"
							style="transition: 0.5s"
							:class="{ 'on-hover': hover }"
						>
							<v-text-field label="Alamat 1" v-model="addr1"></v-text-field>
							<v-text-field label="Alamat 2" v-model="addr2"></v-text-field>
							<v-text-field label="Daerah" v-model="region"></v-text-field>
							<v-text-field label="Negeri" v-model="state"></v-text-field>
						</v-card>
					</v-hover>
				</v-col> </v-row
			><br /><br />
			<v-row justify="center" align="center">
				<v-btn dark type="submit" color="blue">HANTAR</v-btn> </v-row
			><br />
		</v-form>
		<v-dialog v-model="success" width="500">
			<v-card width="500" rounded="5" elevation="10" class="pa-10">
				<v-card-text class="text-center">
					<br /><br />
					<v-icon color="blue" size="100"> mdi-check-circle-outline </v-icon
					><br /><br />
					<span class="title">Berjaya Cipta Program </span><br /><br />
					<span class="display-1">{{ courseName }}</span> </v-card-text
				><br />
				<v-card-actions class="text-center">
					<v-row justify="center" align="center">
						<v-btn color="primary" text @click="success = false">
							TERUS
						</v-btn>
					</v-row>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog v-model="error" width="500">
			<v-card width="500" rounded="5" elevation="10" class="pa-10">
				<v-card-text class="text-center">
					<br /><br />
					<v-icon color="red" size="100"> mdi-alert-octagon-outline </v-icon
					><br /><br />
					<span class="title"
						>Tidak Berjaya Mencipta Program.<br />Tarikh Tamat Mesti
						<strong>Sama</strong> atau <strong>Selepas</strong> Tarikh Mula.
					</span> </v-card-text
				><br />
				<v-card-actions class="text-center">
					<v-row justify="center" align="center">
						<v-btn color="primary" text @click="error = false">
							KEMBALI
						</v-btn>
					</v-row>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		title: "Cipta Program",
		data: () => ({
			error: false,
			success: false,
			courseName: "",
			courseStartDate: "",
			courseEndDate: "",
			courseCost: "",
			addr1: "",
			addr2: "",
			region: "",
			state: "",
			benefitItems: [],
			date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
				.toISOString()
				.substr(0, 10),
			date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
				.toISOString()
				.substr(0, 10),
			menu1: false,
			menu2: false,
			modal1: false,
			modal2: false,
		}),
		methods: {
			async createProgram(e) {
				e.preventDefault();
				if (
					new Date(this.courseStartDate).getTime() >
					new Date(this.courseEndDate).getTime()
				) {
					this.success = false;
					this.error = true;
					return;
				} else {
					try {
						const data = {
							courseName: this.courseName,
							courseStart: new Date(this.courseStartDate).toISOString(),
							courseEnd: new Date(this.courseEndDate).toISOString(),
							courseCost: this.courseCost,
							courseBenefits: this.benefitItems,
							courseVenue: {
								addr1: this.addr1,
								addr2: this.addr2,
								region: this.region,
								state: this.state,
							},
						};

						await this.$http.post("/course/create", data);

						this.success = true;
					} catch (err) {
						console.error(err);
					}
				}
			},
			changeVal() {
				this.$refs.menu1.save(this.date);

				if (
					new Date(this.courseStartDate).getTime() >
					new Date(this.courseEndDate).getTime()
				) {
					this.courseEndDate = "";
				}
			},
		},
	};
</script>

<style></style>
