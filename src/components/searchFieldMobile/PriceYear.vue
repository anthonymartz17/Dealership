<template>
  <div class="p-y-wrapper">        
    <div 
      class="search-fields-container-field"
      v-for="(field,key) in priceYear" :key="key"
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
   
      priceYear(){

       function formatPrice(value){
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
       }
       let priceFrom,priceTo,yearFrom,yearTo;
        if(this.$store.state.priceFromSelected == 0){
          priceFrom = 'Price From'
        }else{
          priceFrom = formatPrice(this.$store.state.priceFromSelected)
        }
        if(this.$store.state.priceToSelected == 0){
          priceTo = 'Price To'
        }else{
          priceTo = formatPrice(this.$store.state.priceToSelected)
        }
         if(this.$store.state.yearFromSelected == 0){
          yearFrom = 'Year From'
        }else{
          yearFrom = this.$store.state.yearFromSelected
        }
        if(this.$store.state.yearToSelected == 0){
          yearTo = 'Year to'
        }else{
          yearTo = this.$store.state.yearToSelected
        }

        return[
          {field:priceFrom, id:'priceFrom'},
          {field:priceTo, id:'priceTo'},
          {field:yearFrom, id:'yearFrom'},
          {field:yearTo, id:'yearTo'}
        ]
      },   

}

}
</script>

<style lang="scss" scoped>
.p-y-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .2em;
}


</style>