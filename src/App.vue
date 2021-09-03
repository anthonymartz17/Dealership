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
export default {

  components:{
    AppHeader,
    AppMain
  }
  
  }
</script>
<style lang="scss" scoped>
 
.page-container{
  background: $lightDark;
  height: 100vh;
  min-width: 22.5em;
}


</style>
