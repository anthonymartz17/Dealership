<template>
  <div class="search-vehicle">
            <p>Search Your Vehicle!</p>
            <form>
              <div class="field make">
                <select name="make" id="make" v-model="$store.state.make">
                  <option selected value="" disabled>Marcas</option>
                  <option class="opt" v-for="(make,key) in $store.state.makes" :key="key" :value="make">{{make}}</option>
                </select>
              </div>
              <div class="field model">
                  <select name="model" id="model" v-model="$store.state.model">
                  <option selected value="" disabled>Model</option>
                   <option v-for="(model,key) in $store.state.models" :key="key" :value="model">{{model}}</option>
                </select>
              </div>
              <div class="field price">
                   <select name="price-from" id="price-from" v-model="$store.state.priceFrom">
                  <option selected value="" disabled>Price from</option>
                   <option v-for="(price,key) in priceFromComputed" :key="key" :value="price">{{price}}</option>
                </select>

                <select name="price-to" id="price-to" v-model="$store.state.priceTo">
                  <option selected value="" disabled>Price to</option>
                   <option v-for="(price,key) in priceToComputed" :key="key" :value="price">{{price}}</option>
                </select>
              </div>
              <div class="field year">
                   <select name="year-from" id="year-from" v-model="$store.state.yearFrom">
                  <option selected value="" disabled>Year from</option>
                   <option v-for="(year,key) in yearFromComputed" :key="key" :value="year">{{year}}</option>
                   </select>

                   <select name="year-to" id="year-to" v-model="$store.state.yearTo">
                  <option selected value="" disabled>Year to</option>
                   <option v-for="(year,key) in yearToComputed" :key="key" :value="year">{{year}}</option>
                </select>
              </div>
              <input class="btn btn-search" type="submit" value="Search">
              <div class="btn btn-advanceSearch">Advanced Search</div>
            </form>
          </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  
  computed:{
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

  .search-vehicle{
    background: $lightDark;
    padding: 1em .5em;
 
  }
  
  .field{
    height: 3em;
    margin-block: .2em;
    

    select{
      width: 100%;
      background:$lightestDark;
      font: $font-text-bold;
      height: 100%;
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