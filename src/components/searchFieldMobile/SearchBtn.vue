<template>
 <!-- :class="{'btn-container':$router.name == 'Advance'}"  -->
<router-link :to="{name:'searchResults'}" >
    <div class="btn btn-search"
      @click="groupAllSearchMethods($route.name)"
    >Search</div>
          
</router-link>

</template>

<script>
import {mapMutations} from 'vuex'
export default {

  methods:{
    groupAllSearchMethods(routeName){
      this.searchByMake(routeName);
      this.searchByModel();
      this.searchByPrice();
      this.searchByYear();
      this.setSearchResultsWithNoUserInput();
    },
    ...mapMutations([
      'searchByMake',
      'searchByModel',
      'searchByPrice',
      'searchByYear',
      'setSearchResultsWithNoUserInput'
    ])
  }
 


}
</script>

<style lang="scss" scoped>

.btn-container{
  position: fixed;
  bottom: 0em;
  padding-inline: .5em;
}

   

</style>