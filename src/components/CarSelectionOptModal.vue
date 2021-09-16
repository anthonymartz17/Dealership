<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div class="modal"  @click="toggleSelectionModal($event);">
      <div class="modal-card" >
        <template  v-if="fieldContent == 'Make'" >
            <!-- <label class="modal-card-content" for="make">
              <p>MAKE</p>
              <input class="radio" type="radio" v-model="$store.state.modelSelected" id="model" value="">
            </label> -->
            <label
             v-for="(car,key) in carSelection"
             :key="key"  
             class="modal-card-content"
             :for="car.make" 
             @click.stop="selectModelByMake($event)"
             >
            <p>{{car.make}}</p>
            <input class="radio" type="radio" v-model="$store.state.makeSelected" :id="car.make" :value="car.make">    
          </label>
        </template>
        <template v-else-if="fieldContent == 'Model'">
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
    
    <!-- <template v-for="(car,key) in make">
      <label  :key="key" class="modal-card-content" :for="car.model"  v-if="fieldContent == 'Model'">
          <p>{{car.model.name}}</p>
          <input class="radio" type="radio" v-model="$store.state.modelSelected" :id="car.model" :value="car.model">    
    </label>
    </template>
    <template  v-for="(car,key) in make" >
      <label :key="key" class="modal-card-content" :for="car.price" v-if="fieldContent == 'Price'">
          <p>{{car.price}}</p>
          <input class="radio" type="radio" v-model="$store.state.priceSelected" :id="car.price" :value="car.price">    
    </label>
    </template>
    <template v-for="(car,key) in make" >
      <label :key="key" class="modal-card-content" :for="car.year"  v-if="fieldContent == 'Year'">
          <p>{{car.year}}</p>
          <input class="radio" type="radio" v-model="$store.state.yearSelected" :id="car.year" :value="car.year">    
    </label>
    </template> -->

      </div>
    
    </div>
  </transition>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex';
export default {

computed:{
  ...mapState([
    'carSelection',
    'fieldContent',
    'models'
    

    ]),
    ...mapGetters([
      'carModelByMake'
    ])
},
methods:{
  ...mapMutations([
    'toggleSelectionModal',
    'selectModelByMake'
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