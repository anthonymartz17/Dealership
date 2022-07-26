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
                
                >
                  <template v-for="(condition,key) in carCondition.type">
                    <option  
                     @click="assignValueToTypeSelected({$event,id:'condition'});"
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
                @click="
                assignValueToTypeSelected({$event, id:'model'})"
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
                      @click="
                      assignValueToTypeSelected({$event, id:'yearFrom'})"
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
                      @click="
                      assignValueToTypeSelected({$event, id:'yearTo'})"
                    >
                    <option :value="null">To</option>
                    <template v-for="(yearTo,key) in yearTo.type">
                      <option  
                        :key="key" 
                        >
                          {{yearTo}}
                      </option>
                    </template>
                  </select>

               
                </div>
              </div>
              <div class="field">
                <label for="model">Price:</label>
                <div class="spacing-years-price">
                  <select 
                      name="priceFrom" 
                      id="priceFrom" 
                      @click="
                      assignValueToTypeSelected({$event, id:'priceFrom'})"
                  >
                     <option :value="null">From</option>
                     <template v-for="(priceFrom,key) in priceFrom.type">
                        <option  
                          :key="key" 
                          >
                            {{priceFrom}}
                        </option>
                     </template>
                  </select>
                  <select 
                      name="priceTo" 
                      id="priceTo" 
                      @click="
                      assignValueToTypeSelected({$event, id:'priceTo'})"
                    >
                    <option :value="null">To</option>
                    <template v-for="(priceTo,key) in priceTo.type">
                      <option  
                        :key="key" 
                        >
                          {{priceTo}}
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
     ...mapMutations([
      'showSelectedFieldContent',
     'assignValueToTypeSelected' ,
     'selectModelByMake',
     
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
      'color'

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