<template>
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
            v-for="(field,key) in clickedFieldContent.type"
            :key="key"  
            :class="[
            'selected-field-options-card-content',
            {
              'card-content-disabled':clickedFieldContent.id == 'model' && make.typeSelected == '',
              disabledOptions: clickedFieldContent.id == 'priceTo' && pricesUnavailable != null && pricesUnavailable > key  ||  clickedFieldContent.id == 'yearTo' && yearsUnavailable != null && yearsUnavailable < key 
             }
            ]"
            :for="key" 
            @click.stop="
            toggleOptionsCard($event);
            assignValueToTypeSelected({$event,id:clickedFieldContent.id});
            selectModelByMake({$event,id:clickedFieldContent.id});
            disablePricesYears({clickedFieldContent,key});
            "
        >
           
            <p v-if="clickedFieldContent.id == 'priceFrom' || clickedFieldContent.id == 'priceTo' ">  
              {{field | currency}}
            </p>
            <p v-else>{{field}}</p>
            <input 
              class="radio"
              type="radio" 
              :id="key" 
              :value="field"
              name="searchFields" 
              :checked="clickedFieldContent.id == 'make' && key == 0"
             
            >    
          </label>
        </div>

      </div>
    
    </div>


  
  </transition>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  computed:{
     ...mapState([
       'make',
       'priceFrom',
       'priceTo',
       'modalToggler',
       'optionsCardToggler',
       'clickedFieldContent',
       'pricesUnavailable',
       'yearsUnavailable',
       'checked'
     ]),

  },
  methods:{
    ...mapMutations([
      'toggleOptionsCard',
      'showSelectedFieldContent',
      'assignValueToTypeSelected',
      'selectModelByMake',
      'formatPrice',
      'disablePricesYears',
      'checkField'
     
     
        
    ])
  }

}
</script>

<style lang="scss">

</style>