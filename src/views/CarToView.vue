<template>
  <div class="car-container">
    <div class="car" v-for="(car,key) in carToView" :key="key">
      <h2 class="car-title">{{car.year}} {{car.make}} {{car.model}}</h2>
      <div class="car-info">
          <img class="icons" src="../assets/icons/owner.svg" alt="">
        <div class="car-info-children" v-for="(icon,key) in specsIcons" :key="key">
         <img class="icons" :src="require(icon)" alt="">
          <p></p>
        </div>
        <!-- <div class="car-info-children">
          <img class="icons" src="../assets/icons/owner.svg" alt="">
          <p>Owner</p>
        </div>
        <div class="car-info-children">
          <img class="icons" src="../assets/icons/transmition.svg" alt="">
          <p>automatic</p>
        </div>
        <div class="car-info-children">
          <img class="icons" src="../assets/icons/drivetrain.svg" alt="">
          <p>AWD</p>
        </div>
        <div class="car-info-children">
          <img class="icons" src="../assets/icons/gas.svg" alt="">
          <p>Gasoline</p>
        </div>
        <div class="car-info-children">
          <img class="icons" src="../assets/icons/engine.svg" alt="">
          <p>190 hp 2.4L I4</p>
        </div>
        <div class="car-info-children">
          <img class="icons" src="../assets/icons/mpg.svg" alt="">
          <p>32mpg</p>
        </div>
        <div class="car-info-children">
          <img class="icons" src="../assets/icons/excolor.svg" alt="">
          <p>black</p>
        </div>
        <div class="car-info-children">
          <img class="icons" src="../assets/icons/incolor.svg" alt="">
          <p>white</p>
        </div> -->
      </div>
      <div class="car-imgages">
        
      </div>
      <div class="car-specs"></div>
      <div class="car-comments"></div>
      <div class="car-seller"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
 computed:{
    ...mapState([
    'carToView',
    'specsIcons'
  ])
 }

}
</script>

<style lang="scss">
.icons{
  width: 40px;
}
.car-info{
  display: grid;
  justify-items: center;
  gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;

  &-children{
    text-align: center;
  }
}
.car-container{
   background: $light;
   padding: .5em;
}

.car{
  // color: $dark;
  // overflow: hidden;
  

  &-title{
    font:$font-logo-S;
    border-bottom: 2px solid $lightestDark;
    padding: .2em;
    margin-bottom: .5em ;
 
  }

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
    // &-title{
    //   color: $primary;
    //   font:$font-text-bold;

    // }
    &-specs{
      font:$font-text;
      
    }
    &-price{
     font:$font-text-bold;
    }
   
  }

</style>