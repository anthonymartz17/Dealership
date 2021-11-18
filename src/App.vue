<template>
    <div class="page-container">
     <AppModal/>
      <MobileMenu/>
      <AppHeader/>
      <AppMain/>
      <CarSelectionCard /> 
    </div>
 
  
</template>

<script>
import AppModal from './components/Modal.vue'
import CarSelectionCard from './components/searchFieldMobile/CarSelectionCard.vue'
import AppHeader from './components/Header.vue'
import AppMain from './components/Main.vue'
import MobileMenu from './components/MobileMenu.vue'
import {mapActions,mapState,mapMutations} from 'vuex'



export default {
  created(){
  
   this.getCarsData();
  //  this.getAllModels();
   this.getPriceRange();
   this.getYearsRange();

  },

  methods:{
    ...mapActions([
      'getCarsData',
      
      ]),

    ...mapMutations([
      'toggleMobileMenu',
      'getPriceRange',
      'getYearsRange',
      'getAllModels'
     
      
    ])
    

  },



  components:{
    AppHeader,
    AppMain,
    CarSelectionCard,
    MobileMenu,
    AppModal,
  }, 
  computed:{
    ...mapState([
      'makeSelected',
     

      
     
    ]),
  
  } 
  
  }
</script>
<style lang="scss" scoped>

 
.page-container{

  background:$lightestDark;
  min-height: 100%;
  min-width: 22.5em;
  overflow: auto;
  position: relative;
 
 

 
}



</style>
