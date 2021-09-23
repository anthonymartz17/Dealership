<template>
  <transition 
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div
       class="modal" 
       v-show="$store.state.mobileMenuToggler" 
       @click="toggleModal">
      </div>
  </transition>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
     ...mapMutations([
      'toggleModal'
    ])
  }

}
</script>

<style>

</style>