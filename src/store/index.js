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
    years:[2010,2012,2008],

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
  },
  actions: {
  },
  modules: {
  },

  getters:{
    priceTo(state){
      let priceIncremented = state.prices.forEach(one =>{
        one + 2000
      })

      return priceIncremented
    }
  }
})
