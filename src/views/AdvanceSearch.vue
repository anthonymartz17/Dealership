<template>
 <div class="advance-search">
    <div class="search-fields-container">        
     <p class="search-fields-container-title">Advance Search!</p>
     <div 
          v-for="(carType,key) in carTypeComputed"
          :key="key"
          class="search-fields-container-field"  
          @click="whichFieldContent(carType)"
     >
        <p>{{carType.field}}</p>
        <i class="fas fa-caret-down"></i>
      </div> 
      <MakeModel/>               
    </div>
    <div class="search-fields-container">        
     <p class="search-fields-container-title">Price and Condition</p>
     <div 
          v-for="(field,key) in carConditionComputed"
          :key="key"
          class="search-fields-container-field"  
          @click="toggleOptionsCard($event);  
          showSelectedFieldContent(field.id)"
     >
        <p>{{field.field}}</p>
        <i class="fas fa-caret-down"></i>
      </div> 
      <PriceYear/>              
    </div>
    <MoreOptions/>
    
    <SearchBtn :class="{btnPosition:searchBtn}"/>
    
  </div>
</template>

<script>
import { mapGetters,mapMutations} from "vuex";
import MakeModel from '../components/searchFieldMobile/MakeModel.vue'
import PriceYear from '../components/searchFieldMobile/PriceYear.vue'
import SearchBtn from '../components/searchFieldMobile/SearchBtn.vue'
import MoreOptions from '../components/searchFieldMobile/MoreOptions.vue'
export default {
  data(){
    return{
      searchBtn:false
    }
  },
  components:{
    MakeModel,
    PriceYear,
    SearchBtn,
    MoreOptions,
  },
  created(){
   this.searchBtn = true 
  },
  computed:{
    
  
    ...mapGetters([
      'advanceSearchFieldsMobile'
    ]),
    carTypeComputed(){
      let cartype
      if(this.$store.state.carType.typeSelected == ''){
        cartype = 'Car Types'
      }else{
        cartype = this.$store.state.carType.typeSelected
      }
      return [{field:cartype, id:'carType'}]
    },
    carConditionComputed(){
      let condition
      if(this.$store.state.carCondition.typeSelected == ''){
        condition = 'New/Used'
      }else{
        condition = this.$store.state.carCondition.typeSelected
      }
      return [{field:condition, id:'condition'}]
    },

  },
  methods:{
    ...mapMutations([
      'toggleOptionsCard',
       'showSelectedFieldContent'
    ])
  }

}
</script>

<style lang="scss">

.advance-search{
  padding-bottom: 3em;
  background: $lightDark;
}

.btnPosition{
  position: fixed;
  bottom: 0em;
}



</style>