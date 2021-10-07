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
    <transition 
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div class="selected-field-options" 
        v-show="$store.state.optionsCardToggler"
        @click="toggleOptionsCard($event)"
    
      >
        <div  class="selected-field-options-card">
          <label
            v-for="(field,key) in clickedFieldContent.type"
            :key="key"  
            class="selected-field-options-card-content"
            :for="key" 
            @click.stop="selectedFieldData({$event,clickedFieldContent});
            toggleOptionsCard($event)
            "
        >
            <p>{{field}}</p>
            <input 
              class="radio"
              type="radio" 
              :id="key" 
              :value="field"
              name="searchFields" 
            >    
          </label>
        </div>
      </div>
    </transition>
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