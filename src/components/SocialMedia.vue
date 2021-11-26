<template>
       <div class="sMedia" >
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
        </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
.fa-bars{
  cursor: pointer;
  @include desktop{
    display: none;
  }
}

.fa-search{
  @include desktop{
    display: none;
  }
  font-size: 1.5em;
  cursor: pointer;
  
   
}
.sMedia{
  display: flex;
  align-items: flex-end;
  gap: .2em;
  
  @include tablet{
    flex: 1 ;
  }
 
    
    i{ 
      border: 1px solid $light;
      font-size: 1em;
      width: 1.5em;
      height: 1.5em;
      border-radius: 100%;
      text-align: center;
      padding-top:.2em ;
      transition: all .3s ease-in-out;
      cursor: pointer;

      &:hover{
        color: $primary;
      }
    }
}

</style>