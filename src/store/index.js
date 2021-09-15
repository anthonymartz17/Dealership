import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Global
    desktopView:false,
    searchMobileModal:false,
    selectionModalToggler:false,
    fieldContent:'',

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
    
    // endPoints
    
    dealersUrl: "http://localhost:3000/dealers",
    carsInventory: "http://localhost:3000/cars_inventory",



    // mobile nav links
    carSelection:null,
    make:'',
    makeSelected:'',
    models:'',
    modelSelected:'',
    priceFrom:'',
    priceFromSelected:'',
    priceTo:'',
    priceToSelected:'',
    yearFrom:'',
    yearFromSelected:'',
    yearTo:'',
    yearToSelected:'',
    // makes:['Honda','Toyota','Acura'],
    // models:['Civic','camry','MDX'],
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
    toggleSelectionModal(state,e){
      if(e.target.classList.contains('modal-card-content') || e.target.classList.contains('modal') || e.target.classList.contains('field')){

        state.selectionModalToggler = !state.selectionModalToggler
        
      }
    
    },
    whichFieldContent(state,e){
      state.fieldContent = e.target.firstElementChild.textContent
    },
    selectModelByMake(state,e){
      state.carSelection.forEach(one =>{
        if(e.target.firstElementChild.textContent == one.make){
           state.models = one.model
        }
      })
    }
  
  },
  actions: {
 
    getCarsSelectionData(context){
      const carSelectionUrl = 'http://localhost:3000/car_selection';
      fetch(carSelectionUrl)
      .then(response => response.json())
      .then(data => context.state.carSelection = data)
      .catch(err =>{
        console.log(err)
      })   

    },

  },
  modules: {
  },

  getters:{

    carModels(state){
        return state.carSelection
    },
    
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
