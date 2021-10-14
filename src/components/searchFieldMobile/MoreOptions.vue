<template>
  <div> 
    <div class="search-fields-container">        
     <p class="search-fields-container-title">More Options</p>
     <div 
        v-for="(field,key) in moreOptionsComputed"
        :key="key"
        class="search-fields-container-field"  
        @click="
          toggleOptionsCard($event);  
          showSelectedFieldContent(field.id);
        "
     >
        <p>{{field.field}}</p>
        <i class="fas fa-caret-down"></i>
     </div>               
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapState} from "vuex";
export default {

    methods:{
    ...mapMutations([
      'toggleOptionsCard',
       'showSelectedFieldContent',
       'selectedFieldData',
    ])
  },
  computed:{
    ...mapState([
      'clickedFieldContent'
    ]),
     
    ...mapGetters([
      'advanceSearchFieldsMobile'
    ]),
   
  
    moreOptionsComputed(){
      let fuel,transmission,driveTrain,engine,color;
      if(this.$store.state.fuel.typeSelected == ''){
        fuel = 'Fuel'
      }else{
        fuel = this.$store.state.fuel.typeSelected
      }
      if(this.$store.state.transmission.typeSelected == ''){
        transmission = 'transmission'
      }else{
        transmission = this.$store.state.transmission.typeSelected
      }
      if(this.$store.state.driveTrain.typeSelected == ''){
       driveTrain = 'DriveTrain'
      }else{
        driveTrain = this.$store.state.driveTrain.typeSelected
      }
      if(this.$store.state.engine.typeSelected == ''){
        engine = 'Engine'
      }else{
        engine = this.$store.state.engine.typeSelected
      }
      if(this.$store.state.color.typeSelected == ''){
        color = 'Color'
      }else{
        color = this.$store.state.color.typeSelected
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

}
</script>

<style lang="scss" scoped>

</style>