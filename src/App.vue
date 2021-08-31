<template>
  <div>
    <div class="page-container">
      <AppHeader/>
    <main>
      <div class="main-content">
        <router-view/>
      </div>
    </main>
    <footer>
      <div class="footer-content"></div>
    </footer>
    
  </div>
  </div>
  
</template>

<script>

import AppHeader from './components/Header.vue'
export default {

  components:{
    AppHeader,
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
