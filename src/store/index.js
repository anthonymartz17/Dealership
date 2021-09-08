import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Global
    desktopView:false,
    searchMobileModal:false,

    //Search mobile component

    searchMobileModalContent:null,
    searchMobileFields:[
      {
        name:'Make',
        class:'field make',
    },
      {
        name:'Model',
        class:'field model',
    },
      {
        name:'price',
        class:'field price',
    },
      {
        name:'year',
        class:'field year',
    },


    ],
    



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
    showFieldOpt(state,e){
      console.log(state)
      console.log(e.target.classList)
    }
  },
  actions: {

    getCarsData(){
      fetch('../data/dbCarsDescription.json')
      .then(response =>{
           return response.json()
          // console.log(response)
      })
      .then(data =>{
        console.log(data)
      })
      .catch(err =>{
        console.log(err)
      })
    }
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
