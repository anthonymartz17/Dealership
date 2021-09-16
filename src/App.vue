<template>
  <div>
    <div class="page-container">
      <AppHeader/>
      <AppMain/>
      <SelectionModal v-show="$store.state.selectionModalToggler"/>
     <p>{{models}}</p>
     
      
  
    <footer>
      <div class="footer-content"></div>
    </footer>
    
  </div>
  </div>
  
</template>

<script>
import SelectionModal from './components/CarSelectionOptModal.vue'
import AppHeader from './components/Header.vue'
import AppMain from './components/Main.vue'
import {mapActions,mapState} from 'vuex'



export default {
  
  methods:{
    ...mapActions([
      'getCarsSelectionData',
     

      ])

  },

  created(){
    this.getCarsSelectionData()

    
  },

  components:{
    AppHeader,
    AppMain,
    SelectionModal,
  }, 
  computed:{
    ...mapState([
      'makeSelected',
      'models'
     
    ]),
    // ...mapGetters([
     
    // ])
  } 
  
  }
</script>
<style lang="scss" scoped>
 
.page-container{
  background: $lightestDark;
  height: 100vh;
  min-width: 22.5em;


}


</style>
