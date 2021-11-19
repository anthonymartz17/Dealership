

<template>
<div class="vehicles-container">
    <div :class="['vehicles',{moreCars: $route.name == 'Home' && !moreVehicles}]">
  <h2 class="vehicles-title">Vehicles</h2>
  <!-- <div>{{allModels}}</div> -->
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
          {{car.fuel}} - {{car.carCondition}} - {{car.miles}} mi
        </p>
        <p class="vehicles-display-price">{{car.price | currency}}</p>
        
      </div>
    </div>
  </div>
    </div>
    <transition 
     enter-active-class="animate__animated animate__slideInLeft"
     leave-active-class="animate__animated animate__slideInLeft"
    >
    <div 
     
      v-if="$route.name == 'Home'"
      :class="['btn-search btn', {'floating-btn':moreVehicles }]" 
      @click="showMoreVehicles($event)"
      >
          + More Vehicles
      </div>
  </transition>
</div>
</template>

<script>
import {mapMutations,mapState,mapGetters,mapActions} from 'vuex'

// import {mapMutations,mapState} from '../../public/images/'






export default {
  created(){
    this.getCarsData('displayCarsRandomly');

  },

destroyed(){
   this.showMoreVehicles
   
},

 
  methods:{
    
    ...mapMutations([
      'showMoreVehicles',
      'displayCarsRandomly'
     
    ]),
     ...mapActions([
      'getCarsData',
      
      ]),
  },
  computed:{
    ...mapState([
      'randomCarsDisplay',
      'moreVehicles',
      
       
   
    ]),

    ...mapGetters([
       'allModels',
    ])
  }



}
</script>

<style lang="scss">
.vehicles-container{
   background: $light;
}
.moreCars{
  height: 68vh;
  overflow: hidden;
}
.floating-btn{
  position: fixed;
  top: 75%;
  right: 0%;
  width: 15em !important;
  height: 3em;
  margin-block: .2em;
  font: $font-text-bold;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.vehicles{
 
  padding: 1em .5em;
  color: $dark;
  

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