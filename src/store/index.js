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
    
    carsData:[],
    allModels:[],
    moreVehicles:false,
    randomCarsDisplay:[],
    testNums:[],

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
    pricesUnavailable:null,
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
    
  
    setCarsData(state,data){
        state.carsData = data
    },
    setMakes(state,data){
        data.forEach(one =>{
          state.make.type.push(one.make)
        })

    },
//  shuffles the randomCarsDisplay array that displays the cars  in the vehicleDisplay component 
    displayCarsRandomly(state,data){
     data.forEach(one =>{
       one.model.forEach(one =>{
          state.randomCarsDisplay.push(one)
       })
     })
    //  fisher yates modern shuffle
         let arrLength = state.randomCarsDisplay.length,temp,ranNum;
      while(arrLength-- > 0){
       ranNum = Math.round(Math.random() * (arrLength + 1));
       temp = state.randomCarsDisplay[ranNum];
       state.randomCarsDisplay[ranNum] = state.randomCarsDisplay[arrLength]
       state.randomCarsDisplay[arrLength] = temp
      }

        },
      
        // keeps track of the index of the priceFrom property selected, to disable prices below this index in the priceTo options
        disablePricesYears(state,data){
          
          if(data.clickedFieldContent.id == 'priceFrom'){
            state.pricesUnavailable = data.key
          }
          else  if(data.clickedFieldContent.id == 'yearFrom'){
            state.yearsUnavailable = data.key
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
          state.priceFrom.typeSelected = ''
          state.priceTo.typeSelected = ''
          state.yearFrom.typeSelected = ''
          state.yearTo.typeSelected = ''
          state.carType.typeSelected = ''
          state.carCondition.typeSelected = ''
          state.fuel.typeSelected = ''
          state.transmission.typeSelected = ''
          state.driveTrain.typeSelected = ''
          state.engine.typeSelected = ''
          state.color.typeSelected = ''
          
        },
        
        toggleMobileMenu(state){
          state.mobileMenuToggler = !state.mobileMenuToggler
        },
        showMoreVehicles(state,e){
          // if(this.$route.name == 'Vehicles'){

          // }
          if(state.moreVehicles == true){
            state.moreVehicles = false
            e.target.textContent ='+ More vehicles' 
          }          
          else{
            state.moreVehicles = true
            e.target.textContent ='- Show Less vehicles'
          }
          
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
        selectedDataField.forEach(one =>{
          if(one.id == data.id){
            one.typeSelected = data.$event.currentTarget.lastElementChild.value
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
        
        if(id == 'model' && state.make.typeSelected == ''){
          state.clickedFieldContent = {id: 'model' ,type:['Select Make First']}
        }
        else{

          contentToShow.forEach(one =>{
            
            if(one.id == id){
              state.clickedFieldContent = one
            }
            
          })
        }
        
      },
      // selects the car models to show according to the make selected
      
      selectModelByMake(state,data){
        
        if(data.id == 'make'){  
          state.carsData.forEach(one =>{
            if(state.make.typeSelected == one.make){
              state.models.typeSelected = `All ${one.make}`
              state.models.type = one.model.map(one =>{
                return one.model
              })
            } 
          })
        } 
      // assigns val of clicked field in model card content to the type selected
      if(data.id == 'model'){
        state.models.typeSelected = data.$event.currentTarget.textContent
        
      }
      else{
        return
      }
    },
    
    
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
    },
    
    
  },
  

  actions: {
    
    getCarsData(context,funToCommit){
      const carSelectionUrl = 'http://localhost:3000/car_selection';
      fetch(carSelectionUrl)
      .then(response => response.json())
      .then(data => {
        
        context.commit(funToCommit,data)
        
      })
        

      .catch(err =>{
        console.log(err)
      })   
      
    },


  },
  modules: {
  },

  getters:{
    carsDataReady(state){
      return state.carsData 
    },

 
    allModels(state,getters){ 
      let allModels=[];
      getters.carsDataReady.map(one =>{
        one.model.forEach(one =>{
          allModels.push(one)
        })
      })
      return allModels
    },


  }
})
