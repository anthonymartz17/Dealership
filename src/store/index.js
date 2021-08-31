import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Global
    desktopView:false,


    // desktop nav links
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
  }
})
