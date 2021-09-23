<template>
  <div class="search-fields-container">        
            <p class="search-fields-container-title">Search for Your Vehicle!</p>
              <!-- searchMobileFields is a computed property. It returns array of obj with field textContent and field class -->
              <div v-for="(field,key) in searchMobileFields" :key="key" class="search-fields-container-field"  @click="toggleSelectionModal($event);  
              whichFieldContent(key)">
                <p>{{field.name}}</p>
                <i class="fas fa-caret-down"></i>
              </div>        
              <div class="btn btn-search">Search</div>
              <router-link :to="{name:'Advance'}" class="btn btn-advanceSearch">
                <div >Advanced Search</div>
              </router-link>
            
            <div>
            </div>
          </div>
</template>

<script>
import {mapGetters,mapMutations,mapState} from 'vuex'
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
      'makeSelected',
      'searchMobileFields'
   
      ]),
      ...mapState([
        'makeSelected'
      ])

}

}
</script>

<style lang="scss" scoped>
 
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
    text-decoration: none;

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