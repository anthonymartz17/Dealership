import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Global
    desktopView:false,
    searchMobileModal:false,
    modalToggler:false,
    optionsCardToggler:false,
    searchBtnPosition:false,
    fieldContent:null,

    carsData:{},

    //Search mobile component

    searchMobileModalContent:null,
      
    // endPoints
    
    dealersUrl: "http://localhost:3000/dealers",
    carsInventory: "http://localhost:3000/cars_inventory",



    // mobile nav links
    mobileMenuToggler:false,
    make:{
      id:'make',
      type:[],
      typeSelected:'',
    },
    models:{
      id:'model',
      type:[],
      typeSelected:'',

    },
    priceFrom:{
      id:'priceFrom',
      type:[],
      typeSelected:0,

    },
    priceTo:{
      id:'priceTo',
      type:[],
      typeSelected:0,

    },
    yearFrom:{
      id:'yearFrom',
      type:[],
      typeSelected:0,
    },
    yearTo:{
      id:'yearTo',
      type:[],
      typeSelected:0
    },
    priceUnavailable:null,
    yearsUnavailable:null,
   
    carType:{
      id:'carType',
      type:
        [
         'Body Style',
         'Sedan',
         'SUV',
         'Van',
         'Pickup Truck',
         'Convertible',
       ],
       typeSelected:'',
      },
    carCondition:{
      id:'condition',
      type:['New/Used','New','Used'],
      typeSelected:'',
    },
    fuel:{
      id:'fuel',
      type:['Gasoline','Diesel','Electric','Hybrid'],
      typeSelected:'',    
    },
    transmission:{
      id:'transmission',
      type:['Automatic','Manual'],
      typeSelected:'',
    },
    driveTrain:{
      id:'driveTrain',
      type:['RWD','FWD','AWD'],
      typeSelected:'',
    },
    engine:{
      id:'engine',
      type:['I4','v6'],
      typeSelected:'',
    },
    color:{
      id:'color',
       type:[
        "Black",
        "Blue",
        "Brown",
        "Coral",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "Gold",
        "Gray",
        "Grey",
        "Green",
        "LightBlue",
        "LightCoral",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "Magenta",
        "Maroon",
        "Olive",
        "Orange",
        "Pink",
        "Purple",
        "Red",
        "RoyalBlue",
        "Silver",
        "SkyBlue",
        "Violet",
        "White",
        "Yellow",
      ],
      typeSelected:'',
    },
    clickedFieldContent:{},

    desktopNav:[

        {
          link:'Home',
          name:'Home', 
          icon:'fas fa-home',
          
      },
        {
          link:'Vehicles',
          name:'Vehicles', 
          icon:'fas fa-car',
          subList:['Carros','Motores', 'Barcos', 'Vehiculos Pesados', 'Otros']
      },
        {
          link:'Electric Cars',
          name: 'Electric',
          icon:'fas fa-charging-station'
          
          },
        {
          link:'Advance Search',
          name: 'Advance',
          icon:'fas fa-search'
          },


        {
          link:'Contacto',
          name: 'Contact',
          icon:'fas fa-phone-volume'
        }
      
    ]
  },
  mutations: {

    formatPrice(value){
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
     },
    


    // keeps track of the index of the price from selected to disable prices below this index in the priceTo options
    disablePriceAndYear(state,data){
       
       if(data.clickedFieldContent.id == 'priceFrom'){
         state.priceUnavailable = data.key
       }
      
    },
    
     //  array of prices
    getPriceRange(state){
      let priceRange=[];
      let lowestPrice = 4000;
      let highestPrice = 60000;
      for(let i = lowestPrice; i<= highestPrice; i += 1000){
        priceRange.push(i)
      }
      state.priceFrom.type =  priceRange
      state.priceTo.type =  priceRange
     
    },
     // array of years
     getYearsRange(state){
      let yearsRange = [];
       let startYear = 1970;
       let currentYear = new Date().getFullYear();
       for (let i = startYear; i<= currentYear+1; i++){
           yearsRange.unshift(i)
       }
       state.yearFrom.type = yearsRange
       state.yearTo.type = yearsRange
     },
    
    clearPropsVal(state){
      state.make.typeSelected = ''
      state.models.typeSelected = ''
      state.priceFromSelected = ''
      state.priceToSelected = ''
      state.yearFromSelected = ''
      state.yearToSelected = ''
      state.carTypeSelected = ''
      state.carConditionSelected = ''
      state.fuelTypeSelected = ''
      state.driveTrainSelected = ''
      state.colorSelected = ''

    },
   
  toggleMobileMenu(state){
    state.mobileMenuToggler = !state.mobileMenuToggler
  },
   
    toggleModal(state){
     
        state.modalToggler = !state.modalToggler
        state.mobileMenuToggler = false
       
    },

    // togggles on and off to show the card with the options  of the selected field
    toggleOptionsCard(state,e){
      if(e.target.classList.contains('selected-field-options') || e.target.classList.contains('selected-field-options-card-content') || e.target.classList.contains('search-fields-container-field')){
        state.optionsCardToggler = !state.optionsCardToggler      
      }

    },
    closeSelectionCard(state,e){
      if(e.target.classList.contains('modal-clear-card-content') || e.target.classList.contains('search-fields-container-field')){

        state.modalToggler = false
        
      }
      
    },
    // determines which content card will be display according to which search field is clicked on in the mobile view
    whichFieldContent(state,field){
      state.fieldContent = field.id

    
    },
   
    assignValueToTypeSelected(state,data){
     
        let selectedDataField =[
          state.make,
          state.models,
          state.fuel,
          state.transmission,
          state.driveTrain,
          state.engine,
          state.color,
        ]
        selectedDataField.forEach(one =>{
          if(one.id == data.id){
            one.typeSelected = data.$event.target.value
          }
        })
    },
    // receives the id of the clicked field, compares it to the id of car description data to decide which content to show in the card
    showSelectedFieldContent(state,id){
      let contentToShow = [
        state.make,
        state.models,
        state.priceFrom,
        state.priceTo,
        state.yearFrom,
        state.yearTo,
        state.carType,
        state.carCondition,
        state.fuel,
        state.transmission,
        state.driveTrain,
        state.engine,
        state.color
      ]

      contentToShow.forEach(one =>{
        if(one.id == id){
          state.clickedFieldContent = one
        }
        
      })
      
    
      
    },
    // selects the car models to show according to the make selected

    // selectModelByMake(state,data){
     
    //   if(data.id == 'make'){  
    //     state.carsData.forEach(one =>{
    //       if(state.make.typeSelected == one.make){
    //         state.models.typeSelected = `All ${one.make}`
    //         state.models.type = one.model.map(one =>{
    //           return one.name
    //         })
    //       } 
    //     })
    //   } 
    //   if(data.id == 'model'){
    //     state.models.typeSelected = data.$event.currentTarget.textContent
        
    //   }
    // },


    selectPriceAndYear(state,data){
      let priceYear=
      [
        state.priceFrom,
        state.priceTo,
        state.yearFrom,
        state.yearTo
      ]
      priceYear.forEach(one =>{
        if (one.id == data.clickedFieldContent.id){
          one.typeSelected = data.$event.currentTarget.textContent
        }
      })
    }
      
  },
  actions: {
 
    getCarsSelectionData(context){
      const carSelectionUrl = 'http://localhost:3000/car_selection';
      fetch(carSelectionUrl)
      .then(response => response.json())
      .then(data => {
        
        context.state.carsData = data
        context.state.carsData.forEach(one =>{
        context.state.make.type.push(one.make)
        })
      })
      .catch(err =>{
        console.log(err)
      })   
    },

  },
  modules: {
  },

  getters:{
  

  }
})
