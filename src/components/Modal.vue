<template>
  <transition 
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div class="modal" @click="toggleModal()" v-show="modalToggler"></div>
  </transition>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  computed:{
     ...mapState([
       'modalToggler'
     ])
  },
  methods:{
     ...mapMutations([
      'toggleModal',
      'toggleMobileMenu'
    ])
  }

}
</script>

<style lang="scss">
.modal{
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1em .5em;
 
  
}

</style>