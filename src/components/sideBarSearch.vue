<template>
  <div class="sideBar">
    <div class="field-and-checkbox">
      <div class="field">
        <label for="typeIn">Make | Model | Type of Vehicle</label>
        <input
        placeholder=" Search your Vehicle"
        @input="searchByUserInput"
         class="field-box"
         id="typeIn" type="text"
        >
      
      </div>
      <div class="field-checkbox">
       <div v-for="(option,key) in $store.state.fuel.type" :key="key" @input="filterByRadioBtn">
          <input type="radio" :value="option" :id="key" name="fuel" :checked="key == 0">
          <label :for="key"> {{option}}</label>
       </div>
      </div>
      <div class="year-price">
       <PriceYear/>
      </div>
      <div class="makes">
          <p>Makes</p>
          <ul :class="['listMakes',{showMoreMakes: moreMakes}]">
            <li v-for="(car,key) in carsData" :key="key">{{car.make}} ({{car.model.length}})</li>
          </ul>
          <p class="moreMakesBtn" @click="switchMoreMakes">More makes>></p>
      </div>

    </div>

  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
import PriceYear from './priceYearDesktop.vue'
export default {
  data(){
    return{
      selected : 'All Vehicles',
      moreMakes:false,
   

    }
  },
  components:{
    PriceYear,

  },
  created(){
  //  this.setFuelType(this.$route.name)
  },
  methods:{
    switchMoreMakes(){
        this.moreMakes = !this.moreMakes
        console.log(this.moreMakes)
    },
     ...mapMutations([
      'searchVehicles',
      'filterByRadioBtn',
      'setFuelType',
      'searchByUserInput'
     ])
  },
computed:{
 ...mapState([
  'allModels',
  'carsData'
 ]),


  typeOfCar:{
    get(){
      return this.$store.typeOfCar
    },
    set(val){
      this.$store.commit('setTypeOfCar',val)
    }

  }
},

}
</script>

<style lang="scss" scoped>

 .sideBar{
  background: lighten($lightestDark,30);
  height: 100vh;
  padding: 1em;
  
 }


.field{
  font: $font-mobile-m-bold;
  color: $dark;

  &-box{
    border: 2px solid $lightestDark;
    width: 100%;
    padding-block: .3em;
  }

}
.field-checkbox{
   font: $font-mobile-m-bold;
   color: $dark;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.3em 1em;
   margin-block: 1em;
   padding-block: 1em;
   border-bottom: 1px solid $lightestDark;
}
.year-price{
  padding-block: 1em;
   border-bottom: 1px solid $lightestDark;
}

.makes{
  font: $font-mobile-m-bold;
  color: $dark;
  padding-block: 1em;
  border-bottom: 1px solid $lightestDark;

 

  li{
    list-style: none;
     cursor: pointer;
     transition: 200ms ease-in-out;
      &:hover{
        color: $lightestDark;
      }
  }
  
}
 .listMakes{
    padding-left: 1em;
    height: 9em;
    overflow: hidden;
  }
 .showMoreMakes{
  height: 45vh;
  overflow: auto;
 }
.moreMakesBtn{
  cursor: pointer;
  transition: 200ms ease-in-out;
  &:hover{
    color: $lightestDark;
  }
}

</style>