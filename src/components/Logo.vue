<template>
  
          <router-link :to="{name:'Home'}">
            <span @click="clearPropsVal;" class="logo">
              Auto <span class="logo-m">M</span>artz
            </span>
          </router-link>
   
</template>

<script>
import {mapMutations} from 'vuex'
export default {

methods:{
  ...mapMutations([
    'clearPropsVal'
  ])
}
}
</script>

<style lang="scss">
 

  
  .logo{
    font: $font-logo-S;
    background: $dark;
    cursor: pointer;
    color: $light;
    padding: .1em .5em;
   


  .logo-m{
    color: $primary;
    border: 1px solid rgba(255, 255, 255, 0.301);
    padding-inline: .2em;
    border-radius: 50%;
    background: black;
  }
  @include desktop{
    
    text-align: left;
    font: $font-logo-S;
  }
  //  @include tablet{
  //   flex: 1 ;
  //   font: $font-logo-S;
  // }
}

</style>