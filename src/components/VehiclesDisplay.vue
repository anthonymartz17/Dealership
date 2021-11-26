

<template>
<div class="vehicles-container">
    <div :class="['vehicles',{'vehicles-height':$route.name == 'Home'}]">
  <h2 class="vehicles-title">Vehicles</h2>
  <div class="vehicles-display" 
  v-for="(car,key) in randomCarsDisplay"
  :key="key"
  
  >
  
    <div class="vehicles-display-car">
      <div class="vehicles-display-img">
        <img :src="`/images/${car.mainPic}`" :alt="`picture of ${car.model}`">       
      </div>
      <div class="vehicles-display-description">
        <h3 class="vehicles-display-title">{{car.year}} {{car.make}} {{car.model}}</h3>
        <p class="vehicles-display-specs">
          {{car.fuel}} - {{car.carCondition}} - {{car.miles}} miles
        </p>
        <p class="vehicles-display-price">{{car.price | currency}}</p>
        
      </div>
    </div>
  </div>


  
    </div>
 <router-link :to="{name:'Vehicles'}">
      <div v-show="$route.name == 'Home'" class="btn-search btn">
        + More Vehicles
      </div>
    </router-link>
</div>
</template>

<script>
import {mapMutations,mapState,mapActions} from 'vuex'



export default {
  
  created(){
    this.getCarsData('displayCarsRandomly');

  },

  methods:{
    
    ...mapMutations([
      'displayCarsRandomly',
     
    ]),
     ...mapActions([
      'getCarsData',
      
      ]),
  },
  computed:{
    ...mapState([
      'randomCarsDisplay',
     
       
    ]),
  }



}
</script>

<style lang="scss">
.vehicles-container{
   background: $light;
    padding: .5em;
}

.vehicles-height{
  height: 75vh;
}

.vehicles{
  color: $dark;
  overflow: hidden;
  

  &-title{
    font:$font-logo-S;
    border-bottom: 2px solid $lightestDark;
    padding: .2em;
    margin-bottom: .5em ;
 
  }

}
  .vehicles-display{

    &-car{

      display: flex;
      justify-content: space-around;
      gap: .5em;
      padding-block: .3em;
      cursor: pointer;

    }

    &-img{
      flex: 1;
      border: 2px solid $lightestDark;
      
   
      img{
        max-width: 100%;
        height: 100%;
      }
     }
    &-description{
      flex: 2;

    }
    &-title{
      color: $primary;
      font:$font-text-bold;

    }
    &-specs{
      font:$font-text;
      
    }
    &-price{
     font:$font-text-bold;
    }
   

  }
  

</style>