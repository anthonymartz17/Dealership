<template>
	<div class="sideBar">
		<div class="field-and-checkbox">
			<div class="field">
				<label for="typeIn">Make | Model | Type of Vehicle</label>
				<p>{{dropDownError}}</p>
				<input
					placeholder=" Search your Vehicle"
					@input="searchAfterFinishTyping"
					@focus="fireSearchByInputText($event)"
					@blur="clearDropDownErrorMsg"
					class="field-box"
					id="userInputId"
					type="text"
					:value="inputTextUser"
				/>
				<div class="inputDropDown" v-show="showDropDownTextField">
					<div v-if="dropDownError">
						<p>{{dropDownErrorMsg}}</p>
					</div>
					<div v-else>
						<div v-show="filters.make.typeSelected != ''">
							<p class="list-title">Make</p>
							<p
								class="hover-list"
								id="make"
								@click="onChangeMultiple($event)"
								>{{ filters.make.typeSelected }}</p
							>
						</div>
						<div v-show="filters.carType.typeSelected != ''">
							<p class="list-title">CarType</p>
							<p
								class="hover-list"
								id="carType"
								@click="onChangeMultiple($event)"
								>{{ filters.carType.typeSelected }}</p
							>
						</div>
						<div>
							<p class="list-title">Models</p>
							<ul>
								<li
									class="hover-list"
									v-for="(model, key) in filters.models.type"
									:key="key"
									id="model"
									@click="onChangeMultiple($event)"
									>{{ model.model }}</li
								>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="field-checkbox">
				<div
					v-for="(option, key) in filters.fuel.type"
					:key="key"
					@input="filterByRadioBtn"
				>
					<input type="radio" :value="option" :id="key" name="fuel" />
					<label :for="key">{{ option }}</label>
				</div>
			</div>
			<div class="year-price">
				<PriceYear />
			</div>
			<div class="makes">
				<p>Makes</p>
				<ul :class="['listMakes', {showMoreMakes: moreMakes}]">
					<li v-for="(car, key) in carsData" :key="key">
						<span id="make" @click="onChangeMultiple">{{
							car.make
						}}</span>
						<span>({{ car.model.length }})</span>
					</li>
				</ul>
				<p class="moreMakesBtn" @click="switchMoreMakes">More makes>></p>
			</div>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import PriceYear from "./priceYearDesktop.vue";
export default {
	data() {
		return {
			selected: "All Vehicles",
			moreMakes: false,
			timer: null,
			isFocused: false,
		};
	},
	components: {
		PriceYear,
	},

	methods: {
		// if user clicked outside textfield, let text in inputtext and focus the textfield again, this methods fires the searchbyinputtext to search again.
		fireSearchByInputText(e) {
			if(this.inputTextUser !== ""){
				this.$store.commit("searchByInputText",e)
			}
		},
		searchAfterFinishTyping(e) {
			clearTimeout(this.timer);
			this.timer = setTimeout(this.searchByInputText, 1000, e);
		},

		onChangeMultiple(e) {
			this.assignValueToTypeSelected(e);
			this.searchVehicles();
			this.setDataInVehiclesDisplayFromLocal();
		},
		switchMoreMakes() {
			this.moreMakes = !this.moreMakes;
		},
		...mapMutations([
			"searchVehicles",
			"filterByRadioBtn",
			"setFuelType",
			"assignValueToTypeSelected",
			"setDataInVehiclesDisplayFromLocal",
			"searchByInputText",
			"clearDropDownErrorMsg"
		]),
	},
	computed: {
		...mapState([
			"allModels",
			"carsData",
			"filters",
			"inputTextUser",
			"noResults",
			"showDropDownTextField",
			"dropDownErrorMsg",
		]),

		typeOfCar: {
			get() {
				return this.$store.typeOfCar;
			},
			set(val) {
				this.$store.commit("setTypeOfCar", val);
			},
		},

		dropDownError(){
			return !!this.dropDownErrorMsg
		}
	},
};
</script>

<style lang="scss" scoped>
.inputDropDown {
	background: $light;
	border-radius: 0px 0px 5px 5px;
	position: absolute;
	width: 100%;
	overflow: auto;
	max-height: 75vh;

	ul {
		list-style: none;

		li {
			border-bottom: 1px solid rgba(128, 128, 128, 0.225);
		}
	}
}
.hover-list {
	transition: 200ms ease-in-out;
	padding: 0.1em 0.5em;
	&:hover {
		background: darken($light, 10);
		cursor: pointer;
	}
}
.list-title {
	background: darken($light, 20);
}
.sideBar {
	background: lighten($lightestDark, 30);
	height: auto;
	padding: 1em;
}

.field {
	font: $font-mobile-m-bold;
	color: $dark;
	position: relative;

	&-box {
		border: 2px solid $lightestDark;
		width: 100%;
		padding-block: 0.3em;
	}
}
.field-checkbox {
	font: $font-mobile-m-bold;
	color: $dark;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.3em 1em;
	margin-block: 1em;
	padding-block: 1em;
	border-bottom: 1px solid $lightestDark;
}
.year-price {
	padding-block: 1em;
	border-bottom: 1px solid $lightestDark;
}

.makes {
	font: $font-mobile-m-bold;
	color: $dark;
	padding-block: 1em;
	border-bottom: 1px solid $lightestDark;

	li {
		list-style: none;
		cursor: pointer;
		transition: 200ms ease-in-out;
		&:hover {
			color: $lightestDark;
		}
	}
}
.listMakes {
	padding-left: 1em;
	height: 9em;
	overflow: hidden;
}
.showMoreMakes {
	height: 45vh;
	overflow: auto;
}
.moreMakesBtn {
	cursor: pointer;
	transition: 200ms ease-in-out;
	&:hover {
		color: $lightestDark;
	}
}
</style>
