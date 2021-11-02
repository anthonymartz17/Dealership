<template>
  <div>
    <h2>vehicles page</h2>

    <div class="vehicles-display" 
  v-for="(car,key) in randomCarsDisplay"
  :key="key"
  
  >
  
  <!-- <img :src="" :alt="`picture of ${car.model}`"> -->
  </div>
  <button  @click="makeRandom">random</button>
  <div>{{test}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'




export default {
  data(){
    return {
      test:0,

      items:[
        'anny','elianny','elainy','lucy'
      ]
     
    }
  },
  computed:{
    ...mapState([
      'randomCarsDisplay'
    ]),


    randomOrder(){
     return this.items.forEach((one) =>{
        console.log(one.index)
      })
    }
 
  },
  methods:{
    makeRandom(){
      this.test = Math.round(Math.random() * this.items.length)
    }
  }



}
</script>

<style>

</style>