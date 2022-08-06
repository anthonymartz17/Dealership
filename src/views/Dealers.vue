<template>
  <div class="car-seller">
      <h3 class="car2view-titles">Seller</h3>
      <p class="car-seller-logo">{{carToViewDealer.name}}</p>
      <div class="car-seller-info">
        <h4>{{carToViewDealer.name}}</h4>
        <p><span>Tel:</span>  <span>{{carToViewDealer.tel}}</span></p>
        <p><span>E-mail:</span> <span>{{carToViewDealer.email}}</span></p>
        <p><span>Address:</span> <span>{{carToViewDealer.address}}</span></p>
      </div>
      <div v-if="$route.name === 'dealerInventory'">
        <VehiclesDisplay/>
      </div>
    </div>
</template>

<script>
import{mapMutations,mapState} from 'vuex'
import VehiclesDisplay from '@/components/VehiclesDisplay.vue'

export default {
   components:{
    VehiclesDisplay,
  },
  created(){
    this.setCarToViewDealer()
    this.selectDealerInventory('dealerInventory')
  },
  methods:{
   ...mapMutations([
    'setCarToViewDealer',
    'selectDealerInventory'
   ])
  },
  computed:{
    ...mapState([
      'carToViewDealer',
    ])
  }

}
</script>

<style lang="scss">

 .car-seller{
      color: $dark;
      position: relative;
      height: min-30vh;
      padding: .5em;
      margin-block: 1em;
        @include desktop{
    flex: 1;
    background: lighten($lightestDark,35);
   height: 100vh;
  }

      &-logo{
        // border: 1px solid $lightestDark;
        color: $primary;
        font: $font-mobile-m-bold;
        background: $lightestDark;
        height: 6em;
        width: 6em;
        display: grid;
        place-items: center;
        position: absolute;
        top: 0px;
        right: 1em;
      }

      &-info{
        h4{
          font: $font-mobile-l;
          color: $primary;
        }
        p{
          margin-block: 1em;
          color: $dark;
          
        }
        span:nth-child(1){
          font: $font-mobile-m-bold;
          margin-right: .5em;
        }
        span:nth-child(2){
          font: $font-mobile-m;
          margin-right: .5em;
        }
      }
    }

</style>