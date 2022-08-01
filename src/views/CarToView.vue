<template>
  <div class="car2view">
    <div class="car2view-car" v-for="(car,key) in carToView" :key="key">
     <div class="car2view-title-price">
      <h2 class="car2view-title">{{car.year}} {{car.make}} {{car.model}}</h2>
      <p class="car2view-red-title">{{car.price|currency}}</p>
     </div>
     <div class="car-breakdown">   
      <div class="car2view-info">
        <template v-for="(icon,key) in carToViewGeneralInfo">
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
      <div 
        v-if="!morePics" 
        class="btn btn-search morePics " 
        @click="showMorePics"> 
          + Show More Pictures
      </div>

      <div class="car2view-details">
        <p class="car2view-red-title car2view-title">Vehicle Details</p>
        <div class="car2view-details-specs">
          <template v-for="(detail,key) in carToViewDetails">
          <div :key="key" v-if="detail.val">
            <p class="car2view-details-bold">{{detail.key}}:</p>
            <p class="car2view-details-text">{{detail.val}}</p>
          </div>
          </template>
        </div>
      </div>
      <div class="car2view-accesories">
       <p class="car2view-red-title car2view-title">Accesories</p>
        <ul>
          <li v-for="(accesory,key) in car.accesories" :key="key">{{accesory}}</li>
        </ul>

      </div>
         <div class="car2view-history">
            <p class="car2view-red-title car2view-title">Vehicle History</p>
            <div class= "car2view-history-detailWrap">
              <div  
                class="history-detail"
                v-for="(detail,key) in carToViewHistory" 
                :key="key"
               > 
               <div class="icon-detail-wrapper">
                  <div>
                    <i :class="[detail.icon,'car-history-icon']" 
                    :style="{'backgroundColor':detail.iconBg}"
                    >
                  </i>
                  </div>
                
                  <div class="car2view-history-details">
                      <p class="car2view-details-bold">{{detail.key}}:</p>
                      <p class="car2view-details-text">{{detail.val}}
                      </p>
                  </div>
                </div>
              </div>          
            </div>
         </div>

     </div>
    </div>
    <div class="car-seller"></div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  // resets the morePics prop back to false.
  created(){
     this.getCarToViewFromLocalStore()
     this.setCarToViewGeneralInfo()
     this.setVehicleHistory()
     this.setCarToviewDetails()
  },
  destroyed(){
    this.showMorePics()
  },
 
  data(){
    return {
      morePics:false
    }
  },
  methods:{
 
     ...mapMutations([
    'getCarToViewFromLocalStore',
    'setCarToViewGeneralInfo',
     'setVehicleHistory',
      'setCarToviewDetails',
    ]),
       // toggles the showMorePics btn 
    showMorePics(){
      this.morePics = !this.morePics
    }
  },
 computed:{

    ...mapState([
    'carToView',
    'carToViewGeneralInfo',
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
.morePics{
  @include desktop{
    display: none;
  }
}
.hidePics{
  overflow: hidden;
  height: 40vh;
  @include desktop{
    height: 100%;
    overflow: visible;
  }
}
.car2view-history{
  padding-block: 1em;
  margin-block: 1em;

  @include desktop{
    grid-area: history;
  }
  &-detailWrap{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-block: 1em;
    
  }
  
}

.car-history-icon{
  
  border-radius: 50%;
  width: 4em;
  height: 4em;
  display: grid;
  place-items: center;
  color: $light;
  margin:.5em 0;
  
  

}
.car2view-car{
  flex: 3;
}
.car-seller{
  @include desktop{
    flex: 1;
    background: lighten($lightestDark,35);
   height: 100vh;
  }

}
.car-breakdown{
  @include desktop{
    flex: 2;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: .5fr 1fr .5fr;
    column-gap: 1em;
    grid-template-areas: 
    "carPics detail" 
    "carPics accesories" 
    "carPics history" 
    ;
  }
  
}


.car2view{
  @include desktop{
    
    border-top: 1px solid $lightestDark;
    margin-block: 1em;
    padding: 0;
    display: flex;
    gap: .5em;
  }
  
   background: $light;
   padding: .5em;

 &-title-price{
   margin-block: 1em;

   @include desktop{
    display: flex;
    height: 3em;
    justify-content: space-between;
    border-bottom: 2px solid $lightestDark;
   }
 }
 &-title{
   font:$font-logo-S;
    border-bottom: 2px solid $dark;
    @include desktop{
      border: none;
      color: $primary;
    }
 }
 &-red-title{
    font:$font-logo-S;
    color: $primary;
    @include desktop{
      color: $dark;
    }
}

}

.car2view-info{
  display: grid;
  justify-items: center;
  gap: .5em .2em;
  grid-template-columns: 1fr 1fr 1fr;
  margin-block: 1em;

  @include desktop{
     display: none;
   
  }

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
      @include desktop{
        grid-area: carPics;
     

      }
     
      &-wrapper{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        @include desktop{
        }
   
      }
      img{
         max-width: 100%;
      }
     }
     .car2view-accesories{
      display: none;
     @include desktop{
      display: block;
      padding-bottom: 1em;
      border-bottom: 1px solid lighten($lightestDark,30);

      ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      li{
        list-style: none;
        line-height:180%;
      }
      
      ul li::before{
        content: '▪ ' ;
        color: $primary;
      }
     }
     }

    .car2view-details{
      margin-block: 1em;

      @include desktop{
        grid-area: detail;
        padding-bottom: 1em;
        border-bottom: 1px solid lighten($lightestDark,30);
      
      
      }

      &-title{
        border-bottom: 2px solid $dark;
        
      }
      &-specs{
        background: red;
        margin-block: .5em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: stretch;
        // gap: 0 2em;
        
        
       

      }
      &-bold{
        font: $font-text-bold;
        
      }
      &-text{
        font: $font-text;
      }
    }
    
</style>