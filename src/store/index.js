
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
    msg:true,
    
    carsData:[],
    dealersData:[],
    vehiclesDisplay:[],
    allModels:[],
    testNums:[],
    // receives the data of the clicked car
    carToView:{},
    carToViewGeneralInfo:[],
    carToViewDetails:[],
    carToViewHistory:[],
    carToViewDealer:{},

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
      type:[],
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
      type:['I4','V6','V8'],
      typeSelected:'',
    },
    color:{
      id:'color',
       type:[],
      typeSelected:'',
    },
    typeOfCar: 'All Vehicles',
    clickedFieldContent:{},

    desktopNav:[

        {
          link:'Home',
          name:'Home', 
          icon:'fas fa-home',
          
      },
        {
          link:'Vehicles',
          name:'searchResults', 
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

    // when the app is created, this function get the data  that is at the moment in the  searchResults prop in local storage and sets it to the vehicleDisplay prop that is in the state. this allows the data to stay rendered when the page is reloaded.
    setDataInVehiclesDisplayFromLocal(state){
        state.vehiclesDisplay = JSON.parse(localStorage.getItem('searchResults'))
    },
    // gets colors of every car available to be displayed in the colors dropdown filter. 
    //this way we only show options of colors that are actually available
    getAvailableColors(state){
      let colors = JSON.parse(localStorage.getItem('allModels')).map(one => one.colorEx)
      let nonDuplicate = {}

      for(let i = 0; i < colors.length; i++){
     
          if(nonDuplicate[colors[i]] == colors[i]){
            continue;
          }else{
            nonDuplicate[colors[i]] = i
          }
        
      }
     state.color.type = Object.keys(nonDuplicate)
      
    },
    set_typeOfCar(state,val){
     state.typeOfCar = val
    },
    filterByRadioBtn(state,e){
     state.vehiclesDisplay = state.allModels.filter(one => {
      if(e.target.value === 'All Vehicles'){
        return state.allModels
      }else{
        return one.fuel.toLowerCase().includes(e.target.value.toLowerCase())
      }
     })
  
    },

   
    searchVehicles(state){
      let results = state.allModels

      if(state.carCondition.typeSelected !== ''){
        results = results.filter(one => one.carCondition === state.carCondition.typeSelected) 
      }
      if(state.fuel.typeSelected !== ''){
        results = results.filter(one => one.fuel === state.fuel.typeSelected) 
      }
      // included this else here to search for all vehicles in the checkbox on desktop view side bar search
      else if(state.fuel.typeSelected === 'All Vehicles'){
        results = state.allModels
      }
      if(state.transmission.typeSelected !== ''){
        results = results.filter(one => one.transmission === state.transmission.typeSelected) 
      }
      if(state.driveTrain.typeSelected !== ''){
        results = results.filter(one => one.driveTrain === state.driveTrain.typeSelected) 
      }
      if(state.engine.typeSelected !== ''){
        results = results.filter(one => {
          if(one.engine != undefined && one.engine.toLowerCase().includes(state.engine.typeSelected.toLowerCase())){
            return one
          }
        }) 
      }
      
      if(state.color.typeSelected !== ''){
        results = results.filter(one => one.colorEx === state.color.typeSelected)
      }
      if(state.carType.typeSelected !== ''){
        results = results.filter(one => one.carType === state.carType.typeSelected)
      }
      if(state.priceFrom.typeSelected != 0){
        results = results.filter(one => one.price >= state.priceFrom.typeSelected)
        
      }
      if(state.priceTo.typeSelected != 0){
        results = results.filter(one => one.price <= state.priceTo.typeSelected)
       
      }
      if(state.yearFrom.typeSelected != 0){
        results = results.filter(one => one.year >= state.yearFrom.typeSelected)
       
      }
      if(state.yearTo.typeSelected != 0){
        results = results.filter(one => one.year <= state.yearTo.typeSelected)
      }
      if(state.make.typeSelected != ''){
        results = results.filter(one => one.make === state.make.typeSelected)
      }
      if(state.models.typeSelected != '' && state.models.typeSelected != `All ${state.make.typeSelected}`){
        results = results.filter(one => one.model === state.models.typeSelected)
      }
     
     
      localStorage.setItem('searchResults',JSON.stringify(results))
 
    },
    searchByUserInput(state,e){
     let val = e.target.value
     state.vehiclesDisplay = state.allModels.filter(one =>{
      return one.make.toLowerCase().includes(val.trim().toLowerCase()) ||
       one.model.toLowerCase().includes(val.trim().toLowerCase()) ||
       one.carType.toLowerCase().includes(val.trim().toLowerCase()) 
          
     })
     if(val === ''){
      state.vehiclesDisplay = state.allModels
     }
    },

 selectElectricCars(state,routeName){
       
       if(routeName == 'Electric'){
         let allModels = JSON.parse(localStorage.getItem('allModels'))

        state.vehiclesDisplay = allModels.filter(one => one.fuel =='Electric'|| one.fuel == 'Hybrid')
      }

    },
 selectDealerInventory(state,routeName){
       
       if(routeName == 'dealerInventory'){
        let inventory = JSON.parse(localStorage.getItem('carToViewDealer'))
        state.vehiclesDisplay = inventory.inventory
      }

    },
    // receive the data of the current car selected and saves it to local storage
    saveCarToViewToLocalStore(state,data){
      localStorage.setItem(data.name,JSON.stringify(data.data)) 
    },
    
     // get the data of current car from local storage and assigns it to the prop carToView.
     getCarToViewFromLocalStore(state){
      state.carToView = [JSON.parse(localStorage.getItem('carToView'))]
    }, 
    
    // saves all models availables to local storage when the app component is created
    saveAllModelsToLocal(state,data){
            // the nested loop gets all the models contained in the model array  of each car object
            
      let allModels = []
      data.data.forEach(one =>{
        one.model.forEach(one =>{
          allModels.push(one)
        })
      })
      localStorage.setItem('allModels',JSON.stringify(allModels))
    },
    // gets all models from local storage and set them in the state prop allModels when the app component is created
    getAllModelsFromLocal(state){
      state.allModels = JSON.parse(localStorage.getItem('allModels'))
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
    //gets the dealer according to the car selected
    saveCarToViewDealerToLocalS(state,dealerId){
      let dealer = state.dealersData.find(one => dealerId === one.dealerId)
      let dealerInventory = state.allModels.filter(one => one.dealerId === dealerId )
      dealer['inventory'] = dealerInventory
      if(localStorage.getItem('carToViewDealer') === null){
        localStorage.setItem('carToViewDealer',JSON.stringify(dealer))
       }else{
        localStorage.setItem('carToViewDealer',JSON.stringify(dealer))
       }
    },
    setCarToViewDealer(state){
      state.carToViewDealer = JSON.parse(localStorage.getItem('carToViewDealer'))
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
     if(data){

      state.carsData = data.data
     }
    },
    setDealersData(state,data){
      if(data){
        state.dealersData = data
      }
    },
    // receives the data object which contains the data of vehicles and and object with current route
    setMakes(state,data){
        data.data.forEach(one =>{
          state.make.type.push(one.make)
        })
        state.make.type.unshift(`All Makes`)

    },
   
//  shuffles the randomCarsDisplay array that displays the cars  in the vehicleDisplay component 
      shuffleHomeDisplayCars(state,data){

       if(data.funcAndRoute.route.name == 'Home'){

    //  fisher yates modern shuffle
         let arrLength = state.allModels.length,temp,ranNum;
      while(arrLength-- > 0){
       ranNum = Math.round(Math.random() * (arrLength + 1));
       temp = state.allModels[ranNum];
       state.allModels[ranNum] = state.allModels[arrLength]
       state.allModels[arrLength] = temp
      }
   
                state.vehiclesDisplay = state.allModels
               
              } 
              // else if(data.funcAndRoute.route.name == 'Vehicles'){
                
              //   state.vehiclesDisplay = JSON.parse(localStorage.getItem('allModels'))
                
              // }

        },
      
        // keeps track of the index of the priceFrom property selected, to disable prices below this index in the priceTo options
        disablePricesYears(state,data){
          if(data.id == 'priceFrom') state.pricesUnavailable = data.key
          if(data.id == 'yearFrom') state.yearsUnavailable = data.key
        },
        
        //  array of prices
        getPriceRange(state){
         let priceRange = JSON.parse(localStorage.getItem('allModels'))
         priceRange = priceRange.map(one => one.price)
         priceRange = [...new Set(priceRange)].sort((a,b) => a-b)
         state.priceFrom.type = priceRange
         state.priceTo.type =  priceRange
        },
        // array of years
        getYearsRange(state){
          let yearsRange = JSON.parse(localStorage.getItem('allModels'))
          yearsRange = yearsRange.map(one => one.year)
          yearsRange = [...new Set(yearsRange)].sort((a,b) => a-b)
          state.yearFrom.type = yearsRange
          state.yearTo.type =  yearsRange
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
          state.pricesUnavailable = null
          state.yearsUnavailable = null
          
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

    assignValueToTypeSelected(state,event){
    
      let allFields =[    
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
      
      
        let selectedField =  allFields.find(one => one.id.toLowerCase() === event.target.id.toLowerCase())
        //in mobile view the fields selections are textcontent of event target, they are in divs, in desktop view they are value of event target, they are in a select option tags


        if(selectedField.id === 'priceFrom' || selectedField.id === 'priceTo'){
               //since the price comes formatted as currency and is a string, had to remove "$" and "," with the replace method and regExp. also used parseFloat() to remove two decimal zeros and get just the whole number.
             
               selectedField.typeSelected = parseFloat(event.target.textContent.replace(/\$|,/g,'')) || parseFloat(event.target.value.replace(/\$|,/g,''))
         
        }else if(selectedField.id === 'yearFrom' || selectedField.id === 'yearTo'){
          selectedField.typeSelected = event.target.value || +event.target.textContent
        }
        
        else{

          selectedField.typeSelected = event.target.value || event.target.textContent
        }
       
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
        
        if(id == 'model' && state.make.typeSelected == '' || id == 'model' && state.make.typeSelected == 'All Makes' ){
          state.clickedFieldContent = {id: 'model' ,type:['Select Make First']}
        }
        else{

          state.clickedFieldContent  = contentToShow.find(one => one.id.toLowerCase() === id.toLowerCase())
           
        }
        
      },
      // selects the car models to show according to the make selected
      
      selectModelByMake(state,data){
        // console.log(state.model.type)
        if(data.id == 'make'){  
          state.carsData.forEach(one =>{
            if(state.make.typeSelected == one.make){
              state.models.typeSelected = `All ${one.make}`
              state.models.type = one.model.map(one =>{
                return one.model
              })
            } 
          })
          // adds the option (all makes) and puts it in the first position in the array 
          if(state.make.typeSelected != 'All Makes'){
            state.models.type.unshift(`All ${state.make.typeSelected}`)
          }else{
            state.models.typeSelected = `Models`
            state.models.type = ['Models']
          }
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
    // sorts the vehicles that are displaying
    sortBy(state,event){
       switch(event.target.value){
        case 'lowestPrice':
          state.vehiclesDisplay.sort((a,b) => a.price - b.price)
          break;
        case 'highestPrice':
          state.vehiclesDisplay.sort((a,b) => b.price - a.price)
          break;
        
        case 'lowestMileage':
          state.vehiclesDisplay.sort((a,b) =>{
            return (+a.miles.replace(/,/g,''))  - (+b.miles.replace(/,/g,''))
          } )
          break;

        case 'highestMileage':
          state.vehiclesDisplay.sort((a,b) =>{
            return (+b.miles.replace(/,/g,''))  - (+a.miles.replace(/,/g,''))
          } )
          break;

        case 'newest':
          state.vehiclesDisplay.sort((a,b) => b.year - a.year)
          break;
          
        case 'oldest':
          state.vehiclesDisplay.sort((a,b) => a.year - b.year)
          break;

          default: return;
       
        }
       
    },
     // dynamically sets available types of fuel, if new type of fuel is added, it will display it automatically
     setFuelType(state,routeName){
      let types = JSON.parse(localStorage.getItem('allModels')).map(one => one.fuel)
      let noDuplicates = {}
  
      for(let type of types){
      noDuplicates[type] = true
      }
      state.fuel.type = Object.keys(noDuplicates)
      if(routeName == 'searchResults'){
        state.fuel.type.unshift('All Vehicles')
      }
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

    getDealersData(context){
      let urlDealers ='http://localhost:3000/dealers' 
      fetch(urlDealers)
      .then(response => response.json())
      .then(data =>{
        context.commit('setDealersData',data)
      })
    }


  },
  modules: {
  },

  getters:{
    carsDataReady(state){
      return state.carsData 
    },
    carToViewComputed(state){
      return state.carToView
    },



  }
})
