<template>
     <div class="search-type-wrapper">
     <div class="search-vehicle">
     <p class="search-title-desktop"><span> Search</span> Your Vehicle!</p>
        
     <form>
      
              <div class="field">
                <label for="condition">Condition:</label>
                <select 
                name="condition" 
                id="condition" 
                value ="hello"
                @input="assignValueToTypeSelected"
                
                >
                  <template v-for="(condition,key) in carCondition.type">
                    <option  
                      :key="key" 
                     
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
                value="Make"
                @input="assignValueToTypeSelected"
                @click="
                showSelectedFieldContent('make');
                selectModelByMake({$event, id:clickedFieldContent.id});
                "
                >
                  <template v-for="(make,key) in make.type">
                    <option  
                      :key="key" 
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
                @input="assignValueToTypeSelected"
                >
                  <template v-for="(model,key) in modelByMake">
                    <option  
                      :key="key" 
                      :value="model" 
                      >
                        {{model}}
                    </option>
                  </template>
                </select>
              </div>
              <div class="field">
                <label for="model">Year:</label>
                <div class="spacing-years-price">
                  <select 
                  
                      name="yearFrom" 
                      id="yearFrom" 
                      @input="onChangeMultiple($event)"
                  >
                     <option :value="null">From</option>
                     <template v-for="(yearFrom,key) in yearFrom.type">
                        <option  
                          :key="key" 
                          >
                            {{yearFrom}}
                        </option>
                     </template>
                  </select>
                  <select 
                      name="yearTo" 
                      id="yearTo" 
                      @input="onChangeMultiple($event)"
                    >
                    <option :value="null">To</option>
                    <template v-for="(yearTo,key) in yearTo.type">
                      <option  
                        :key="key"
                        :disabled="yearsUnavailable != null && yearsUnavailable <= key"
                        :class="{disabledOptions : yearsUnavailable != null && yearsUnavailable <= key}"
                        >
                          {{yearTo}}
                      </option>
                    </template>
                  </select>

               
                </div>
              </div>
              <div class="field">
                <label for="priceFrom">Price:</label>
                <div class="spacing-years-price">
                  <select 
                      name="priceFrom" 
                      id="priceFrom" 
                      @input="onChangeMultiple($event)"
                  >
                     <option :value="null">From</option>
                     <template v-for="(priceFrom,key) in priceFrom.type">
                        <option  
                          :key="key" 
                          >
                            {{priceFrom | currency}}
                        </option>
                     </template>
                  </select>
                  <select 
                      name="priceTo" 
                      id="priceTo" 
                      @input="assignValueToTypeSelected"
                     
                    >
                    <option :value="null">To</option>
                    <template v-for="(priceTo,key) in priceTo.type">
                      <option  
                      :disabled="pricesUnavailable != null && pricesUnavailable > key"
                       :class="{disabledOptions : pricesUnavailable != null && pricesUnavailable > key}"
                        :key="key" 
                        
                        >
                          {{priceTo | currency}}
                      </option>
                    </template>
                  </select>

               
                </div>
              </div>
             
              <!-- <div class="btn btn-advanceSearch">Advanced Search</div> -->
     </form>
     </div>

     <div class="search-types">

     </div>

</div>
</template>

<script>
import {mapGetters,mapState,mapMutations, mapActions} from 'vuex'
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
 created(){
  this.getCarsData({funcToCommit:'setDataInVehiclesDisplay',route:this.$route});
                
   
 },
  methods:{
    onChangeMultiple(e){
      this.assignValueToTypeSelected(e)
      this.disablePricesYears({id:e.target.id, key: e.target.selectedIndex})
    },
     ...mapMutations([
      'showSelectedFieldContent',
     'assignValueToTypeSelected' ,
     'selectModelByMake',
     'disablePricesYears'
     
     ]),
     ...mapActions([
      'getCarsData'
     ])
  },

  computed:{

    modelByMake(){
       if(this.make.typeSelected === ''){
          return ['Models']
       } 
          else{
            return this.models.type
          }  
    },
  
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
      'carsData',
      'clickedFieldContent',
      'make',
      'models',
      'priceFrom',
      'priceTo',
      'yearFrom',
      'yearTo',
      'carType',
      'carCondition',
      'fuel',
      'transmission',
      'driveTrain',
      'engine',
      'color',
      'pricesUnavailable',
      'yearsUnavailable',

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
.disabledOptions{
    
    background: darken($light, 10%);
    text-decoration: line-through;
  }
.spacing-years-price{
  display: flex;
  align-items: center;
  gap:1em;
  flex: 3;
  
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