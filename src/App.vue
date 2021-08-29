<template>
  <div>
    <div class="page-container">
    
    <header>
      <div class="header-container flex-a-c">
        <i class="fas fa-bars fa-2x"></i>
        <div class="logo">Auto Marz</div>
        <NavDesktop/>
        <i class="fas fa-search"></i>
        <div class="sMedia" v-show="$store.state.desktopView">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </header>
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

import NavDesktop from './components/navDesktop.vue'
export default {

  components:{
    NavDesktop,
  }
  
  }
</script>
<style lang="scss" scoped>
 
.page-container{
  background: $lightDark;
  height: 100vh;
  min-width: 22.5em;
}
.header-container{
  background: $dark;
  height: 10vh;
  width: 100%;
  padding-inline: .5em;
  color: $light;
  justify-content: space-around;

  @include desktop{
    background: red;
  }


  .logo{
    font-size: 2em;
  }

  .fa-bars{
    @include desktop{
      display: none;
    }
  }

  .fa-search{
    font-size: 1.5em;
  }

}

</style>
