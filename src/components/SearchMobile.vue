<template>
  <div class="search-vehicle">
          
            <p>Search for Your Vehicle!</p>
            <div>
              <div v-for="(field,key) in $store.state.searchMobileFields" :key="key" :class="[field.class]" @click="toggleSelectionModal($event); whichFieldContent($event)">
                <p>{{field.name}}</p>
                <i class="fas fa-caret-down"></i>
              </div>         
              <div class="btn btn-search">Search</div>
              <div class="btn btn-advanceSearch">Advanced Search</div>
            </div>
            <div>
            </div>
          </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
// import {mapMutations} from 'vuex'
// import {mapActions} from 'vuex'


export default {

  components:{

    
  
  },

  data(){
    return{

      selectionModalToggler:true,

    }
  },


  methods:{
    ...mapMutations([
      'toggleSelectionModal',
      'whichFieldContent'
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

    p,i{
      pointer-events: none;
      
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