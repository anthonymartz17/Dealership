<template>
  <main>
    <div class="main-container">
      <transition appear enter-active-class="animate__animated animate__fadeIn" >
        <router-view/>
      </transition>
    </div>
  </main>
</template>

<script>




export default {

  components:{
    
  },





}
</script>

<style lang="scss" scoped>
.main-container{
  width: 100%;
  height: 100%;
  
}


</style>