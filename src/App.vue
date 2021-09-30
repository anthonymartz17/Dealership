<template>
    <div class="page-container">
      <MobileMenu/>
      <AppHeader/>
      <AppMain/>
      <CarSelectionCard v-show="$store.state.selectionModalToggler" />
      <footer>
        <div class="footer-content"></div>
      </footer>
    </div>
 
  
</template>

<script>
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
      'toggleMobileMenu'
    ])
    

  },



  components:{
    AppHeader,
    AppMain,
    CarSelectionCard,
    MobileMenu
  }, 
  computed:{
    ...mapState([
      'makeSelected',
     

      
     
    ]),
    // ...mapGetters([
    //    'priceRangeComputed'
    // ])
  } 
  
  }
</script>
<style lang="scss" scoped>

 
.page-container{
  background: $lightestDark;
  height: 100%;
  min-width: 22.5em;
  // position: relative;
}


</style>
