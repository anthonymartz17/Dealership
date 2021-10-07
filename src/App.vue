<template>
    <div class="page-container">
     <div class="test"></div>
      <MobileMenu/>
      <AppHeader/>
      <AppMain/>
      <CarSelectionCard />
      <footer>
        <div class="footer-content"></div>
      </footer>
    </div>
 
  
</template>

<script>
// import AppModal from './components/Modal.vue'
import CarSelectionCard from './components/searchFieldMobile/CarSelectionCard.vue'
import AppHeader from './components/Header.vue'
import AppMain from './components/Main.vue'
import MobileMenu from './components/MobileMenu.vue'
import {mapActions,mapState,mapMutations} from 'vuex'



export default {
  created(){
  
   this.getCarsSelectionData()
  


  },
  methods:{
    ...mapActions([
      'getCarsSelectionData',
      ]),

    ...mapMutations([
      'toggleMobileMenu',
      
    ])
    

  },



  components:{
    AppHeader,
    AppMain,
    CarSelectionCard,
    MobileMenu,
    // AppModal,
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
  position: relative;
  background:$lightestDark;
  height: 100%;
  min-width: 22.5em;
 
}



</style>
