<template>

 <transition 
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div class="selected-field-options" 
    v-show="$store.state.optionsCardToggler"
    @click="toggleOptionsCard($event)"
    
    >
      <div class="selected-field-options-card" >

        <div  class="selected-field-options-card">
          <label
            v-for="(field,key) in clickedFieldContent.type"
            :key="key"  
            class="selected-field-options-card-content"
            :for="key" 
            @click.stop="selectedFieldData({$event,clickedFieldContent});
            toggleOptionsCard($event)
            "
        >
        <!-- buggasso -->
           <!-- <p v-if="clickedFieldContent.id == 'make' ">{{field.make}}</p> -->
           <p>{{testfun(field)}}</p>
            <input 
              class="radio"
              type="radio" 
              :id="key" 
              :value="testfun(field)"
              name="searchFields" 
            >    
          </label>
        </div>

      </div>
    
    </div>
  </transition>  


</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex';
export default {

  data(){
    return {
      model:'model',
    
    }
  },

computed:{
  // priceToavailable(){
  //   if(this.)
  // },
  ...mapState([
    'make',
    'fieldContent',
    'models',
    'makeSelected',
    'carType',
    'carCondition',
    'priceUnavailable',
    'yearsUnavailable',
    'clickedFieldContent'
    
    
    

    ]),
    ...mapGetters([
      'carModelByMake',
      'priceRangeComputed',
      'yearsRangeComputed',
    ])
},


methods:{

    testFun(val){
     return val
    },
  ...mapMutations([
    'closeSelectionCard',
    'selectModelByMake',
    'disablePrice',
    'disableYears',
    'selectedFieldData',
    'toggleOptionsCard'

  
  ]),
  
}

}
</script>

<style lang="scss" scoped>
.disableOptions{
  pointer-events: none;
  text-decoration: line-through;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.26);
    
    
  }
 
}

</style>