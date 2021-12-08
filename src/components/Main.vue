<template>
  <main class="main-container">
      <transition appear enter-active-class="animate__animated animate__fadeIn" >
        <keep-alive>
            <router-view />
        </keep-alive>
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
  // max-height: 100%;




 

  
}


</style>