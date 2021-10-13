<template>
 <div>
  <div class="makeModel-wrapper">        
    <div 
      class="search-fields-container-field"
      v-for="(field,key) in makeModel"
      :key="key"
      @click="toggleOptionsCard($event);
      showSelectedFieldContent(field.id);
      showMakeOrModel(field.id)
      "
    >
      <p>{{field.field}}</p>
      <i class="fas fa-caret-down"></i>
    </div>                     
  </div> 

 <transition 
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div class="selected-field-options" 
    v-show="$store.state.optionsCardToggler"
    @click="
    toggleOptionsCard($event);
    "
    >
      <div class="selected-field-options-card" >
        <div  class="selected-field-options-card">
          <label
            v-for="(field,key) in makeOrModel.type"
            :key="key"  
            class="selected-field-options-card-content"
            :for="key" 
            @click.stop="
            toggleOptionsCard($event);
            selectedFieldData({$event,id:makeOrModel.id});
            selectModelByMake($event,makeOrModel.id);
            "
        >
       
            <p>{{field}}</p>
            <input 
              class="radio"
              type="radio" 
              :id="key" 
              :value="field"
              name="searchFields" 
            >    
          </label>
        </div>

      </div>
    
    </div>
  </transition>  

 </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  data(){
    return{
      makeOrModel:[],

    }
  },
  methods:{

    showMakeOrModel(id){
     if(id == this.make.id){
       this.makeOrModel = this.make
     }else{
       this.makeOrModel = this.models
     }
    },
    
    selectModelByMake(e,id){

      if(id == 'make'){  
        this.carsData.forEach(one =>{
          if(this.make.typeSelected == one.make){
            this.models.typeSelected = `All ${one.make}`
            this.models.type = one.model.map(one =>{
              return one.name
            })
          } 
        })
      } 
      if(id == 'model'){
        this.models.typeSelected = e.currentTarget.textContent
      }
    },
    
    ...mapMutations([
      'toggleOptionsCard',
      'showSelectedFieldContent',
      'selectedFieldData',
     
        
    ])
  
  },
  computed:{
     
     ...mapState([
       'make',
       'models',
       'carsData'
    
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