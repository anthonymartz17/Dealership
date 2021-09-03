<template>
  <main>
    <div class="main-container">
      <div class="search-type-carrousel-container">
        <div class="search-type-vehicles">
          <div class="search-vehicle">
            <p>Search Your Vehicle</p>
            <form>
              <div class="field make">
                <select name="make" id="make" v-model="$store.state.make">
                  <option selected value="" disabled>Marcas</option>
                  <option v-for="(make,key) in $store.state.makes" :key="key" :value="make">{{make}}</option>
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
                   <option v-for="(price,key) in $store.state.prices" :key="key" :value="price">{{price}}</option>
                </select>

                <select name="price-to" id="price-to" v-model="$store.state.priceTo">
                  <option selected value="" disabled>Price from</option>
                   <option v-for="(price,key) in priceTo" :key="key" :value="price">{{price}}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="type-vehicle"></div>
        </div>
        <div class="carrousel-vehicle"></div>
      </div>
    </div>
  </main>
</template>

<script>

// import mapGetters from 'vuex'
export default {

  data(){
    return{
      // make:''
    }
  },


methods:{
  
},
computed:{
  // ...mapGetters(['priceTo'])
}

}
</script>

<style>

</style>