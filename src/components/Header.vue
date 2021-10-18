<template>
  <header class="header-container flex-j-c ">
    <div class="header-wrapper flex-a-c">
      <i class="fas fa-bars fa-2x" @click="toggleMobileMenu()"></i>
        <div class="logo-container">
          <router-link :to="{name:'Home'}"  @click="clearPropsVal">
            <span class="logo">Auto <span class="logo-m">M</span>artz</span>
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
          <i class="fas fa-search"></i>
        </router-link>
        <div class="sMedia" v-show="!$store.state.desktopView">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
        </div>
    </div>
  </header>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations([
    'toggleMobileMenu',
    'clearPropsVal',
   
    ])
    
  }

}
</script>

<style lang="scss" scoped>

.header-container{
  background: $dark;
  height: 10vh;
  width: 100%;
  color: $light;
  position: sticky;
  top: 0;
  
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
 
.logo-container{
  font: $font-logo-S;
  flex: 1 1 100%;
  text-align: center;
  
  .logo{
    cursor: pointer;
    color: $light;
  }

  .logo-m{
    color: $primary;
    border: 1px solid rgba(255, 255, 255, 0.301);
    padding-inline: .2em;
    border-radius: 50%;
  }
  @include desktop{
    text-align: left;
    font: $font-logo-L;
  }
   @include tablet{
    flex: 1 ;
    font: $font-logo-S;
  }
}

.fa-bars{
  cursor: pointer;
  @include desktop{
    display: none;
  }
}

.fa-search{
  @include desktop{
    display: none;
  }
  font-size: 1.5em;
  cursor: pointer;
  
   
}
.sMedia{

   display: none;
  @include desktop{
    display: flex;
  }
  @include tablet{
    flex: 1 ;
  }
  flex: 1 1 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: .2em;
    
    i{ 
      border: 1px solid $light;
      font-size: 1em;
      width: 1.5em;
      height: 1.5em;
      border-radius: 100%;
      text-align: center;
      padding-top:.2em ;
      transition: all .3s ease-in-out;
      cursor: pointer;

      &:hover{
        color: $primary;
      }
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