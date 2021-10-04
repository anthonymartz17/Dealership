<template>
    <div class="page-container">
      <AppModal/>
      <MobileMenu/>
      <AppHeader/>
      <AppMain/>
      <CarSelectionCard v-show="$store.state.modalToggler"/>
      <footer>
        <div class="footer-content"></div>
      </footer>
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
  
   this.getCarsSelectionData()
  


  },
  methods:{
    ...mapActions([
      'getCarsSelectionData',
      ]),

    ...mapMutations([
      'toggleMobileMenu',
      'to'
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
  height: 100vh;
  min-width: 22.5em;
 
}



</style>
