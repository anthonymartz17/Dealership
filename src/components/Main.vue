<template>
  <main>
    <div class="main-container">
      <div class="search-type-carrousel-container">
        <div class="search-type-vehicles">
          <SearchMobile />
          <div class="type-vehicle"></div>
        </div>
        <div class="carrousel-vehicle"></div>
      </div>
    </div>
  </main>
</template>

<script>
import SearchMobile from './SearchMobile.vue'



export default {

  components:{
    SearchMobile,
  },





}
</script>

<style lang="scss" scoped>


</style>