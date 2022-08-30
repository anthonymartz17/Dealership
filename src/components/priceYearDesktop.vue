<template>
	<div class="price-year-desk-wrappert">
		<div
			:class="[
				'field',
				{ 'when-sideSearch-view': $route.name == 'searchResults' },
			]"
		>
			<label>Year:</label>
			<div class="spacing-years-price">
				<select
					name="yearFrom"
					id="yearFrom"
					@input="onChangeMultiple($event)"
				>
					<option :value="null">From</option>
					<template v-for="(yearFrom, key) in yearFrom.type">
						<option :key="key">
							{{ yearFrom }}
						</option>
					</template>
				</select>
				<select name="yearTo" id="yearTo" @input="onChangeMultiple($event)">
					<option :value="null">To</option>
					<template v-for="(yearTo, key) in yearTo.type">
						<option
							:key="key"
							:disabled="
								yearsUnavailable != null && key < yearsUnavailable
							"
							:class="{
								disabledOptions:
									yearsUnavailable != null && key < yearsUnavailable,
							}"
						>
							{{ yearTo }}
						</option>
					</template>
				</select>
			</div>
		</div>
		<div
			:class="[
				'field ',
				{ 'when-sideSearch-view': $route.name == 'searchResults' },
			]"
		>
			<label for="priceFrom">Price:</label>
			<div class="spacing-years-price">
				<select
					name="priceFrom"
					id="priceFrom"
					@input="onChangeMultiple($event)"
				>
					<option :value="null">From</option>
					<template v-for="(priceFrom, key) in priceFrom.type">
						<option :key="key">
							{{ priceFrom | currency }}
						</option>
					</template>
				</select>
				<select
					name="priceTo"
					id="priceTo"
					@input="onChangeMultiple($event)"
				>
					<option :value="null">To</option>
					<template v-for="(priceTo, key) in priceTo.type">
						<option
							:disabled="
								pricesUnavailable != null && key < pricesUnavailable
							"
							:class="{
								disabledOptions:
									pricesUnavailable != null && key < pricesUnavailable,
							}"
							:key="priceTo"
						>
							{{ priceTo | currency }}
						</option>
					</template>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	methods: {
		onChangeMultiple(e) {
			this.assignValueToTypeSelected(e);
			this.disablePricesYears({
				id: e.target.id,
				key: e.target.selectedIndex,
			});
			if (this.$route.name === "searchResults") {
				this.searchVehicles();
				this.setDataInVehiclesDisplayFromLocal();
			}
		},

		...mapMutations([
			"assignValueToTypeSelected",
			"disablePricesYears",
			"searchVehicles",
			"setDataInVehiclesDisplayFromLocal",
		]),
	},
	computed: {
		
		...mapState([
			"priceFrom",
			"priceTo",
			"yearFrom",
			"yearTo",
			"pricesUnavailable",
			"yearsUnavailable",
		]),
	},
};
</script>

<style lang="scss" scoped>
.disabledOptions {
	background: darken($light, 10%);
	text-decoration: line-through;
}
.spacing-years-price {
	display: flex;
	gap: 1em;
	flex: 3;
}

.field {
	display: flex;
	margin-bottom: 1.5em;

	label {
		font: $font-mobile-m-bold;
		color: $dark;
		flex: 1;
	}

	select {
		font: $font-mobile-m-bold;
		color: $dark;
		padding: 0.2em;
		flex: 1;
	}
}

.when-sideSearch-view {
	flex-direction: column;
}
</style>
