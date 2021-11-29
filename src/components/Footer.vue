<template>
  <footer>
    <div class="footer-container">
      <Logo/>
      <small>© Auto Martz all rights reserved</small>
      <SocialMedia/>

    </div>

  </footer>
</template>

<script>
import Logo from './Logo.vue'
import SocialMedia from './SocialMedia.vue'
export default {
  components:{
    Logo,
    SocialMedia,
  }

}
</script>

<style lang="scss">
.footer-container{
  width: 100%;
  height:25vh;
  color: $light;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

</style>