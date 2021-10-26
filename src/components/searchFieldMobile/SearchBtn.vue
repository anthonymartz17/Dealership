<template>

<div :class="{'btn-container':$router.name == 'Advance'}">
  <div class="btn btn-search">Search</div>
 
</div>

</template>

<script>

export default {
 


}
</script>

<style lang="scss" scoped>

.btn-container{
  position: fixed;
  bottom: 0em;
  padding-inline: .5em;
}

   

</style>