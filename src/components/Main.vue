<template>
  <main class="main-container">
      <transition appear enter-active-class="animate__animated animate__fadeIn" >
       
            <router-view />
      
      </transition>
   
  </main>
</template>

<script>




export default {






}
</script>

<style lang="scss" scoped>
.main-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
 
 @include desktop{
  padding:0 15em;
  justify-self: center;
 }

 

  
}


</style>