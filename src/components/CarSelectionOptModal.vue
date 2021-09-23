<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div class="modal"  @click="toggleSelectionModal($event);">
      <div class="modal-card" >
        <!-- Each search field content card was assigned the index of the search field in order to show the content according to the index returned from the click event -->
        <template  v-if="fieldContent == 0" >
            <!-- <label class="modal-card-content" for="make">
              <p>MAKE</p>
              <input class="radio" type="radio" v-model="$store.state.makeSelected" id="model"  :checked="$store.state.makeSelected == ''">
            </label> -->
            <label
             v-for="(car,key) in carSelection"
             :key="key"  
             class="modal-card-content"
             :for="car.make" 
             @click="selectModelByMake($event)"
             >
            <p>{{car.make}}</p>
            <input class="radio" type="radio" v-model="$store.state.makeSelected" :id="car.make" :value="car.make">    
          </label>
        </template>

        <template v-else-if="fieldContent == 1">
          <template  v-if="$store.state.makeSelected != ''" >
             <label class="modal-card-content" for="model">
             <p>Model</p>
            <input class="radio" type="radio" v-model="$store.state.modelSelected" id="model" value="">    
            </label>
            <label
              v-for="(model,key) in models" 
              :key="key" class="modal-card-content" 
              :for="model.name" 
             >
             <p>{{model.name}}</p>
            <input class="radio" type="radio" v-model="$store.state.modelSelected" :id="model.name" :value="model.name">    
            </label>
          </template>
          <p class="select-a-make" v-else>Please select a make first</p>
        </template>
        <template  v-else-if="fieldContent == 2">
          <label  v-for="(priceFrom,key) in priceRangeComputed" :key="key" class="modal-card-content" :for="priceFrom">
            <p>${{priceFrom}}</p>
            <input class="radio" type="radio" v-model="$store.state.priceFromSelected" :id="priceFrom" :value="priceFrom">    
          </label>
        </template>
        <template  v-else-if="fieldContent == 3">
          <label  v-for="(priceTo,key) in priceRangeComputed" :key="key" class="modal-card-content" :for="priceTo">
            <p>${{priceTo}}</p>
            <input class="radio" type="radio" v-model="$store.state.priceToSelected" :id="priceTo" :value="priceTo">    
          </label>
        </template>
   
    
    <template v-else-if="fieldContent == 4">
      <label v-for="(yearFrom,key) in yearsRangeComputed"  :key="key" class="modal-card-content" :for="yearFrom" >
          <p>{{yearFrom}}</p>
          <input class="radio" type="radio" v-model="$store.state.yearFromSelected" :id="yearFrom" :value="yearFrom">    
    </label>
    </template>

    <template v-else-if="fieldContent == 5">
      <label v-for="(yearTo,key) in yearsRangeComputed"  :key="key" class="modal-card-content" :for="yearTo" >
          <p>{{yearTo}}</p>
          <input class="radio" type="radio" v-model="$store.state.yearToSelected" :id="yearTo" :value="yearTo">    
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
      model:'model'
    }
  },

computed:{
  ...mapState([
    'carSelection',
    'fieldContent',
    'models',
    
    
    

    ]),
    ...mapGetters([
      'carModelByMake',
      'priceRangeComputed',
      'yearsRangeComputed',
    ])
},
methods:{
  ...mapMutations([
    'toggleSelectionModal',
    'selectModelByMake',
    'formatPrice'
  ])
}

}
</script>

<style lang="scss" scoped>
.modal{
  
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1em .5em;


  &-card{
    font-family: $font-stack;
    overflow-y: auto;
    max-height: 95%;
    width: 95%;
    background: $light;
    border-radius: 5px;


  &-content{
    padding: 1em;
    border-bottom: .5px solid $lightestDark;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    cursor: pointer;


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