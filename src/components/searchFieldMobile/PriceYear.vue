<template>
  <div class="p-y-wrapper">        
    <div 
      class="search-fields-container-field"
      v-for="(field,key) in priceYear" :key="key"
      @click="
      toggleOptionsCard($event);
      showSelectedFieldContent(field.id);
      "
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
      'toggleOptionsCard',
      'showSelectedFieldContent',   
    ])
  
  },
  computed:{
   
      priceYear(){

       function formatPrice(value){
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
       }
       let priceFrom,priceTo,yearFrom,yearTo;
        if(this.$store.state.priceFrom.typeSelected == 0){
          priceFrom = 'Price From'
        }else{
          priceFrom = `$${formatPrice(this.$store.state.priceFrom.typeSelected)}`
        }
        if(this.$store.state.priceTo.typeSelected == 0){
          priceTo = 'Price To'
        }else{
          priceTo = `$${formatPrice(this.$store.state.priceTo.typeSelected)}`
        }
         if(this.$store.state.yearFrom.typeSelected == 0){
          yearFrom = 'Year From'
        }else{
          yearFrom = this.$store.state.yearFrom.typeSelected
        }
        if(this.$store.state.yearTo.typeSelected == 0){
          yearTo = 'Year to'
        }else{
          yearTo = this.$store.state.yearTo.typeSelected
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