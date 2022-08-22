<template>
	<div class="sideBar">
		<div class="field-and-checkbox">
			<div class="field">
				<label for="typeIn">Make | Model | Type of Vehicle</label>
				<input
					placeholder=" Search your Vehicle"
					@input="searchByInputText"
					class="field-box"
					id="userInputId"
					type="text"
				/>
        <div class="inputDropDown" v-show="models.type.length > 0">
          <div>
            <p class="list-title">Make</p>
            <p class="hover-list">{{make.typeSelected}}</p>
          </div>
          <div>
            <p class="list-title">CarType</p>
            <p class="hover-list">{{carType.typeSelected}}</p>
          </div>
          <div>
            <p class="list-title">Models</p>
            <ul>
              <li class="hover-list" v-for="(model,key) in models.type" :key="key"  >
                {{model.model}}
              </li>
            </ul>

          </div>
          
        </div>
			</div>
			<div class="field-checkbox">
				<div
					v-for="(option, key) in $store.state.fuel.type"
					:key="key"
					@input="filterByRadioBtn"
				>
					<input
						type="radio"
						:value="option"
						:id="key"
						name="fuel"
						:checked="key == 0"
					/>
					<label :for="key"> {{ option }}</label>
				</div>
			</div>
			<div class="year-price">
				<PriceYear />
			</div>
			<div class="makes">
				<p>Makes</p>
				<ul :class="['listMakes', { showMoreMakes: moreMakes }]">
					<li v-for="(car, key) in carsData" :key="key">
						<span id="make" @click="onChangeMultiple">
							{{ car.make }}
						</span>
						<span>({{ car.model.length }})</span>
					</li>
					<!-- ({{car.model.length}}) -->
				</ul>
				<p class="moreMakesBtn" @click="switchMoreMakes">More makes>></p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import PriceYear from "./priceYearDesktop.vue";
export default {
	data() {
		return {
			selected: "All Vehicles",
			moreMakes: false,
			userInputId: "",
		};
	},
	components: {
		PriceYear,
	},
	created() {
		//  this.setFuelType(this.$route.name)
	},
	methods: {
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
      'searchByInputText'
		]),
	},
	computed: {
		...mapState([
      "allModels",
       "carsData",
       "make",
       "models",
       "carType",
       
       
       ]),

		typeOfCar: {
			get() {
				return this.$store.typeOfCar;
			},
			set(val) {
				this.$store.commit("setTypeOfCar", val);
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.inputDropDown{
  background: $light;
  border-radius: 0px 0px 5px 5px;
  position: absolute;
  width: 100%;
  overflow: auto;
  max-height: 75vh;
 

  ul{
    list-style: none;

    li{
      border-bottom: 1px solid rgba(128, 128, 128, 0.225);
    }

  }
  
}
.hover-list{
  transition: 200ms ease-in-out;
  padding: .1em .5em;
  &:hover{
    background: darken($light,10);
    cursor: pointer;
  
  }
}
.list-title{
  background: darken($light,20);
}
.sideBar {
	background: lighten($lightestDark, 30);
	height: 100vh;
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
