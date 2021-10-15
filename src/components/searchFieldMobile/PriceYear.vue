<template>
  <div>
    <div class="price-year-wrapper">        
    <div 
      class="search-fields-container-field"
      v-for="(field,key) in priceYear" :key="key"
      @click="
      toggleOptionsCard($event);
      selectPriceOrYear(field.id)
      "
    >
      <p>{{field.field}}</p>
      <i class="fas fa-caret-down"></i>
    </div>                       
    </div> 

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
            v-for="(field,key) in priceOrYear.type"
            :key="key"  
            class="selected-field-options-card-content"
            :for="key" 
            @click.stop="
            toggleOptionsCard($event);
            assignValueToTypeSelected({$event,id:priceOrYear.id});
          
            "
        >
            <p >{{field}}</p>
            <input 
              class="radio"
              type="radio" 
              :id="key" 
              :value="field"
              name="searchFields" 
            >    
          </label>
        </div>

      </div>
    
    </div>
 </transition>  





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

      selectPriceOrYear(id){
        let priceOrYear = [this.priceFrom,this.priceTo,this.yearFrom,this.yearTo];
       
       priceOrYear.forEach(one =>{
         if(id == one.id){
        
            priceOrYear = one
         }
       })
      },
  },
  computed:{

    ...mapState([
      'priceFrom',
      'priceTo',
      'yearFrom',
      'yearTo',
    ]),

  
      priceYear(){

  

       let priceFrom,priceTo,yearFrom,yearTo;
       
        if(this.$store.state.priceFrom.typeSelected == 0){
          priceFrom = 'Price From'
        }else{
          priceFrom = `$${this.formatPrice(this.$store.state.priceFrom.typeSelected)}`
        }
        if(this.$store.state.priceTo.typeSelected == 0){
          priceTo = 'Price To'
        }else{
          priceTo = `$${this.formatPrice(this.$store.state.priceTo.typeSelected)}`
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
.price-year-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .2em;
}


</style>