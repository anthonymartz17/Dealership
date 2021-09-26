<template>
  <div>
     <div class="search-type-carrousel-container">
        <div class="search-type-vehicles">
          <SearchMobile />
          <div class="type-vehicle"></div>
        </div>
        <div class="carrousel-vehicle"></div>
      </div>
  </div>
</template>

<script>
import SearchMobile from '../components/searchFieldMobile/SearchMobile.vue'


export default {

  components:{
    SearchMobile
  }
  
}
</script>
