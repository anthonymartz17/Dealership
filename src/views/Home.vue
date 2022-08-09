<template>
  <div>
     <div class="search-type-carrousel-container">
       
          <SearchMobile />
          <SearchDesktop />
          <VehiclesDisplay/>
          
      </div>
  </div>
</template>

<script>
import SearchMobile from '../components/searchFieldMobile/SearchMobile.vue'
import SearchDesktop from '../components/SearchDesktop.vue'
import VehiclesDisplay from '../components/VehiclesDisplay.vue'


export default {

  components:{
    SearchMobile,
    SearchDesktop,
    VehiclesDisplay,
  }
  
}
</script>
