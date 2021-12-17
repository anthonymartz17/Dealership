<template>
 <!-- :class="{'btn-container':$router.name == 'Advance'}"  -->
<router-link :to="{name:'searchResults'}" >
    <div class="btn btn-search"
      @click="
      searchByMake();
      searchByModel();
      "
    >Search</div>
</router-link>

</template>

<script>
import {mapMutations} from 'vuex'
export default {

  methods:{
    ...mapMutations([
      'searchByMake',
      'searchByModel'

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