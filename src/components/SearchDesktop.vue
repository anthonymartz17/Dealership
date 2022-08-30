<template>
	<div class="search-type-wrapper">
		<div class="search-vehicle">
			<p class="search-title-desktop"><span> Search</span> Your Vehicle!</p>

			<form>
				<div class="field">
					<label for="condition">Condition:</label>
					<select
						name="condition"
						id="condition"
						value="hello"
						@input="assignValueToTypeSelected"
					>
						<template v-for="(condition, key) in carCondition.type">
							<option :key="key">
								{{ condition }}
							</option>
						</template>
					</select>
				</div>

				<div class="field">
					<label for="make">Make:</label>
					<select
						name="make"
						id="make"
						value="Make"
						@input="assignValueToTypeSelected"
						@click="
							showSelectedFieldContent('make');
							selectModelByMake({ $event, id: clickedFieldContent.id });
						"
					>
						<template v-for="(make, key) in make.type">
							<option :key="key">
								{{ make }}
							</option>
						</template>
					</select>
				</div>

				<div class="field">
					<label for="model">Model:</label>
					<select
						name="model"
						id="model"
						@input="assignValueToTypeSelected"
					>
						<template v-for="(model, key) in modelByMake">
							<option :key="key" :value="model">
								{{ model }}
							</option>
						</template>
					</select>
				</div>
				<div>
					<PriceYear />
				</div>

				<SearchBtn />
			</form>
		</div>

		<div class="search-types">
			<p class="search-title-desktop"><span> Types</span> of Vehicles</p>
			<ul class="typesCarList">
				<router-link :to="{ name: 'searchResults' }">
					<li
						id="carType"
						@click="
							assignValueToTypeSelected($event);
							searchVehicles();
							setDataInVehiclesDisplayFromLocal();
						"
						v-for="(type, key) in carType.type"
						:key="key"
					>
						{{ type }}
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import SearchBtn from "./searchFieldMobile/SearchBtn.vue";
import PriceYear from "./priceYearDesktop.vue";
export default {
	data() {
		return {
			searchLabels: ["Condition", "Make", "Model", "Year", "Price"],
		};
	},
	created() {
		this.getCarsData({
			funcToCommit: "shuffleHomeDisplayCars",
			route: this.$route,
		});
	},
	components: {
		SearchBtn,
		PriceYear,
	},
	methods: {
		
		...mapMutations([
			"showSelectedFieldContent",
			"assignValueToTypeSelected",
			"searchVehicles",
			"setDataInVehiclesDisplayFromLocal",
			"selectModelByMake",
			"disablePricesYears",
		]),
		...mapActions(["getCarsData"]),
	},

	computed: {
		modelByMake() {
			if (this.make.typeSelected === "") {
				return ["Models"];
			} else {
				return this.models.type;
			}
		},

		searchFieldPlaceholder() {
			let make, model;
			//  ,condition,year,price;
			if (this.make.typeSelected == "") {
				make = "Make";
			} else {
				make = this.make.typeSelected;
			}
			if (this.models.typeSelected == "") {
				model = "Model";
			} else {
				model = this.models.typeSelected;
			}

			return [
				{ field: make, id: "make" },
				{ field: model, id: "model" },
			];
		},
		...mapState([
			"carsData",
			"clickedFieldContent",
			"make",
			"models",
			"priceFrom",
			"priceTo",
			"yearFrom",
			"yearTo",
			"carType",
			"carCondition",
			"fuel",
			"transmission",
			"driveTrain",
			"engine",
			"color",
			"pricesUnavailable",
			"yearsUnavailable",
		]),
		...mapGetters([
			"priceToComputed",
			"priceFromComputed",
			"yearFromComputed",
			"yearToComputed",
		]),
	},
};
</script>

<style lang="scss" scoped>
.typesCarList {
	list-style: none;
	display: flex;
	gap: 2em;
	flex-wrap: wrap;

	li {
		flex: 1 1 30%;
		height: 3em;
	}
}

.search-type-wrapper {
	display: none;
	@include desktop {
		display: flex;
		gap: 1em;
		margin-block: 1em;
	}
}
.search-title-desktop {
	border-bottom: 2px solid $lightestDark;
	padding-bottom: 0.5em;
	margin-bottom: 1em;
	span {
		color: $primary;
	}
	font: $font-text-bold;
}

.search-vehicle {
	box-shadow: 0px -2px 0px 0px $lightestDark;
	border: 1px solid $lightestDark;
	padding: 1em 0.5em;
	flex: 1;
}
.search-types {
	box-shadow: 0px -2px 0px 0px $lightestDark;
	border: 1px solid $lightestDark;
	padding: 1em 0.5em;
	flex: 1;
}

.field {
	height: 3em;
	margin-block: 0.2em;
	display: flex;
	align-items: center;

	label {
		flex: 1;
		font: $font-mobile-m-bold;
		color: $dark;
	}

	select {
		flex: 3;
		font: $font-mobile-m-bold;
		color: $dark;
		padding: 0.2em;
	}
}
.price {
	display: flex;
}
.year {
	display: flex;
}
.btn {
	width: 100%;
	height: 3em;
	margin-block: 0.2em;
	font: $font-text-bold;
	text-align: center;
}
.btn-search {
	background: $primary;
	outline: none;
	border: none;
}
.btn-advanceSearch {
	background: $dark;
	color: $primary;
	display: grid;
	place-items: center;
}
</style>