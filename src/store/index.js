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
    mobileMenuToggler:true,
    carSelection:null,
    make:'',
    makeSelected:'',
    models:'',
    modelSelected:'',
    priceFromSelected:0,
    priceToSelected:0,
    yearFromSelected:0,
    yearToSelected:0,
  

    desktopNav:[

        {
          link:'Home',
          name:'Home', 
          icon:'fas fa-home',
          
      },
        {
          link:'Vehicles',
          name:'vehicles', 
          icon:'fas fa-car',
          subList:['Carros','Motores', 'Barcos', 'Vehiculos Pesados', 'Otros']
      },
        {
          link:'Electric Cars',
          name: 'electricos',
          icon:'fas fa-charging-station'
          
          },
        {
          link:'Contacto',
          name: 'contacto',
          icon:'fas fa-phone-volume'
        }
      
    ]
  },
  mutations: {
    formatPrice(value){
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  },
  toggleMobileMenu(state){
    state.mobileMenuToggler = !state.mobileMenuToggler
  },
   
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
      return yearsRange.reverse()
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
      function formatPrice(value){
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

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
        priceFrom = `$${formatPrice(state.priceFromSelected)}`
      }
      if(state.priceToSelected == 0){
        priceTo = 'Price To'
      }else{ 
        priceTo = `$${formatPrice(state.priceToSelected)}`
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
          class:'field',      
        },
        {
          name:model,
          class:'field', 
        },
        {
           name:priceFrom,
          class:'field inline', 
        },
        {
           name:priceTo,
          class:'field inline', 
        },
        {
           name:yearFrom,
           class:'field', 
        },
        {
           name:yearTo,
           class:'field ', 
        },
        
      ]

    }


  }
})
