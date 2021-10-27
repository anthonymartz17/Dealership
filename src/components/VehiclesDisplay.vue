<template>
<div class="vehicles">
  <h2 class="vehicles-title">Vehicles</h2>
  <div class="vehicles-display">
    <div class="vehicles-display-car">
      <div class="vehicles-display-img">
        <img src="../assets/images/crv.png" alt="">
      </div>
      <div class="vehicles-display-description">
        <h3 class="vehicles-display-title">2020 Honda CR-V EX</h3>
        <p class="vehicles-display-specs">Gasoline - Used -120,000 mi</p>
        <p class="vehicles-display-price">$35,000</p>
      </div>
    </div>
  </div>
  <div class="btn-search btn" @click="showMoreVehicles">+ More Vehicles</div>
  

</div>
  
</template>

<script>
import {mapMutations} from 'vuex'

export default {
 
  methods:{
    ...mapMutations([
      'showMoreVehicles'
    ])
  },



}
</script>

<style lang="scss">
.vehicles{
  background: $light;
  padding: 1em .5em;
  color: $dark;

  &-title{
    font:$font-text-bold;
    border-bottom: 2px solid $lightestDark;
  }

}
  .vehicles-display{

    &-car{

      display: flex;
      justify-content: space-around;
      gap: .5em;
      padding-block: 1em;
      cursor: pointer;

    }

    &-img{
      flex: 1;
      border: 2px solid $lightestDark;
   
      img{
        max-width: 100%;
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