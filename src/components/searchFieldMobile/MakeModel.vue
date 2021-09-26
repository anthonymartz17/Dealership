<template>
  <div class="makeModel-wrapper">        
    <div 
      class="search-fields-container-field"
      v-for="(field,key) in makeModel" :key="key"
      @click="toggleSelectionModal($event);whichFieldContent(field)"
    >
      <p>{{field.field}}</p>
      <i class="fas fa-caret-down"></i>
    </div>                       
  </div> 
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations([
      'toggleSelectionModal',
      'whichFieldContent'      
    ])
  
  },
  computed:{
   
      makeModel(){
       let make,model;
        if(this.$store.state.makeSelected == ''){
          make = 'Make'
        }else{
          make = this.$store.state.makeSelected
        }
        if(this.$store.state.modelSelected == ''){
          model = 'Model'
        }else{
          model = this.$store.state.modelSelected
        }
         
        return[
          {field:make, id:'make'},
          {field:model, id:'model'},
        ]
      },   

}

}
</script>

<style lang="scss" scoped>
.makeModel-wrapper{
  display: grid;
  grid-template-columns: 1fr;
}


</style>