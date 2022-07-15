<template>
    <div class="page-container">
     <AppModal/>
      <MobileMenu/>
      <AppHeader/>
      <AppMain/>
      <CarSelectionCard /> 
      <AppFooter/>
    </div>
 
  
</template>

<script>
import AppModal from './components/Modal.vue'
import CarSelectionCard from './components/searchFieldMobile/CarSelectionCard.vue'
import AppHeader from './components/Header.vue'
import AppMain from './components/Main.vue'
import AppFooter from './components/Footer.vue'
import MobileMenu from './components/MobileMenu.vue'

import {mapActions,mapState,mapMutations} from 'vuex'



export default {
  created(){
 
   this.$store.dispatch('getCarsData', {funcToCommit:'setCarsData'})
   this.getCarsData({funcToCommit:'setMakes'});
   this.getPriceRange();
   this.getYearsRange();
   this.getCarsData({funcToCommit:'saveAllModelsToLocal',route:this.$route});
   this.getCarsData({funcToCommit:'getAllModelsFromLocal',route:this.$route});
   this.setCarsData()

  },

  methods:{
    ...mapActions([
      'getCarsData',
      
      ]),

    ...mapMutations([
      'toggleMobileMenu',
      'getPriceRange',
      'getYearsRange',
      'getAllModels',
      'detectResize',
      'getAllModelsFromLocal',
      // 'saveAllModelsToLocal'
      'setCarsData'

     
      
    ])
    

  },



  components:{
    AppHeader,
    AppMain,
    AppFooter,
    CarSelectionCard,
    MobileMenu,
    AppModal,
  }, 
  computed:{
    ...mapState([
      'makeSelected',
      'vehiclesDisplay'
     

      
     
    ]),
  
  } 
  
  }
</script>
<style lang="scss" scoped>

 
.page-container{
  // background:$lightestDark;
  min-height: 100%;
  min-width: 25em;
  // overflow: auto;
  position: relative;

 
 

 
}



</style>
