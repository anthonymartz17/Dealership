import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Global
    desktopView:false,
    searchMobileModal:false,
    selectionModalToggler:false,
    fieldContent:null,

    //Search mobile component

    searchMobileModalContent:null,
      
    // endPoints
    
    dealersUrl: "http://localhost:3000/dealers",
    carsInventory: "http://localhost:3000/cars_inventory",



    // mobile nav links
    testing:null,
    carSelection:null,
    make:'',
    makeSelected:'',
    models:'',
    modelSelected:'',
    priceFromSelected:0,
    priceToSelected:0,
    // yearsRange:[],
    yearFromSelected:0,
    yearToSelected:0,
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

    // getYearsRange(state){
    //   let startYear = 1970;
    //   let currentYear = new Date().getFullYear();
    //   for (let i = startYear; i<= currentYear+1; i++){
    //       state.yearsRange.push(i)
    //   }
    // },
   
    toggleSelectionModal(state,e){
      if(e.target.classList.contains('modal-card-content') || e.target.classList.contains('modal') || e.target.classList.contains('field')){

        state.selectionModalToggler = !state.selectionModalToggler
        
      }
    
    },
    // determines which content card will be display according to which search field is clicked on in the mobile view
    whichFieldContent(state,index){
      state.fieldContent = index
    },
    selectModelByMake(state,e){
      state.carSelection.forEach(one =>{
        if(e.currentTarget.firstElementChild.textContent == one.make){
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
    // array of years
    yearsRangeComputed(){
     let yearsRange = [];
      let startYear = 1970;
      let currentYear = new Date().getFullYear();
      for (let i = startYear; i<= currentYear+1; i++){
          yearsRange.push(i)
      }
      return yearsRange
    },
      //  array of prices
    priceRangeComputed(){
      let priceRange=[];
      let lowestPrice = 4000;
      let highestPrice = 60000;
      for(let i = lowestPrice; i<= highestPrice; i += 1000){
        priceRange.push(i)
      }
      return priceRange
    },

    // renders default text content of search fields when nothing is selected and updates according to whatever is selected
    searchMobileFields(state){
      let make;
      let model;
      let priceFrom;
      let priceTo;
      let yearFrom;
      let yearTo;

      if(state.makeSelected == ''){
        make = 'Make'
      }else{ 
        make = state.makeSelected
      }
      if(state.modelSelected == ''){
        model = 'Model'
      }else{ 
        model= state.modelSelected
      }
      if(state.priceFromSelected == 0){
        priceFrom = 'Price From'
      }else{ 
        priceFrom = state.priceFromSelected
      }
      if(state.priceToSelected == 0){
        priceTo = 'Price To'
      }else{ 
        priceTo = state.priceToSelected
      }
      if(state.yearFromSelected == 0){
        yearFrom = 'Year From'
      }else{ 
        yearFrom = state.yearFromSelected
      }
      if(state.yearToSelected == 0){
        yearTo = 'Year To'
      }else{ 
        yearTo = state.yearToSelected
      }

      return [
        { 
          name:make,
          class:'field make',      
        },
        {
          name:model,
          class:'field make', 
        },
        {
           name:priceFrom,
          class:'field make', 
        },
        {
           name:priceTo,
          class:'field make', 
        },
        {
           name:yearFrom,
           class:'field make', 
        },
        {
           name:yearTo,
           class:'field make', 
        },
        
      ]

    }


  }
})
