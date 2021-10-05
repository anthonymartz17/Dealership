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
        <!-- Each search field content card was assigned the index of the search field in order to show the content according to the index returned from the click event -->
        <!-- <template  v-if="fieldContent == 'make'" >
          
            <label
             v-for="(car,key) in carSelection"
             :key="key"  
             class="modal-clear-card-content"
             :for="key" 
             @click="selectModelByMake($event)"
             >
            <p>{{car.make}}</p>
            <input class="radio" type="radio" v-model="$store.state.makeSelected" :id="key" :value="car.make">    
          </label>
        </template>

        <template v-else-if="fieldContent == 'model'">
          <template  v-if="$store.state.makeSelected != ''" >
             <label class="modal-clear-card-content" for="model">
             <p>All {{makeSelected}}</p>
             
            <input class="radio" type="radio" v-model="$store.state.modelSelected" id="model" :value="'All ' + makeSelected">    
            </label>
            <label
              v-for="(model,key) in models" 
              :key="key" class="modal-clear-card-content" 
              :for="model.name" 
             >
             <p>{{model.name}}</p>
            <input class="radio" type="radio" v-model="$store.state.modelSelected" :id="model.name" :value="model.name">    
            </label>
          </template>
          <p class="select-a-make" v-else>Please select a make first</p>
        </template>
        <template  v-else-if="fieldContent == 'priceFrom'">
          <label  v-for="(priceFrom,key) in priceRangeComputed" :key="key" class="modal-clear-card-content" :for="key" @click="disablePrice(key)">
            <p>{{priceFrom | currency}}</p>
            <input class="radio" type="radio" v-model="$store.state.priceFromSelected" :id="key" :value="priceFrom">    
          </label>
        </template>
        <template  v-else-if="fieldContent == 'priceTo'">
          <label  v-for="(priceTo,key) in priceRangeComputed" :key="key" :class="['modal-clear-card-content',{disableOptions: key < priceUnavailable}]" :for="key">
            <p>{{priceTo | currency}}</p>
            <input class="radio" type="radio" v-model="$store.state.priceToSelected" :id="key" :value="priceTo">    
          </label>
        </template>
   
    
    <template v-else-if="fieldContent == 'yearFrom'">
      <label v-for="(yearFrom,key) in yearsRangeComputed" 
             :key="key" 
             :for="key"
             @click="disableYears(key);"
             class="modal-clear-card-content"       
      >
          <p>{{yearFrom}}</p>
          <input class="radio" type="radio" v-model="$store.state.yearFromSelected" :id="key" :value="yearFrom">    
    </label>
    </template>

    <template v-else-if="fieldContent == 'yearTo'">
      <label v-for="(yearTo,key) in yearsRangeComputed"
             :key="key" 
             :for="key"
             :class="['modal-clear-card-content',{disableOptions:yearsUnavailable != null && key > yearsUnavailable}]" 
      >
          <p>{{yearTo}}</p>
          <input class="radio" type="radio" v-model="$store.state.yearToSelected" :id="key" :value="yearTo">    
    </label>
    </template>
    <template v-else-if="fieldContent == 'carType'">
      <label v-for="(type,key) in carType.type"  :key="key" class="modal-clear-card-content" :for="key" >
          <p>{{type}}</p>
          <input class="radio" type="radio" v-model="$store.state.carTypeSelected" :id="key" :value="type">    
    </label>
    </template>
    <template v-else-if="fieldContent == 'condition'">
      <label v-for="(condition,key) in carCondition.condition"  :key="key" class="modal-clear-card-content" :for="key" >
          <p>{{condition}}</p>
          <input class="radio" type="radio" v-model="$store.state.carConditionSelected" :id="key" :value="condition">    
    </label>
    </template> -->

    <!-- ---------------HOW TO ASSIGN THE VALUE OF THE INPUT SELECTED TO A DYNAMIC V-MODEL SO THE VALUE GOES TO EACH CORRESPONDING PROP IN THE STORE?--------------------- -->
    <template>
      <label 
        v-for="(field,key) in clickedFieldContent.type"
        :key="key"
        class="selected-field-options-card-content" 
        :for="key" 
        @click.stop="selectedFieldData({$event,clickedFieldContent});toggleOptionsCard($event)"
      >
          <p>{{field}}</p>
          <input 
            class="radio"
            type="radio" 
            :id="key" 
            :value="field"
            name="moreOptions"          
          >    
    </label>
    </template>
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
    'carSelection',
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

.selected-field-options{
  
  position: absolute;
  top: 0;
  height: 130%;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 1em .5em;
  background:rgba(0, 0, 0, 0.5);



  &-card{
    font-family: $font-stack;
    overflow-y: auto;
    max-height: 95%;
    width: 95%;
    background: $light;
    border-radius: 5px;


  &-content{
    position: relative;
    padding: 1em;
    border-bottom: .5px solid $lightestDark;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
      background: darken($light, 20%);
    }


    p{
      pointer-events: none;
    }
    
  }
  .select-a-make{
    padding: 2em 1em;
    text-align: center;
    font: $font-text-bold;
  }

  .radio{
    pointer-events: none;
  }
    

    p{
      color: $dark;
    }

  }
}


</style>