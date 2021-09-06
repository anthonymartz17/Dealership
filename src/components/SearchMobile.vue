<template>
  <div class="search-vehicle">
            <div class="search-modal" v-show="$store.state.searchMobileModal">
              <ul>
                <li>
                  <p></p>
                  <input type="checkbox">
                </li>
              </ul>
            </div>

            <p>Search for Your Vehicle!</p>
            <div>
              <div v-for="(field,key) in $store.state.searchMobileFields" :key="key" :class="[field.class]" @click="showFieldOpt($event)" >
                <p>{{field.name}}</p>
                <i class="fas fa-caret-down"></i>
              </div>         
              <div class="btn btn-search">Search</div>
              <div class="btn btn-advanceSearch">Advanced Search</div>
            </div>
          </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {

created(){

  fetch("https://cis-automotive.p.rapidapi.com/getModels?brandName=Toyota", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "cis-automotive.p.rapidapi.com",
		"x-rapidapi-key": "undefined"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
},
  methods:{
   ...mapMutations([
     'showFieldOpt',
   ])
  },
  
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

<style lang="scss">
*{
  font-family: $font-stack;
  color: $light;

}

  .search-vehicle{
    background: $lightDark;
    padding: 1em .5em;
 
  }
  
  .field{
    height: 3em;
    margin-block: .2em;
    background:$lightestDark;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1em;
    cursor: pointer;
    transition: all .3s ease-in-out;
     border: 1px solid transparent;

    &:hover{
      background: darken($lightestDark, 10%);
      border: 1px solid $light;
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
    transition: all .3s ease-in-out;
    border: 1px solid transparent;

      &:hover{
      background: lighten($primary, 15%);
      border: 1px solid $light;
    }
  }
  .btn-advanceSearch{
    background: $dark;
    color: $primary;
    transition: all .3s ease-in-out;
    border: 1px solid transparent;

      &:hover{
      color: $light;
      border: 1px solid $light;
    }

  }
  .btn{
    display: grid;
    place-items: center;
    cursor: pointer;

  }
</style>