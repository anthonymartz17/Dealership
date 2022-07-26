<template>
   <transition 
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
   >
      <div 
        class="selected-field-options" 
        v-show="$store.state.optionsCardToggler"
        @click="toggleOptionsCard($event);"
      >
        <div class="selected-field-options-card">
          <div
          
            v-for="(field,key) in clickedFieldContent.type"
            :id="clickedFieldContent.id"
            :value="field"
            :key="key"  
            :class="[
            'selected-field-options-card-content',
            {
              'card-content-disabled':clickedFieldContent.id == 'model' && make.typeSelected == '',
              disabledOptions: clickedFieldContent.id == 'priceTo' && pricesUnavailable != null && pricesUnavailable > key  ||  clickedFieldContent.id == 'yearTo' && yearsUnavailable != null && yearsUnavailable < key,
              'rememberSelection':clickedFieldContent.typeSelected !='' && field == clickedFieldContent.typeSelected
             }
            ]"
            :for="key" 
            @click.stop="
            assignValueToTypeSelected($event)
            toggleOptionsCard($event);
            selectModelByMake({$event, id:clickedFieldContent.id});
            disablePricesYears({clickedFieldContent,key});
            "
        >
           <template v-if="clickedFieldContent.id == 'priceFrom' || clickedFieldContent.id == 'priceTo' ">
                   {{field | currency}}
           </template>
            <!-- <p v-if="clickedFieldContent.id == 'priceFrom' || clickedFieldContent.id == 'priceTo' ">  
              {{field | currency}}
            </p> -->
            <template v-else>{{field}}</template>
            <!-- <p  v-else>{{field}}</p> -->
            <!-- <input 
              class="radio"
              type="hidden" 
              :id="key" 
              name="searchFields"  
              value="Make"
                @change="testAssign"
            >     -->
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
      'testAssign',
      'remSelection',
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
.rememberSelection{
  background: $lightestDark;

}
</style>