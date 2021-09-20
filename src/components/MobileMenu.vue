<template>
 <transition
 enter-active-class="animate__animated animate__slideInLeft animate__faster"
 leave-active-class="animate__animated animate__slideOutLeft animate__faster"
 >
  <nav class="nav-menu-container" v-show="$store.state.mobileMenuToggler">
    <ul>
      <li v-for="(link,key) in $store.state.desktopNav" :key="key"> 
                <router-link to=""><i :class="link.icon"></i> <p>{{link.link}}</p> </router-link>
      </li>
    </ul>
  </nav>
 </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">

 .nav-menu-container{
   z-index: 3;
   position: absolute;
   background: $lightestDark;
   height: 100%;
   width: 70%;
   padding-top: 4em;

   ul{

     height: 30%;
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-around;

     
   }

   li{
     padding: 1em 2em;
     list-style: none;
     width: 100%;
     border: 1px solid transparent;
     transition: all .3s ease-in-out;
     
     
     

     &:hover{
       border-block: 1px solid $light;
       
     }
     


   }
   a{
     width: 100%;
     height: 100%;
     text-decoration: none;
     display: flex;
     align-items: baseline;
     gap: 1em;
     font: $font-text-bold;
    
   }
 }

</style>