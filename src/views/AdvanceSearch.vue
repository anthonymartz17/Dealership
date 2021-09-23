<template>
  <div class="search-fields-container">        
            <p class="search-fields-container-title">Advance Search!</p>
              <div v-for="(field,key) in advanceSearchFieldsMobile" :key="key" class="search-fields-container-field"  @click="toggleSelectionModal($event);  
              whichFieldContent(key)">
                <p>{{field.name}}</p>
                <i class="fas fa-caret-down"></i>
              </div> 
             
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters([
      'advanceSearchFieldsMobile'
    ])
  }

}
</script>

<style>

</style>