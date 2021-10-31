<template>
	<section>
		<xlsx-workbook>
			<xlsx-sheet
				:collection="sheet.data"
				v-for="sheet in sheets"
				:key="sheet.name"
				:sheet-name="sheet.name"
			/>
			<xlsx-download :filename="filename">
				<button>Download</button>
			</xlsx-download>
		</xlsx-workbook>
		<v-form>
			<v-text-field v-model="filename"> </v-text-field>
		</v-form>
		<p>{{ filename }}</p>
	</section>
</template>

<script>
	import XlsxWorkbook from "../Excel/XlsxWorkbook.vue";
	import XlsxSheet from "../Excel/XlsxSheet.vue";
	import XlsxDownload from "../Excel/XlsxDownload.vue";
	export default {
		props: ["datauser"],
		components: {
			XlsxWorkbook,
			XlsxSheet,
			XlsxDownload,
		},
		data: () => ({
			sheets: [{ name: "sheet", data: [] }],
			filename: "",
		}),
		mounted() {
			console.log(this.datauser);
			this.sheets[0].data = this.datauser;
		},
	};
</script>

<style></style>
