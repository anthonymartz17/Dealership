<template>
  <div>
    <div class="price-year-wrapper">        
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
  </div>
  

</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  data(){
    return{
      priceOrYear:[],

    }
  },
  methods:{
    ...mapMutations([   
      'toggleOptionsCard',
      'showSelectedFieldContent', 
      'formatPrice'  
    ]),

      // selectPriceOrYear(id){
      //   let priceOrYear = [this.priceFrom,this.priceTo,this.yearFrom,this.yearTo];
       
      //  priceOrYear.forEach(one =>{
      //    if(id == one.id){
        
      //       priceOrYear = one
      //    }
      //  })
      // },
  },
  computed:{

    ...mapState([
      'priceFrom',
      'priceTo',
      'yearFrom',
      'yearTo',
    ]),


// price formatter function is throwing undefined
  
      priceYear(){
        
   function formatPrice(value){
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
     }

       let priceFrom,priceTo,yearFrom,yearTo;
       
        if(this.priceFrom.typeSelected == 0){
          priceFrom = 'Price From'
        }else{
          priceFrom = `$${formatPrice(this.priceFrom.typeSelected)}`
        }
        if(this.priceTo.typeSelected == 0){
          priceTo = 'Price To'
        }else{
          priceTo = `$${formatPrice(this.priceTo.typeSelected)}`
        }
         if(this.yearFrom.typeSelected == 0){
          yearFrom = 'Year From'
        }else{
          yearFrom = this.yearFrom.typeSelected
        }
        if(this.yearTo.typeSelected == 0){
          yearTo = 'Year to'
        }else{
          yearTo = this.yearTo.typeSelected
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
.price-year-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .2em;
}


</style>