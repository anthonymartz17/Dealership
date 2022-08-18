<template>
  <div class="sideBar">
    <div class="field-and-checkbox">
      <div class="field">
        <label for="typeIn">Make | Model | Type of Vehicle</label>
        <input
        @input="searchByUserInput"
         class="field-box"
         id="typeIn" type="text"
        >
        <div class="field-dynamicDropdown">
           <h3>{{userInput}}</h3>
        </div>
      </div>
      <div class="field-checkbox">
       <div v-for="(option,key) in $store.state.fuel.type" :key="key" @input="filterByRadioBtn">
          <input type="radio" :value="option" :id="key" name="fuel" :checked="key == 0">
          <label :for="key"> {{option}}</label>
       </div>
      </div>

    </div>

  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  data(){
    return{
      selected : 'All Vehicles',
   

    }
  },
  created(){
  //  this.setFuelType(this.$route.name)
  },
  methods:{
    
     ...mapMutations([
      'searchVehicles',
      'filterByRadioBtn',
      'setFuelType',
      'searchByUserInput'
     ])
  },
computed:{
 ...mapState([
  'allModels'
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
 .field-and-checkbox{
 }

.field{
   position: relative;
  font: $font-mobile-m-bold;
  color: $dark;
  &-box{
    border: 2px solid $lightestDark;
    width: 100%;
  }

}
.field-checkbox{
   font: $font-mobile-m-bold;
   color: $dark;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.3em 1em;
   margin-block: 1em;
}
.field-dynamicDropdown{
  display: none;
  background: $lightestDark;
  width: 100%;
  height: 40vh;
  position: absolute;
  top: 3.2em;
}

</style>