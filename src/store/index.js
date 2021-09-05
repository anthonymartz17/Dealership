import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Global
    desktopView:false,



    // desktop nav links
    make:'',
    model:'',
    priceFrom:'',
    priceTo:'',
    yearFrom:'',
    yearTo:'',
    makes:['Honda','Toyota','Acura'],
    models:['Civic','camry','MDX'],
    prices:[3000,5000,7000,9000],
    years:[2010,2011,2012,2013,2014,2015],

    desktopNav:[

        {
          link:'Vehicle',
          name:'vehicles', 
          subList:['Carros','Motores', 'Barcos', 'Vehiculos Pesados', 'Otros']
      },
        {link:'Electricos', name: 'electricos'},
        {link:'Contacto', name: 'contacto'}
      
    ]
  },
  mutations: {
    searchVehicle(){
      console.log('found')
    }
  },
  actions: {
  },
  modules: {
  },

  getters:{
    priceFromComputed(state){
      let price = state.prices.map(one =>{
        return `$ ${one}`
      })
      return price
    },
    
    priceToComputed(state){
      let priceIncremented = state.prices.map(one =>{
        return `$ ${one + 2000}`
      })
      return priceIncremented
    },

    yearFromComputed(state){
      let year = state.years.map(one =>{
        return `From ${one}`
      })
      return year
    },
    yearToComputed(state){
      let year = state.years.map(one =>{
        return `To ${one}`
      })
      return year
    },

  }
})
