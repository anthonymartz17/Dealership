<template>
  <div>
     <div class="search-type-carrousel-container">
       
          <SearchMobile />
          <HomeAd/>
          <SearchDesktop />
          <VehiclesDisplay/>
          
      </div>
  </div>
</template>

<script>
import SearchMobile from '../components/searchFieldMobile/SearchMobile.vue'
import SearchDesktop from '../components/SearchDesktop.vue'
import VehiclesDisplay from '../components/VehiclesDisplay.vue'
import HomeAd from '../components/HomeAd.vue'


export default {

  components:{
    SearchMobile,
    SearchDesktop,
    VehiclesDisplay,
    HomeAd,
  }
  
}
</script>
