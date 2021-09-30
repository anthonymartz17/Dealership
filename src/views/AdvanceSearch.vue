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
    <div class="search-fields-container">        
     <p class="search-fields-container-title">More Options</p>
     <div 
          v-for="(opt,key) in moreOptionsComputed"
          :key="key"
          class="search-fields-container-field"  
          @click="
            toggleSelectionModal($event);  
            whichFieldContent(opt);
            whichFieldContentTest(opt.id);
          "
     >
        <p>{{opt.field}}</p>
        <i class="fas fa-caret-down"></i>
      </div> 
                   
    </div>
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

    moreOptionsComputed(){
      let fuel,transmission,driveTrain,engine,color;
      if(this.$store.state.fuelSelected == ''){
        fuel = 'Fuel'
      }else{
        fuel = this.$store.state.fuelSelected
      }
      if(this.$store.state.transmissionSelected == ''){
        transmission = 'transmission'
      }else{
        transmission = this.$store.state.transmissionSelected
      }
      if(this.$store.state.driveTrainSelected == ''){
       driveTrain = 'DriveTrain'
      }else{
        driveTrain = this.$store.state.driveTrainSelected
      }
      if(this.$store.state.engineSelected == ''){
        engine = 'Engine'
      }else{
        engine = this.$store.state.engineSelected
      }
      if(this.$store.state.colorSelected == ''){
        color = 'Color'
      }else{
        color = this.$store.state.colorSelected
      }
      return [
        {field:fuel, id:'fuel'},
        {field:transmission, id:'transmission'},
        {field:driveTrain, id:'driveTrain'},
        {field:engine, id:'engine'},
        {field:color, id:'color'},
      ]
    }
  },
  methods:{
    ...mapMutations([
      'toggleSelectionModal',
       'whichFieldContent',
       'whichFieldContentTest'
    ])
  }

}
</script>

<style lang="scss">
.testing{}



</style>