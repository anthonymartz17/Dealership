<template>
 <div>
    <div class="search-fields-container">        
     <p class="search-fields-container-title">Advance Search!</p>
     <div 
          v-for="(carType,key) in carTypeComputed"
          :key="key"
          class="search-fields-container-field"  
          @click="toggleSelectionModal($event);  
          whichFieldContent(carType)"
     >
        <p>{{carType.field}}</p>
        <i class="fas fa-caret-down"></i>
      </div> 
      <MakeModel/>               
    </div>
    <div class="search-fields-container">        
     <p class="search-fields-container-title">Price and Condition</p>
     <div 
          v-for="(condition,key) in carConditionComputed"
          :key="key"
          class="search-fields-container-field"  
          @click="toggleSelectionModal($event);  
          whichFieldContent(condition)"
     >
        <p>{{condition.field}}</p>
        <i class="fas fa-caret-down"></i>
      </div> 
      <PriceYear/>              
    </div>
    <p>{{carTypeSelected}}</p>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapState} from "vuex";
import MakeModel from '../components/searchFieldMobile/MakeModel.vue'
import PriceYear from '../components/searchFieldMobile/PriceYear.vue'
export default {
  components:{
    MakeModel,
    PriceYear,
  },
  computed:{
    ...mapState([
      'carTypeSelected'
    ]),
  
    ...mapGetters([
      'advanceSearchFieldsMobile'
    ]),
    carTypeComputed(){
      let cartype
      if(this.$store.state.carTypeSelected == ''){
        cartype = 'Car Types'
      }else{
        cartype = this.$store.state.carTypeSelected
      }
      return [{field:cartype, id:'carType'}]
    },
    carConditionComputed(){
      let condition
      if(this.$store.state.carConditionSelected == ''){
        condition = 'New/Used'
      }else{
        condition = this.$store.state.carConditionSelected
      }
      return [{field:condition, id:'condition'}]
    },
  },
  methods:{
    ...mapMutations([
      'toggleSelectionModal',
       'whichFieldContent'
    ])
  }

}
</script>

<style lang="scss">
.testing{}



</style>