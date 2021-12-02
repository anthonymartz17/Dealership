<template>
  <div class="car-container">
    <div class="car" v-for="(car,key) in carToView" :key="key">
      <h2 class="car-title">{{car.year}} {{car.make}} {{car.model}}</h2>
      <p class="bold-title-red">{{car.price|currency}}</p>
      <div class="car-info">
        <div class="car-info-children" v-for="(icon,key) in specsIcons" :key="key">
         <img class="icons" :src="`/images/icons/${icon.icon}`" alt="">
          <p class="specs">{{icon.iconInfo}}
            <span class="specs" v-if="icon.icon == 'mpg.svg'">mpg</span>
            <span class="specs" v-if="icon.icon == 'miles.svg'">miles</span>
          </p> 
          
        </div>
      </div>
      <div class="car-imgages">
        <div class="vehicles-display-img" v-for="(img,key) in car.pics" :key="key">
        <img :src="`/images/${img}`" :alt="`picture of ${car.model}`">       
      </div>
      </div>
      <div class="car-specs">
        <p class="bold-title-red">Vehicle Details</p>
      </div>
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
.specs{
   font:$font-text;
}
.bold-title-red{
    font:$font-logo-S;
    color: $primary;
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