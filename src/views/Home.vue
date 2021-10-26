<template>
  <div>
     <div class="search-type-carrousel-container">
       
          <SearchMobile />
          <VehiclesDisplay/>
          
      </div>
  </div>
</template>

<script>
import SearchMobile from '../components/searchFieldMobile/SearchMobile.vue'
import VehiclesDisplay from '../components/VehiclesDisplay.vue'


export default {

  components:{
    SearchMobile,
    VehiclesDisplay
  }
  
}
</script>
