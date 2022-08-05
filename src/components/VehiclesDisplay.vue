

<template>
<div class="vehicles-container">
    <div 
    :class="['vehicles',{'vehicles-height':$route.name == 'Home'}]"
    >
  <h2 class="vehicles-title">{{pageTitle}} <i v-if="$route.name == 'Electric'" :style="{color:'#116530'}" class="fas fa-leaf"></i></h2>
 
  <router-link  :to="{name:'CarToView'}">
  <div class="vehicles-display" 
  
  >  
    <div
        class="vehicles-display-car"
        v-for="(car,key) in vehiclesDisplay"
        :key="key"
        @click="
        saveCarToViewToLocalStore({name:'carToView',data:car})
        getCarToViewFromLocalStore();
        setCarToViewGeneralInfo();
        saveCarToViewDealerToLocalS(car.dealerId)
        setCarToViewDealer()
        setVehicleHistory();
        setCarToviewDetails()"
   >
      <div v-if="car.pics[0]" class="vehicles-display-img">
        <img :src="`/images/${car.pics[0]}`" :alt="`picture of ${car.model}`">       
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
  </router-link>
    </div>

    <router-link class="moreVehicleBtn"  :to="{name:'Vehicles'}">
      <div v-show="$route.name == 'Home'" class="btn-search btn">
        + More Vehicles
      </div>
    </router-link>
</div>
</template>

<script>
import {mapMutations,mapState,mapActions} from 'vuex'



export default {

  data(){
    return {

      pageTitle:'',

    }
  },

  
  created(){
    
    this.getCarsData({funcToCommit:'setDataInVehiclesDisplay',route:this.$route});
    this.selectPageTitle(this.$route.name)
    // this.getCarsData({funcToCommit:'saveAllModelsToLocal',route:this.$route})
    // this.searchByMake()
   
 
    

  },

  methods:{
    
    ...mapMutations([
      'setDataInVehiclesDisplayb',
      'getCarToViewFromLocalStore',
      'setCarToViewGeneralInfo',
      'saveCarToViewDealerToLocalS',
      'setCarToViewDealer',
      'setVehicleHistory',
      'setCarToviewDetails',
      'saveCarToViewToLocalStore',
      'selectElectricCars',
      'searchByMake'
      
     
    ]),
     ...mapActions([
      'getCarsData',
      
      ]),

      selectPageTitle(name){
        let titles=[
          {routeName:'Vehicles', title:'Vehicles'},
          {routeName:'Electric', title:'Electrics and Hybrids'},
          {routeName:'Home', title:'Vehicles'},
          {routeName:'searchResults', title:'Search Results'}
        ]

        titles.forEach(one =>{
          if(name == one.routeName){
            this.pageTitle = one.title
          }
        })

      }


  },
  computed:{
    ...mapState([
      'vehiclesDisplay',
      'msg'
     
       
    ]),
  }



}
</script>

<style lang="scss">

.msg{
  font:$font-logo-S;
    padding: .2em;
    margin-bottom: .5em ;
}
.vehicles-container{
  
   height: 100%;
   padding: .5em;
   flex: 1;

}

.vehicles-height{
  height: 72vh;
  @include desktop{
    height: 85vh;
  }
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
   
     @include desktop{
       display: flex;
       justify-content: space-evenly;
       flex-wrap: wrap;
       gap: 1em;
      }
    &-car{
      @include desktop{
        
        
        width: 20%;
        flex-direction: column;
      }
      
      display: flex;
      justify-content: space-around;
      gap: .5em;
      padding-block: .3em;
      // cursor: pointer;

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
      //  @include desktop{
        
        
      // }

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
  .moreVehicleBtn{
    @include desktop{
      display: none;
    }
  }
  

</style>