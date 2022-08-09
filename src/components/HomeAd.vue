<template>
  <div class="ad-wrapper">
    <div class="ad">
      <p>add animation</p>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.ad-wrapper{
  @include desktop{
    display: flex;
    justify-content: center;
  }
}
 .ad{
  color: white;
    height: 5em;
    border: 1px solid $lightestDark;
    margin-top: 1em;
    display: grid;
    place-content: center;
    width: 50%;
    justify-self: center;
    background: $lightestDark;
    
 }
</style>