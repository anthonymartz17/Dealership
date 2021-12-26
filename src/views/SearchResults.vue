<template>
  <VehiclesDisplay/>
</template>

<script>
import VehiclesDisplay from '../components/VehiclesDisplay.vue'
import {mapMutations} from 'vuex'

export default {
  created(){
    this.setDataInVehiclesDisplayFromLocal()
  },
  
  components:{
    VehiclesDisplay,

  },
  methods:{
    ...mapMutations([
      'setDataInVehiclesDisplayFromLocal'
    ])

  }

}
</script>

<style>

</style>