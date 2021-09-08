<template>
  <div>
    <div class="page-container">
      <AppHeader/>
      <AppMain/>
      
  
    <footer>
      <div class="footer-content"></div>
    </footer>
    
  </div>
  </div>
  
</template>

<script>

import AppHeader from './components/Header.vue'
import AppMain from './components/Main.vue'
import {mapActions} from 'vuex'



export default {

  methods:{
    ...mapActions(['getCarsData'])

  },
  created(){
    this.getCarsData()
  },

  components:{
    AppHeader,
    AppMain
  },   
  
  }
</script>
<style lang="scss" scoped>
 
.page-container{
  background: $lightestDark;
  height: 100vh;
  min-width: 22.5em;
}


</style>
