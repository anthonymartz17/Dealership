<template>
  <div class="btn btn-search">Search</div>
</template>

<script>

export default {
 


}
</script>

<style lang="scss" scoped>
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