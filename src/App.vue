<template>
  <div>
    <MobileMenu/>
    <div class="page-container">
      <AppHeader/>
      <AppMain/>
      <SelectionModal v-show="$store.state.selectionModalToggler" />
      <footer>
        <div class="footer-content"></div>
      </footer>
    </div>
  </div>
  
</template>

<script>
import SelectionModal from './components/searchFieldMobile/CarSelectionOptModal.vue'
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
    SelectionModal,
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
  height: 100vh;
  min-width: 22.5em;
  position: relative;
}
// .modal{
//   position: absolute;
//   height: 100%;
//   width:100%;
//   background: rgba(0, 0, 0, 0.4);
// }

</style>
