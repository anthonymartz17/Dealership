import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Global
    searchMobileModal:false,
    modalToggler:false,
    optionsCardToggler:false,
    searchBtnPosition:false,
    fieldContent:null,
    
    carsData:[],
    // allModels:[],
    randomCarsDisplay:[],
    testNums:[],
    // receives the data of the clicked car
    carToView:{},
    carToViewGeneralInfo:[],
    carToViewDetails:[],
    carToViewHistory:[],

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
         'Pickup',
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
    // receive the data of the current car selected and saves it to local storage
    saveCarToViewToLocalStore(state,carToView){
      localStorage.setItem('carToView',JSON.stringify(carToView)) 
    },
    
     // get the data of current car from local storage and assigns it to the prop carToView.
     getCarToViewFromLocalStore(state){
      state.carToView = [JSON.parse(localStorage.getItem('carToView'))]
    }, 

    // receives the data of the current car to view and sets the specifications in the setCarToViewGeneralInfo prop that is  in the state.
    setCarToViewGeneralInfo(state){
      
      let owner,ownerIcon,fuelIcon,milesIcon;
      if(state.carToView[0].owner == 0){
        owner = 'Never owned'
        ownerIcon = 'owner.svg'
      }
      if(state.carToView[0].owner == 1){
        owner = `${state.carToView[0].owner} owner`
        ownerIcon = 'owner.svg'
      }if(state.carToView[0].owner == 2){
        ownerIcon = 'owners2.svg'
      }
      if(state.carToView[0].owner > 2){
        owner = `${state.carToView[0].owner} owners`
        ownerIcon = 'ownersMany.svg'
      }



      if(state.carToView[0].fuel == 'Electric'){
        fuelIcon = 'battery.svg'
        milesIcon = 'electricMiles.svg'

      }else{
        fuelIcon = 'gas.svg'
        milesIcon = 'mpg.svg'
      }

      

      state.carToViewGeneralInfo = [
        {icon:'miles.svg', iconInfo: `${state.carToView[0].miles} Miles`},
        {icon:'transmission.svg', iconInfo: state.carToView.transmission},
        {icon:'drivetrain.svg', iconInfo: state.carToView[0].driveTrain},
        {icon:'engine.svg', iconInfo: state.carToView[0].engine},
        {icon: fuelIcon, iconInfo: state.carToView[0].fuel},
        {icon:milesIcon, iconInfo: `${state.carToView[0].mileage} MPG`},
        {icon:'excolor.svg', iconInfo: state.carToView[0].colorEx},
        {icon:'incolor.svg', iconInfo: state.carToView[0].colorIn},
        {icon: ownerIcon, iconInfo: owner},
      ]
    },

  
    setCarToviewDetails(state){
      state.carToViewDetails = [
        {key:'Location', val: state.carToView[0].location},
        {key:'Engine', val: state.carToView[0].engine},
        {key:'Miles', val: state.carToView[0].miles},
        {key:'MPG', val: state.carToView[0].mileage},
        {key:'Fuel', val: state.carToView[0].fuel},
        {key:'transmission', val: state.carToView[0].transmission},
        {key:'Car type', val: state.carToView[0].carType},
        {key:'Drivetrain', val: state.carToView[0].driveTrain},
        {key:'Color Exterior', val: state.carToView[0].colorEx},
        {key:'Color Interior', val: state.carToView[0].colorIn},
        {key:'Vin', val: state.carToView[0].vin},
      ]
    },

    // receives the data of the current car to view and sets the car history of the current vehicle in the carToViewHistory prop that is in the state.
    setVehicleHistory(state){
      let owner,accidents,titleCheck,iconOwner,bgOwner,bgAccidents,bgTitle;

      if(state.carToView[0].owner == 0){
        owner = 'Never owned'
        bgOwner = 'green'
        iconOwner= 'fas fa-user'

      }
      else if(state.carToView[0].owner == 1){
        owner = 'One owner'
        bgOwner = 'green'
        iconOwner ='fas fa-user'
      }
      else{
        owner = `${state.carToView[0].owner} onwers`
        bgOwner = '#333'
        iconOwner = "fas fa-users"
      }

      if(state.carToView[0].accidents == 0){
        accidents = 'No issues reported'
        bgAccidents = 'green'

      }
      else if(state.carToView[0].accidents == 1){
        accidents = 'One accident reported'
        bgAccidents = '#FFCC1D'
      }
      else{
        accidents = `${state.carToView[0].accidents} accidents reported`
        bgAccidents = '#FFCC1D'
      }

      if(state.carToView[0].titleCheck == 'No issues'){
        titleCheck = 'No issues reported'
        bgTitle = 'green'

      }
      else{
        titleCheck = state.carToView[0].titleCheck 
        bgTitle = '#FFCC1D'
      }
      

      state.carToViewHistory = [
        {
          key:'Owners',
          val: owner,
          icon: iconOwner,
          iconBg:bgOwner
        },
        {
          key:'Accidents', 
          val: accidents, 
          icon:'fas fa-car', 
          iconBg:bgAccidents
        },
        {
          key:'Title check', 
          val: titleCheck, 
          icon:'far fa-check-square ', 
          iconBg:bgTitle
        },
      ]

    },
    
    setCarsData(state,data){
        state.carsData = data
    },
    // receives the data object which contains the data of vehicles and and object with current route
    setMakes(state,data){
        data.data.forEach(one =>{
          state.make.type.push(one.make)
        })

    },
    // ///////////////////////////////////////////  use the display cars randomly to decide the cars that you want to show whether electric, or the results from the filters //////////////////////////////////////////////////////////////////////
//  shuffles the randomCarsDisplay array that displays the cars  in the vehicleDisplay component 
    displayCarsRandomly(state,data){
      // console.log(data.funcAndRoute.route.name)
      let temporaryArray=[];
     data.data.forEach(one =>{
       one.model.forEach(one =>{
        temporaryArray.push(one)
       })
     })
    
       if(data.funcAndRoute.route.name == 'Home'){

    //  fisher yates modern shuffle
         let arrLength = temporaryArray.length,temp,ranNum;
      while(arrLength-- > 0){
       ranNum = Math.round(Math.random() * (arrLength + 1));
       temp = temporaryArray[ranNum];
       temporaryArray[ranNum] = temporaryArray[arrLength]
       temporaryArray[arrLength] = temp
      }
              
             
                state.randomCarsDisplay = temporaryArray
                // console.log(data.funcAndRoute.route.name)
              } 
              else if(data.funcAndRoute.route.name == 'Electric'){
                
                // console.log(data.funcAndRoute.route.name)
                state.randomCarsDisplay = temporaryArray
                
              }
              else{
                state.randomCarsDisplay = temporaryArray
                // console.log(data.funcAndRoute.route.name)

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
    
    getCarsData(context,funcAndRoute){
           
      const carSelectionUrl = 'http://localhost:3000/car_selection';
      fetch(carSelectionUrl)
      .then(response => response.json())
      .then(data => {
        
        // receiving function and current route object. to commit function and send route to the displaycarsramdomly function
        context.commit(funcAndRoute.funcToCommit,{data,funcAndRoute})
        
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
    carToViewComputed(state){
      return state.carToView
    }

 
    // allModels(state,getters){ 
    //   let allModels=[];
    //   getters.carsDataReady.map(one =>{
    //     one.model.forEach(one =>{
    //       allModels.push(one)
    //     })
    //   })
    //   return allModels
    // },


  }
})
