

<template>
<div class="vehicles-container">
    <div 
    :class="['vehicles',{'vehicles-height':$route.name == 'Home'}]"
    >
  <h2 class="vehicles-title">Vehicles</h2>
  <router-link :to="{name:'CarToView'}">
  <div class="vehicles-display" 
  v-for="(carToView,key) in randomCarsDisplay"
  :key="key"
  @click="
  saveCarToViewToLocalStore(carToView)
  getCarToViewFromLocalStore();
   setCarToViewGeneralInfo();
   setVehicleHistory();
   setCarToviewDetails()"
  >
  
    <div class="vehicles-display-car">
      <div class="vehicles-display-img">
        <img :src="`/images/${carToView.mainPic}`" :alt="`picture of ${carToView.model}`">       
      </div>
      <div class="vehicles-display-description">
        <h3 class="vehicles-display-title">{{carToView.year}} {{carToView.make}} {{carToView.model}}</h3>
        <p class="vehicles-display-specs">
          {{carToView.fuel}} - {{carToView.carCondition}} - {{carToView.miles}} miles
        </p>
        <p class="vehicles-display-price">{{carToView.price | currency}}</p>
        
      </div>
    </div>
  </div>
  </router-link>
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
    this.getCarsData({funcToCommit:'displayCarsRandomly',route:this.$route});
    console.log(this.$route.name)
 
    

  },

  methods:{
    
    ...mapMutations([
      'displayCarsRandomly',
      'getCarToViewFromLocalStore',
      'setCarToViewGeneralInfo',
      'setVehicleHistory',
      'setCarToviewDetails',
      'saveCarToViewToLocalStore'
     
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