<template>
  <div class="car2view">
    <div class="car2view-car" v-for="(car,key) in carToView" :key="key">
     <div class="car2view-title-price">
      <h2 class="car2view-title">{{car.year}} {{car.make}} {{car.model}}</h2>
      <p class="car2view-red-title">{{car.price|currency}}</p>
     </div>
      <div class="car2view-info">
        <template v-for="(icon,key) in setCarToViewGeneralInfo">
        <div  class="car2view-info-children"  v-if="icon.iconInfo"  :key="key" >
         <img class="car2view-info-icons" :src="`/images/icons/${icon.icon}`" :alt="`icon of ${icon.iconInfo}`">
          <p class="car2view-info-specs">{{icon.iconInfo}}</p> 
        </div>
        </template>
      </div>
      <div :class="['car2view-images',{hidePics:!morePics}]">
        <div class="car2view-images-wrapper" v-for="(img,key) in car.pics" :key="key">
        <img :src="`/images/${img}`" :alt="`picture of ${car.model}`">       
      </div>
      </div>
      <div v-if="!morePics" class="btn btn-search" @click="showMorePics">+ Show More Pictures</div>

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
              <i :class="[detail.icon,'car-history-icon']" :style="{'backgroundColor':detail.iconBg}"></i>
           <div class="car2view-history-details">
            <p class="car2view-details-bold">{{detail.key}}:</p>
            <p class="car2view-details-text">{{detail.val}}
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
  // resets the morePics prop back to false.
  destroyed(){
    this.showMorePics()
  },
 
  data(){
    return {
      morePics:false
    }
  },
  methods:{
    // toggles the showMorePics btn 
    showMorePics(){
      this.morePics = !this.morePics
    }
  },
 computed:{

    ...mapState([
    'carToView',
    'setCarToViewGeneralInfo',
    'carToViewDetails',
    'carToViewHistory',
  ]),

  // vehicleHistory(){
  //   let owner;
  //    this.carToViewHistory.forEach(one =>{
  //     if(one.key == 'Owners' && one.val == 1){
  //       owner = 'One owner'
  //     }
  //   })
  //   return owner
  // }
 }

}
</script>

<style lang="scss">

.hidePics{
  overflow: hidden;
  height: 40vh;
}
.car2view-history{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em 0;
  padding-block: 1em;
  



  &-details{
    flex: 2;
    min-width: 6em;
    // background: red;

  }
}
.car-history-icon{
  border-radius: 50%;
  // width: 2em;
  height: 3.5em;
  display: grid;
  place-items: center;
  color: $light;
  overflow: hidden;
  flex: 1;
  
  

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