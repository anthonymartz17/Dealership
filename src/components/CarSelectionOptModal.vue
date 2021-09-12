<template>
<transition

enter-active-class="animate__animated animate__fadeIn animate__faster"
leave-active-class="animate__animated animate__fadeOut animate__faster"

>
  <div class="modal"  @click="toggleSelectionModal($event);">

    <div class="modal-card"  v-if="fieldContent == 'Make'">
    <label v-for="(car,key) in make" :key="key" class="modal-card-content" :for="car.make">
      <p>{{car.make}}</p>
      <input class="radio" type="radio" v-model="$store.state.makeSelected" :id="car.make" :value="car.make">    
    </label>
    </div>
    <div class="modal-card"  v-else-if="fieldContent == 'Model'">
    <label v-for="(car,key) in make" :key="key" class="modal-card-content" :for="car.model">
      <p>{{car.model.name}}</p>
      <input class="radio" type="radio" v-model="$store.state.modelSelected" :id="car.model" :value="car.model">    
    </label>
    </div>
    <div class="modal-card"  v-else-if="fieldContent == 'Price'">
    <label v-for="(car,key) in make" :key="key" class="modal-card-content" :for="car.price">
      <p>{{car.price}}</p>
      <input class="radio" type="radio" v-model="$store.state.priceSelected" :id="car.price" :value="car.price">    
    </label>
    </div>
    <div class="modal-card"  v-else-if="fieldContent == 'Year'">
    <label v-for="(car,key) in make" :key="key" class="modal-card-content" :for="car.year">
      <p>{{car.year}}</p>
      <input class="radio" type="radio" v-model="$store.state.yearSelected" :id="car.year" :value="car.year">    
    </label>
    </div>
    
  </div>
  </transition>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {

computed:{
  ...mapState([
    'make',
    'fieldContent'
    

    ])
},
methods:{
  ...mapMutations([
    'toggleSelectionModal'
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

  .radio{
    pointer-events: none;
  }
    

    p{
      color: $dark;
    }

  }
}


</style>