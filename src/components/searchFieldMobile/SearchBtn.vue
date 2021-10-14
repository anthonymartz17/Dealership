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
.btn-search{
    background: $primary;
    transition: all .3s ease-in-out;
    border: 1px solid transparent;
    color: $light;
      &:hover{
      background: lighten($primary, 15%);
      border: 1px solid $light;
     
    }
  }
   

</style>