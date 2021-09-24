<template>
  <div class="search-fields-container">        
            <p class="search-fields-container-title">Advance Search!</p>
              <div v-for="(field,key) in advanceSearchFieldsMobile" :key="key" class="search-fields-container-field"  @click="toggleSelectionModal($event);  
              whichFieldContent(key)">
                <p>{{field.name}}</p>
                <i class="fas fa-caret-down"></i>
              </div> 
              <div class="testing"></div>       
  </div>
</template>

<script>
import { mapGetters,mapMutations } from "vuex";
export default {
  computed:{
    ...mapGetters([
      'advanceSearchFieldsMobile'
    ])
  },
  methods:{
    ...mapMutations([
      'toggleSelectionModal',
       'whichFieldContent'
    ])
  }

}
</script>

<style lang="scss">
.testing{
  
}


</style>