<template>
  <main class="main-container">
      <transition appear enter-active-class="animate__animated animate__fadeIn" >
      <router-view/>
      </transition>
   
  </main>
</template>

<script>




export default {






}
</script>

<style lang="scss" scoped>
.main-container{
  width: 100%;
  height: 100%;
  background: green;

 

  
}


</style>