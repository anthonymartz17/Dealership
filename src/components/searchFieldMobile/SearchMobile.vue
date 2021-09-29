<template>
  <div class="search-fields-container">        
    <p class="search-fields-container-title">Search for Your Vehicle!</p>
    <MakeModel/>
    <PriceYear/>        
    <div class="btn btn-search">Search</div>
    <router-link :to="{name:'Advance'}">
      <div class="btn btn-advanceSearch" @click="clearPropsVal" >Advanced Search</div>
    </router-link>      
   </div>
</template>

<script>
import {mapMutations} from 'vuex'
import MakeModel from './MakeModel.vue'
import PriceYear from './PriceYear.vue'

export default {

  components:{
    PriceYear,
    MakeModel,   
  },
  methods:{
    ...mapMutations([
      'toggleSelectionModal',   
      'clearPropsVal'     
    ])
  
  },
}
</script>

<style lang="scss" scoped>
 
  .btn{
    width: 100%;
    height: 3em;
    margin-block: .2em;
    font: $font-text-bold;
    text-align: center;
  }
  .btn-search{
    background: $primary;
    transition: all .3s ease-in-out;
    border: 1px solid transparent;

      &:hover{
      background: lighten($primary, 15%);
      border: 1px solid $light;
    }
  }
  
  .btn-advanceSearch{
    background: $dark;
    color: $primary;
    transition: all .3s ease-in-out;
    border: 1px solid transparent;
   

  

      &:hover{
      color: $light;
      border: 1px solid $light;
    }

  }
  .btn{
    display: grid;
    place-items: center;
    cursor: pointer;

  }
</style>