<template>
  <div class="car2view">
    <div class="car2view-car" v-for="(car,key) in carToView" :key="key">
     <div class="car2view-title-price">
      <h2 class="car2view-title">{{car.year}} {{car.make}} {{car.model}}</h2>
      <p class="car2view-red-title">{{car.price|currency}}</p>
     </div>
      <div class="car2view-info">
        <div class="car2view-info-children" v-for="(icon,key) in carToViewSpecsIcons" :key="key">
         <img class="car2view-info-icons" :src="`/images/icons/${icon.icon}`" alt="">
          <p class="car2view-info-specs">{{icon.iconInfo}}
            <span class="car2view-info-specs" v-if="icon.icon == 'mpg.svg'">mpg</span>
            <span class="car2view-info-specs" v-if="icon.icon == 'miles.svg'">miles</span>
            <span class="car2view-info-specs" v-if="icon.icon == 'owner.svg'">Owner</span>
          </p> 
          
        </div>
      </div>
      <div class="car2view-images">
        <div class="car2view-images-wrapper" v-for="(img,key) in car.pics" :key="key">
        <img :src="`/images/${img}`" :alt="`picture of ${car.model}`">       
      </div>
      </div>

       <div class="car2view-details">
        <p class="car2view-red-title car2view-title">Vehicle Details</p>
        <div class="car2view-details-specs">
          <div v-for="(detail,key) in carToViewDetails" :key="key">
            <p class="car2view-details-bold">{{detail.key}}:</p>
            <p class="car2view-details-text">{{detail.val}}</p>
          </div>
        </div>
         <p class="car2view-red-title car2view-title">Vehicle History</p>
         <div class="car2view-history">
         <div  class="flex-gap" v-for="(detail,key) in carToViewHistory" :key="key">
              <i :class="[detail.icon,'car-history-icon']"></i>
           <div>
            <p class="car2view-details-bold">{{detail.key}}:</p>
            <p class="car2view-details-text">{{detail.val}}
              <span v-if="detail.key == 'Owners'">Owner</span>
              <span v-if="detail.key == 'Accidents'">issues reported</span>
            </p>
            </div>
          </div>
           
         </div>

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
    'carToViewSpecsIcons',
    'carToViewDetails',
    'carToViewHistory',
  ])
 }

}
</script>

<style lang="scss">
.car2view-history{
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding-block: 1em;
}
.car-history-icon{
  border-radius: 50%;
  padding:1em;
  color: $light;
  background: $dark;
}

.car2view{
  
   background: $light;
   padding: .5em;

 &-title-price{
   margin-block: 1em;
 }
 &-title{
   font:$font-logo-S;
    border-bottom: 2px solid $dark;
 }
 &-red-title{
    font:$font-logo-S;
    color: $primary;
}

}

.car2view-info{
  display: grid;
  justify-items: center;
  gap: .5em .2em;
  grid-template-columns: 1fr 1fr 1fr;
  margin-block: 1em;

  &-children{
    text-align: center;
  }
  &-icons{
  width: 30px;
}
&-specs{
   font:$font-text;
}
}

    .car2view-images{
      display: grid;
      gap: 1em;
     
      &-wrapper{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   
      }
      img{
         max-width: 100%;
         height: 100%;
      }
     }

    .car2view-details{
      margin-block: 1em;

      &-title{
        border-bottom: 2px solid $dark;
        
      }
      &-specs{
        margin-block: .5em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 2em;
        
        
       

      }
      &-bold{
        font: $font-text-bold;
        
      }
      &-text{
        font: $font-text;

      }
    }
    
</style>