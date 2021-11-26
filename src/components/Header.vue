<template>
  <header class="header-container flex-j-c ">
    <div class="header-wrapper flex-a-c">
      <i class="fas fa-bars fa-2x" @click="toggleMobileMenu()"></i>
        <div class="logo-container">
          <router-link :to="{name:'Home'}">
            <span @click="clearPropsVal;" class="logo">
              Auto <span class="logo-m">M</span>artz
            </span>
          </router-link>
        </div>
        <nav class="desktopNav-container">
          <ul class="desktopNav flex-a-c">
            <li v-for="(link,key) in $store.state.desktopNav" :key="key"> 
              <router-link to=""> <p>{{link.link}}</p> </router-link>
            </li>
          </ul>
        </nav>
        <router-link :to="{name:'Advance'}" tag="div">
          <i class="fas fa-search" @click="clearPropsVal"></i>
        </router-link>
        <!-- <SocialMedia class="show-or-Hide"/> -->
    </div>
  </header>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
// import SocialMedia from './SocialMedia.vue'
export default {
  components:{
    // SocialMedia,
  },
  methods:{
    ...mapMutations([
    'toggleMobileMenu',
    'clearPropsVal',
    
   
    ]),
    
    
    
  },
  computed:{
    ...mapState([
      'desktopView'
    ])
  }


}
</script>

<style lang="scss" scoped>
// gotta work on displaying the social media when in tablet or desktop view
// .show-or-hide{
  
//   @include tablet{
//    display: none !important;
//   }
// }

.header-container{
  background: $dark;
  height: 10vh;
  width: 100%;
  color: $light;
  position: sticky;
  top: -10px;
  border-bottom: 1px solid $lightestDark;
  
}
.header-wrapper{

  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding-inline: 1.5em;

  @include desktop{
      width: 70%;
  }
  @include tablet{
    width: 90%;
  }
}




.desktopNav-container{
  display: none;
 
  @include desktop{
    display: flex;
    flex: 2 1 100%;
  }
   @include tablet{
    flex: 2 ;
  }

  
  
}

.desktopNav{
 
  width: 100%;
  justify-content: space-around;
  
    li{
      list-style: none;
    }
    a{
      text-decoration: none;
      color: $light;
      font: $font-text-bold;
      transition: all .3s ease-in-out;
       cursor: pointer;

      &:hover{
        color: $primary;
      }
    } 
}

</style>