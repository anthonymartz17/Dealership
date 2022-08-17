<template>
  <div class="sideBar">
    <div class="field-and-checkbox">
      <div class="field">
        <label for="typeIn">Make | Model | Type of Vehicle</label>
        <input
         class="field-box"
         id="typeIn" type="text">
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
import {mapMutations} from 'vuex'
export default {
  data(){
    return{
      selected : 'All Vehicles'
    }
  },
  created(){
  //  this.setFuelType(this.$route.name)
  },
  methods:{
     ...mapMutations([
      'searchVehicles',
      'filterByRadioBtn',
      'setFuelType'
     ])
  },
computed:{

 
  typeOfCar:{
    get(){
      return this.$store.typeOfCar
    },
    set(val){
      this.$store.commit('setTypeOfCar',val)
    }

  }
}
}
</script>

<style lang="scss" scoped>

 .sideBar{
  background: lighten($lightestDark,30);
  height: 100vh;
  padding: 1em;
 }
 .field-and-checkbox{
  // margin-block: 1em;
 }

.field{
  
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

</style>