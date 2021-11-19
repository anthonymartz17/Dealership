<template>
  <div>
   
    <VehiclesDisplay/>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import VehiclesDisplay from '../components/VehiclesDisplay.vue'




export default {

  // created(){

  //   this.showMoreVehicles()

  // },

  components:{
    VehiclesDisplay,

  },

  methods:{
    ...mapMutations([
      'makeImgRequirement',
      
    ]),

  }



}
</script>

<style>

</style>