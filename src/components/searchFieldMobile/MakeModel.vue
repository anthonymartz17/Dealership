<template>
 <div>
  <div class="makeModel-wrapper">        
    <div 
      class="search-fields-container-field"
      v-for="(field,key) in makeModel"
      :key="key"
      @click="toggleOptionsCard($event);
      showSelectedFieldContent(field.id);"
    >
      <p>{{field.field}}</p>
      <i class="fas fa-caret-down"></i>
    </div>                      
  </div> 
 </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  methods:{
    ...mapMutations([
      'toggleOptionsCard',
      'showSelectedFieldContent',
      'selectedFieldData'    
    ])
  
  },
  computed:{
     
     ...mapState([
       'clickedFieldContent',
    
     ]),
   
      makeModel(){
       let make,model;
        if(this.$store.state.make.typeSelected == ''){
          make = 'Make'
        }else{
          make = this.$store.state.make.typeSelected
        }
        if(this.$store.state.models.typeSelected == ''){
          model = 'Model'
        }else{
          model = this.$store.state.models.typeSelected
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