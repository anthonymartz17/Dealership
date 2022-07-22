<template>
     <div class="search-type-wrapper">

     <div class="search-vehicle">
     <p class="search-title-desktop"><span> Search</span> Your Vehicle!</p>
     <form>
      
              <div class="field">
                <label for="condition">Car Condition:</label>
                <select 
                name="condition" 
                id="condition" 
                @click="assignValueToTypeSelected('condition')"
                >
                  <template v-for="(condition,key) in $store.state.carCondition.type">
                    <option  
                      :key="key" 
                      :value="condition" 
                      >
                        {{condition}}
                    </option>
                  </template>
                </select>
              </div>
              <div class="field">
                <label for="make">Make:</label>
                <select 
                name="make" 
                id="make" 
                @click="assignValueToTypeSelected('make')"
                >
                  <template v-for="(make,key) in $store.state.make.type">
                    <option  
                      :key="key" 
                      :value="make" 
                      >
                        {{make}}
                    </option>
                  </template>
                </select>
              </div>
              <div class="field">
                <label for="model">Model:</label>
                <select 
                name="model" 
                id="model" 
                @click="assignValueToTypeSelected('model')"
                >
                  <template v-for="(model,key) in $store.state.model.type">
                    <option  
                      :key="key" 
                      :value="model" 
                      >
                        {{model}}
                    </option>
                  </template>
                </select>
              </div>
              <p>{{this.$store.state.typeSelected}}</p>
             
              <!-- <div class="btn btn-advanceSearch">Advanced Search</div> -->
     </form>
     </div>

     <div class="search-types">

     </div>

</div>
</template>

<script>
import {mapGetters,mapState,mapMutations} from 'vuex'
export default {
 data(){
  return{

    searchLabels:[
      'Condition',
      'Make',
      'Model',
      'Year',
      'Price',
    ],



  }
 },
  methods:{
     ...mapMutations([
      'showSelectedFieldContent',
     'assignValueToTypeSelected' ,
     'selectModelByMake',
     ])
  },
  computed:{
    searchFieldPlaceholder(){
       let make,model;
      //  ,condition,year,price;
        if(this.make.typeSelected == ''){
          make = 'Make'
        }else{
          make = this.make.typeSelected
        }
        if(this.models.typeSelected == ''){
          model = 'Model'
        }else{
          model = this.models.typeSelected
        }
         
        return[
          {field:make, id:'make'},
          {field:model, id:'model'},
        ]
      }, 
    ...mapState([
      'clickedFieldContent',
      'carCondition'

    ]),
    ...mapGetters([
      'priceToComputed',
      'priceFromComputed',
      'yearFromComputed',
      'yearToComputed',
      ]),

}

}
</script>

<style lang="scss" scoped>
*{
  font-family: $font-stack;
  // color: $light;

}
.search-type-wrapper{
  display: flex;
  gap: 1em;
  margin-block: 1em;
}
.search-title-desktop{
  border-bottom: 2px solid $lightestDark;
  padding-bottom: .5em;
  margin-bottom: 1em;
   span{
    color: $primary;  
   }
   font:$font-text-bold;
}

  .search-vehicle{
    box-shadow:0px -2px 0px 0px $lightestDark;
    border:1px solid  $lightestDark;
    padding: 1em .5em;
    flex: 1;
 
  }
  .search-types{
    box-shadow:0px -2px 0px 0px $lightestDark;
    border:1px solid  $lightestDark;
    padding: 1em .5em;
    flex: 1;
  }
  
  .field{
    height: 3em;
    margin-block: .2em;
    display: flex;
    align-items: center;
  
    
    label{
    
      flex: 1;
    }

    select{
      flex: 3;
      font: $font-text-bold;
      padding: .2em;
    }
  }
  .price{
    display: flex;
  }
  .year{
    display: flex;
  }
  .btn{
    width: 100%;
    height: 3em;
    margin-block: .2em;
    font: $font-text-bold;
    text-align: center;
  }
  .btn-search{
    background: $primary;
    outline: none;
    border: none;
  }
  .btn-advanceSearch{
    background: $dark;
    color: $primary;
    display: grid;
    place-items: center;
  }
</style>