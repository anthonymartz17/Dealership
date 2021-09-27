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
    mobileMenuToggler:false,
    carSelection:null,
    make:'',
    makeSelected:'',
    models:'',
    modelSelected:'',
    priceFromSelected:0,
    priceToSelected:0,
    priceUnavailable:null,
    yearsUnavailable:null,
    yearFromSelected:0,
    yearToSelected:0,
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
       ]
      },
    carTypeSelected:'',
    carCondition:{id:'carCondition',condition:['Car Condition','New','Used']},
    carConditionSelected:'',
    fuelType:{id:'fuelType',type:['Gasoline','Diesel','Electric','Hybrid']},
    fuelTypeSelected:'',
    driveTrain:{id:'driveTrain', type:['RWD','FWD','AWD']},
    driveTrainSelected:'',
    color:{
      id:'color',
      color:[
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
      ]
    },
    colorSelected:'',

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
          link:'Contacto',
          name: 'Contact',
          icon:'fas fa-phone-volume'
        }
      
    ]
  },
  mutations: {
    // keeps track of the index of the price from selected to disable prices below this index in the priceTo options
    disablePrice(state,prices){
       state.priceUnavailable = prices
    },
    disableYears(state,years){
      state.yearsUnavailable = years
    },
    formatPrice(value){
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  },
  toggleMobileMenu(state){
    state.mobileMenuToggler = !state.mobileMenuToggler
  },
   
    toggleSelectionModal(state,e){
      if(e.target.classList.contains('modal-card-content') || e.target.classList.contains('modal') || e.target.classList.contains('search-fields-container-field')){

        state.selectionModalToggler = !state.selectionModalToggler
        
        
      }
      
    },
    // determines which content card will be display according to which search field is clicked on in the mobile view
    whichFieldContent(state,field){
      state.fieldContent = field.id
      console.log(state.fieldContent)
    },
    selectModelByMake(state,e){
      state.carSelection.forEach(one =>{
        if(e.currentTarget.firstElementChild.textContent == one.make){
           state.models = one.model
           state.modelSelected = `All ${one.make}`
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
 
    advanceSearchFieldsMobile(state){
      let make,model,priceFrom,priceTo,yearFrom,yearTo,carCondition,carType,fuelType,driveTrain,color;
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

      if(state.carTypeSelected == ''){
        carType = 'Car Type'
      }else{ 
        carType = state.cartypeSelected
      }

      if(state.carConditionSelected == ''){
        carCondition = 'Car Condition'
      }else{ 
        carCondition = state.carConditionSelected
      }

      if(state.fuelTypeSelected == ''){
        fuelType = 'Fuel Type'
      }else{ 
        fuelType = state.fuelTypeSelected
      }

      if(state.driveTrainSelected == ''){
        driveTrain = 'DriveTrain'
      }else{ 
        driveTrain = state.driveTrainSelected
      }
      if(state.colorSelected == ''){
        color = 'Color'
      }else{ 
        color = state.colorSelected
      }


      return [
        { name:make},{ name:model},{ name:priceFrom},
        { name:priceTo},{ name:yearFrom},{ name:yearTo}, 
        { name:carType},{ name:carCondition},{ name:fuelType}, 
        { name:driveTrain},{ name:color}
        
      ]

    }


  }
})
