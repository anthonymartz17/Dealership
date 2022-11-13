import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// Global
		searchMobileModal: false,
		modalToggler: false,
		optionsCardToggler: false,
		searchBtnPosition: false,
		fieldContent: null,
		msg: true,

		carsData: [],
		dealersData: [],
		vehiclesDisplay: [],
		allModels: [],
		// receives the data of the clicked car
		carToView: {},
		carToViewGeneralInfo: [],
		carToViewDetails: [],
		carToViewHistory: [],
		carToViewDealer: {},
		// sidebarsearch component
		inputTextUser: "",
		dropDownErrorMsg: "",
		showDropDownTextField: false,
		// End sidebarsearch component
		pricesUnavailable: null,
		yearsUnavailable: null,

		//Search mobile component

		searchMobileModalContent: null,

		// endPoints
		endPoints: {
			carsUrl: "http://localhost:3000/car_selection",
			dealersUrl: "http://localhost:3000/dealers",
			carsInventoryUrl: "http://localhost:3000/cars_inventory",
		},

		// mobile nav links
		mobileMenuToggler: false,

		// filter props
		filters: {
			make: {
				id: "make",
				type: [],
				typeSelected: "",
			},
			models: {
				id: "model",
				type: [],
				typeSelected: "",
			},
			priceFrom: {
				id: "priceFrom",
				type: [],
				typeSelected: 0,
			},
			priceTo: {
				id: "priceTo",
				type: [],
				typeSelected: 0,
			},
			yearFrom: {
				id: "yearFrom",
				type: [],
				typeSelected: 0,
			},
			yearTo: {
				id: "yearTo",
				type: [],
				typeSelected: 0,
			},
			carType: {
				id: "carType",
				type: [],
				typeSelected: "",
			},
			carCondition: {
				id: "condition",
				type: [],
				typeSelected: "",
			},
			fuel: {
				id: "fuel",
				type: [],
				typeSelected: "",
			},
			transmission: {
				id: "transmission",
				type: [],
				typeSelected: "",
			},
			driveTrain: {
				id: "driveTrain",
				type: [],
				typeSelected: "",
			},
			engine: {
				id: "engine",
				type: ["I4", "V6", "V8"],
				typeSelected: "",
			},
			color: {
				id: "color",
				type: [],
				typeSelected: "",
			},
		},
		// ends filter props

		typeOfCar: "All Vehicles",
		clickedFieldContent: {},

		desktopNav: [
			{
				link: "Home",
				name: "Home",
				icon: "fas fa-home",
			},
			{
				link: "Vehicles",
				name: "searchResults",
				icon: "fas fa-car",
				subList: [
					"Carros",
					"Motores",
					"Barcos",
					"Vehiculos Pesados",
					"Otros",
				],
			},
			{
				link: "Electric Cars",
				name: "Electric",
				icon: "fas fa-charging-station",
			},
			{
				link: "Contacto",
				name: "Contact",
				icon: "fas fa-phone-volume",
			},
		],
	},
	mutations: {
		// when the app is created, this function get the data  that is at the moment in the  searchResults prop in local storage and sets it to the vehicleDisplay prop that is in the state. this allows the data to stay rendered when the page is reloaded.
		setDataInVehiclesDisplayFromLocal(state) {
			state.vehiclesDisplay = JSON.parse(
				localStorage.getItem("searchResults")
			);
		},

		set_typeOfCar(state, val) {
			state.typeOfCar = val;
		},
		filterByRadioBtn(state, e) {
			state.vehiclesDisplay = state.allModels.filter((one) => {
				if (e.target.value === "All Vehicles") {
					return state.allModels;
				} else {
					return one.fuel
						.toLowerCase()
						.includes(e.target.value.toLowerCase());
				}
			});
		},

		searchVehicles(state) {
			let results = state.allModels;

			if (state.filters.carCondition.typeSelected !== "") {
				results = results.filter(
					(one) =>
						one.carCondition === state.filters.carCondition.typeSelected
				);
			}
			if (state.filters.fuel.typeSelected !== "") {
				results = results.filter(
					(one) => one.fuel === state.filters.fuel.typeSelected
				);
			}
			// included this else here to search for all vehicles in the checkbox on desktop view side bar search
			else if (state.filters.fuel.typeSelected === "All Vehicles") {
				results = state.allModels;
			}
			if (state.filters.transmission.typeSelected !== "") {
				results = results.filter(
					(one) =>
						one.transmission === state.filters.transmission.typeSelected
				);
			}
			if (state.filters.driveTrain.typeSelected !== "") {
				results = results.filter(
					(one) => one.driveTrain === state.filters.driveTrain.typeSelected
				);
			}
			if (state.filters.engine.typeSelected !== "") {
				results = results.filter((one) => {
					if (
						one.engine != undefined &&
						one.engine
							.toLowerCase()
							.includes(state.filters.engine.typeSelected.toLowerCase())
					) {
						return one;
					}
				});
			}

			if (state.filters.color.typeSelected !== "") {
				results = results.filter(
					(one) => one.colorEx === state.filters.color.typeSelected
				);
			}
			if (state.filters.carType.typeSelected !== "") {
				results = results.filter((one) =>
					one.carType
						.toLowerCase()
						.includes(
							state.filters.carType.typeSelected.toLowerCase().trim()
						)
				);

				state.inputTextUser = state.filters.carType.typeSelected;
			}
			if (state.filters.priceFrom.typeSelected != 0) {
				results = results.filter(
					(one) => one.price >= state.filters.priceFrom.typeSelected
				);
			}
			if (state.filters.priceTo.typeSelected != 0) {
				results = results.filter(
					(one) => one.price <= state.filters.priceTo.typeSelected
				);
			}
			if (state.filters.yearFrom.typeSelected > 0) {
				results = results.filter(
					(one) => one.year >= state.filters.yearFrom.typeSelected
				);
			}
			if (state.filters.yearTo.typeSelected > 0) {
				results = results.filter(
					(one) => one.year <= state.filters.yearTo.typeSelected
				);
			}
			if (state.filters.make.typeSelected != "") {
				results = results.filter((one) =>
					one.make
						.toLowerCase()
						.includes(
							state.filters.make.typeSelected.toLowerCase().trim()
						)
				);
			}

			if (
				state.filters.models.typeSelected != "" &&
				state.filters.models.typeSelected !=
					`All ${state.filters.make.typeSelected}`
			) {
				results = results.filter((one) =>
					one.model
						.toLowerCase()
						.includes(
							state.filters.models.typeSelected.toLowerCase().trim()
						)
				);
			}

			localStorage.setItem("searchResults", JSON.stringify(results));
		},
		// toggleDropDownTextField(state) {
		// 	state.showDropDownTextField = false;
		// },
		//prepares user type in input on side search to be used in mutation assignValueToTypeSelected
		searchByInputText(state, e) {
			state.inputTextUser = e.target.value;
			if (state.inputTextUser == "") {
				state.vehiclesDisplay = JSON.parse(
					localStorage.getItem("allModels")
				);
				state.filters.make.typeSelected = "";
				state.filters.carType.typeSelected = "";
				state.dropDownErrorMsg = "";
				state.filters.models.type = [];
				state.showDropDownTextField = false;
			} else {
				state.filters.models.type = state.allModels.filter((one) => {
					switch (state.inputTextUser.toLowerCase()) {
						case one.make.toLowerCase():
							state.filters.make.typeSelected = one.make;
							return one;
						case one.model.toLowerCase():
							state.filters.make.typeSelected = one.make;
							return one;
						case one.carType.toLowerCase():
							state.filters.carType.typeSelected = one.carType;
							return one;
						default:
							return;
					}
				});

				if (state.filters.models.type.length == 0) {
					state.dropDownErrorMsg = " Invalid Make | Model | Type";
				} else {
					state.dropDownErrorMsg = "";
				}

				if (e.target.id === "userInputId")
					state.showDropDownTextField = true;
			}
		},
		// clears invalid input error  and resets the dropdown visibility to false on sidebarsearch componet text input. this happens on a blur event
		clearDropDownErrorMsg(state) {
			state.dropDownErrorMsg = "";
			state.showDropDownTextField = false;
		},

		selectElectricCars(state, routeName) {
			if (routeName == "Electric") {
				let allModels = JSON.parse(localStorage.getItem("allModels"));

				state.vehiclesDisplay = allModels.filter(
					(one) => one.fuel == "Electric" || one.fuel == "Hybrid"
				);
			}
		},
		selectDealerInventory(state, routeName) {
			if (routeName == "dealerInventory") {
				let inventory = JSON.parse(localStorage.getItem("carToViewDealer"));
				state.vehiclesDisplay = inventory.inventory;
			}
		},
		// receive the data of the current car selected and saves it to local storage
		saveCarToViewToLocalStore(state, data) {
			localStorage.setItem(data.name, JSON.stringify(data.data));
		},

		// get the data of current car from local storage and assigns it to the prop carToView.
		getCarToViewFromLocalStore(state) {
			state.carToView = [JSON.parse(localStorage.getItem("carToView"))];
		},

		// saves all models availables to local storage when the app component is created
		saveAllModelsToLocal(state, vehicles) {
			// the nested loop gets all the models contained in the model array  of each car object
			let allModels = [];
			vehicles.forEach((one) => {
				one.model.forEach((one) => {
					allModels.push(one);
				});
			});
			localStorage.setItem("allModels", JSON.stringify(allModels));
		},
		// gets all models from local storage and set them in the state prop allModels when the app component is created
		getAllModelsFromLocal(state) {
			state.allModels = JSON.parse(localStorage.getItem("allModels"));
		},

		// receives the data of the current car to view and sets the specifications in the setCarToViewGeneralInfo prop that is  in the state.
		setCarToViewGeneralInfo(state) {
			let owner, ownerIcon, fuelIcon, milesIcon;
			if (state.carToView[0].owner == 0) {
				owner = "Never owned";
				ownerIcon = "owner.svg";
			}
			if (state.carToView[0].owner == 1) {
				owner = `${state.carToView[0].owner} owner`;
				ownerIcon = "owner.svg";
			}
			if (state.carToView[0].owner == 2) {
				ownerIcon = "owners2.svg";
			}
			if (state.carToView[0].owner > 2) {
				owner = `${state.carToView[0].owner} owners`;
				ownerIcon = "ownersMany.svg";
			}

			if (state.carToView[0].fuel == "Electric") {
				fuelIcon = "battery.svg";
				milesIcon = "electricMiles.svg";
			} else {
				fuelIcon = "gas.svg";
				milesIcon = "mpg.svg";
			}

			state.carToViewGeneralInfo = [
				{
					icon: "miles.svg",
					iconInfo: `${state.carToView[0].miles} Miles`,
				},
				{
					icon: "transmission.svg",
					iconInfo: state.carToView.transmission,
				},
				{icon: "drivetrain.svg", iconInfo: state.carToView[0].driveTrain},
				{icon: "engine.svg", iconInfo: state.carToView[0].engine},
				{icon: fuelIcon, iconInfo: state.carToView[0].fuel},
				{icon: milesIcon, iconInfo: `${state.carToView[0].mileage} MPG`},
				{icon: "excolor.svg", iconInfo: state.carToView[0].colorEx},
				{icon: "incolor.svg", iconInfo: state.carToView[0].colorIn},
				{icon: ownerIcon, iconInfo: owner},
			];
		},

		setCarToviewDetails(state) {
			state.carToViewDetails = [
				{key: "Location", val: state.carToView[0].location},
				{key: "Engine", val: state.carToView[0].engine},
				{key: "Miles", val: state.carToView[0].miles},
				{key: "MPG", val: state.carToView[0].mileage},
				{key: "Fuel", val: state.carToView[0].fuel},
				{key: "transmission", val: state.carToView[0].transmission},
				{key: "Car type", val: state.carToView[0].carType},
				{key: "Drivetrain", val: state.carToView[0].driveTrain},
				{key: "Color Exterior", val: state.carToView[0].colorEx},
				{key: "Color Interior", val: state.carToView[0].colorIn},
				{key: "Vin", val: state.carToView[0].vin},
			];
		},
		//gets the dealer according to the car selected
		saveCarToViewDealerToLocalS(state, dealerId) {
			let dealer = state.dealersData.find(
				(one) => dealerId === one.dealerId
			);
			let dealerInventory = state.allModels.filter(
				(one) => one.dealerId === dealerId
			);
			dealer["inventory"] = dealerInventory;
			if (localStorage.getItem("carToViewDealer") === null) {
				localStorage.setItem("carToViewDealer", JSON.stringify(dealer));
			} else {
				localStorage.setItem("carToViewDealer", JSON.stringify(dealer));
			}
		},
		setCarToViewDealer(state) {
			state.carToViewDealer = JSON.parse(
				localStorage.getItem("carToViewDealer")
			);
		},

		// receives the data of the current car to view and sets the car history of the current vehicle in the carToViewHistory prop that is in the state.
		setVehicleHistory(state) {
			let owner,
				accidents,
				titleCheck,
				iconOwner,
				bgOwner,
				bgAccidents,
				bgTitle;

			if (state.carToView[0].owner == 0) {
				owner = "Never owned";
				bgOwner = "green";
				iconOwner = "fas fa-user";
			} else if (state.carToView[0].owner == 1) {
				owner = "One owner";
				bgOwner = "green";
				iconOwner = "fas fa-user";
			} else {
				owner = `${state.carToView[0].owner} onwers`;
				bgOwner = "#333";
				iconOwner = "fas fa-users";
			}

			if (state.carToView[0].accidents == 0) {
				accidents = "No issues reported";
				bgAccidents = "green";
			} else if (state.carToView[0].accidents == 1) {
				accidents = "One accident reported";
				bgAccidents = "#FFCC1D";
			} else {
				accidents = `${state.carToView[0].accidents} accidents reported`;
				bgAccidents = "#FFCC1D";
			}

			if (state.carToView[0].titleCheck == "No issues") {
				titleCheck = "No issues reported";
				bgTitle = "green";
			} else {
				titleCheck = state.carToView[0].titleCheck;
				bgTitle = "#FFCC1D";
			}

			state.carToViewHistory = [
				{
					key: "Owners",
					val: owner,
					icon: iconOwner,
					iconBg: bgOwner,
				},
				{
					key: "Accidents",
					val: accidents,
					icon: "fas fa-car",
					iconBg: bgAccidents,
				},
				{
					key: "Title check",
					val: titleCheck,
					icon: "far fa-check-square ",
					iconBg: bgTitle,
				},
			];
		},

		setCarsData(state, vehicles) {
			if (vehicles) {
				state.carsData = vehicles;
			}
		},
		setDealersData(state, data) {
			if (data) {
				state.dealersData = data;
			}
		},
		//  shuffles the vehicleDisplay array
		shuffleHomeDisplayCars(state) {
			let shuffledCars = JSON.parse(localStorage.getItem("allModels"));
			let arrLength = shuffledCars.length,
				temp,
				ranNum;
			while (arrLength-- > 0) {
				ranNum = Math.round(Math.random() * (arrLength + 1));
				temp = shuffledCars[ranNum];
				shuffledCars[ranNum] = shuffledCars[arrLength];
				shuffledCars[arrLength] = temp;

				state.vehiclesDisplay = shuffledCars;
			}
		},

		// keeps track of the index of the priceFrom property selected, to disable prices below this index in the priceTo options
		disablePricesYears(state, data) {
			if (data.id == "priceFrom") state.pricesUnavailable = data.key;
			if (data.id == "yearFrom") state.yearsUnavailable = data.key;
		},
		//sets the content in every array named 'type' of every filter prop object.
		setItemsInArrayOfEveryPropType(state) {
			let content = JSON.parse(localStorage.getItem("allModels"));

			state.filters.make.type = [
				"All Makes",
				...new Set(content.map((one) => one.make)),
			];
			state.filters.priceFrom.type = [
				...new Set(content.map((one) => one.price)),
			].sort((a, b) => a - b);
			state.filters.priceTo.type = [
				...new Set(content.map((one) => one.price)),
			].sort((a, b) => a - b);
			state.filters.yearFrom.type = [
				...new Set(content.map((one) => one.year)),
			].sort((a, b) => a - b);
			state.filters.yearTo.type = [
				...new Set(content.map((one) => one.year)),
			].sort((a, b) => a - b);
			state.filters.carType.type = [
				...new Set(content.map((one) => one.carType)),
			];
			state.filters.carCondition.type = ["New/Used", "New", "Used"];
			state.filters.fuel.type = [...new Set(content.map((one) => one.fuel))];
			state.filters.transmission.type = [
				...new Set(content.map((one) => one.transmission)),
			];
			state.filters.driveTrain.type = [
				...new Set(content.map((one) => one.driveTrain)),
			];
			state.filters.color.type = [
				...new Set(content.map((one) => one.colorEx)),
			].sort();
		},

		clearFilters(state) {
			state.filters.make.typeSelected = "";
			state.filters.models.typeSelected = "";
			state.filters.priceFrom.typeSelected = 0;
			state.filters.priceTo.typeSelected = 0;
			state.filters.yearFrom.typeSelected = 0;
			state.filters.yearTo.typeSelected = 0;
			state.filters.carType.typeSelected = "";
			state.filters.carCondition.typeSelected = "";
			state.filters.fuel.typeSelected = "";
			state.filters.transmission.typeSelected = "";
			state.filters.driveTrain.typeSelected = "";
			state.filters.engine.typeSelected = "";
			state.filters.color.typeSelected = "";
			state.filters.inputTextUser = "";
			state.filters.pricesUnavailable = null;
			state.filters.yearsUnavailable = null;

			// after clearing all props, all models are loaded to be displayed as default
			state.vehiclesDisplay = JSON.parse(localStorage.getItem("allModels"));
		},

		clearPropsVal(state) {
			state.filters.make.typeSelected = "";
			state.filters.models.typeSelected = "";
			state.filters.priceFrom.typeSelected = 0;
			state.filters.priceTo.typeSelected = 0;
			state.filters.yearFrom.typeSelected = 0;
			state.filters.yearTo.typeSelected = 0;
			state.filters.carType.typeSelected = "";
			state.filters.carCondition.typeSelected = "";
			state.filters.fuel.typeSelected = "";
			state.filters.transmission.typeSelected = "";
			state.filters.driveTrain.typeSelected = "";
			state.filters.engine.typeSelected = "";
			state.filters.color.typeSelected = "";
			state.filters.pricesUnavailable = null;
			state.filters.yearsUnavailable = null;
		},

		toggleMobileMenu(state) {
			state.mobileMenuToggler = !state.mobileMenuToggler;
		},

		// togggles on and off to show the card with the options  of the selected field
		toggleOptionsCard(state, e) {
			if (
				e.target.classList.contains("selected-field-options") ||
				e.target.classList.contains(
					"selected-field-options-card-content"
				) ||
				e.target.classList.contains("search-fields-container-field")
			) {
				state.optionsCardToggler = !state.optionsCardToggler;
			}
		},
		closeSelectionCard(state, e) {
			if (
				e.target.classList.contains("modal-clear-card-content") ||
				e.target.classList.contains("search-fields-container-field")
			) {
				state.modalToggler = false;
			}
		},
		// determines which content card will be display according to which search field is clicked on in the mobile view
		whichFieldContent(state, field) {
			state.fieldContent = field.id;
		},

		assignValueToTypeSelected(state, event) {
			let filters = Object.values(state.filters);

			let selectedField = filters.find(
				(one) => one.id.toLowerCase() === event.target.id.toLowerCase()
			);
			//in mobile view the fields selections are textcontent of event target because  they are divs. In desktop the fields selections are value of event target, they come from inputs

			// checks to use event.target.value
			if (event.type == "input") {
				if (
					(selectedField.id === "priceFrom" ||
						selectedField.id === "priceTo") &&
					event.target.value
				) {
					selectedField.typeSelected = parseFloat(
						event.target.value.replace(/\$|,/g, "")
					);
				} else if (
					(selectedField.id === "priceFrom" ||
						selectedField.id === "priceTo") &&
					!event.target.value
				) {
					selectedField.typeSelected = 0;
				} else {
					selectedField.typeSelected = event.target.value;
				}
			}
			// checks to use event.target.textcontent, instead
			else {
				if (
					(selectedField.id === "priceFrom" ||
						selectedField.id === "priceTo") &&
					event.target.textContent
				) {
					selectedField.typeSelected = parseFloat(
						event.target.textContent.replace(/\$|,/g, "")
					);
				} else if (
					(selectedField.id === "priceFrom" ||
						selectedField.id === "priceTo") &&
					!event.target.textContent
				) {
					selectedField.typeSelected = 0;
				} else {
					selectedField.typeSelected = event.target.value;
				}
			}
		},

		// receives the id of the clicked field, compares it to the id of car description data to decide which content to show in the card
		updateClickedFieldContent(state, id) {
			let filters = Object.values(state.filters);
			if (
				(id == "model" && state.filters.make.typeSelected == "") ||
				(id == "model" && state.filters.make.typeSelected == "All Makes")
			) {
				state.clickedFieldContent = {
					id: "model",
					type: ["Select Make First"],
				};
			} else {
				state.clickedFieldContent = filters.find(
					(one) => one.id.toLowerCase() === id.toLowerCase()
				);
			}
		},
		// selects the car models to show according to the make selected

		selectModelByMake(state, data) {
			if (data.id == "make") {
				state.carsData.forEach((one) => {
					if (state.filters.make.typeSelected == one.make) {
						state.filters.models.typeSelected = `All ${one.make}`;
						state.filters.models.type = one.model.map((one) => {
							return one.model;
						});
					}
				});
				// adds the option (all makes) and puts it in the first position in the array
				if (state.filters.make.typeSelected != "All Makes") {
					state.filters.models.type.unshift(
						`All ${state.filters.make.typeSelected}`
					);
				} else {
					state.filters.models.typeSelected = `Models`;
					state.filters.models.type = ["Models"];
				}
			}
			// assigns val of clicked field in model card content to the type selected
			if (data.id == "model") {
				state.filters.models.typeSelected =
					data.$event.currentTarget.textContent;
			} else {
				return;
			}
		},

		selectPriceAndYear(state, data) {
			let priceYear = [
				state.filters.priceFrom,
				state.filters.priceTo,
				state.filters.yearFrom,
				state.filters.yearTo,
			];
			priceYear.forEach((one) => {
				if (one.id == data.clickedFieldContent.id) {
					one.typeSelected = data.$event.currentTarget.textContent;
				}
			});
		},
		// sorts the vehicles that are displaying
		sortBy(state, event) {
			switch (event.target.value) {
				case "lowestPrice":
					state.vehiclesDisplay.sort((a, b) => a.price - b.price);
					break;
				case "highestPrice":
					state.vehiclesDisplay.sort((a, b) => b.price - a.price);
					break;

				case "lowestMileage":
					state.vehiclesDisplay.sort((a, b) => {
						return (
							+a.miles.replace(/,/g, "") - +b.miles.replace(/,/g, "")
						);
					});
					break;

				case "highestMileage":
					state.vehiclesDisplay.sort((a, b) => {
						return (
							+b.miles.replace(/,/g, "") - +a.miles.replace(/,/g, "")
						);
					});
					break;

				case "newest":
					state.vehiclesDisplay.sort((a, b) => b.year - a.year);
					break;

				case "oldest":
					state.vehiclesDisplay.sort((a, b) => a.year - b.year);
					break;

				default:
					return;
			}
		},
	},

	actions: {
		//fetches the cars data, then commits mutations in charge of setting data in the state.
		async getCarsData({commit, state}) {
			try {
				const response = await fetch(state.endPoints.carsUrl);
				const vehicles = await response.json();

				commit("setCarsData", vehicles);
				// commit("setMakes", vehicles);
				commit("saveAllModelsToLocal", vehicles);
				commit("getAllModelsFromLocal");
				commit("setItemsInArrayOfEveryPropType");
			} catch (error) {
				console.log(error);
			}
		},

		async getDealersData({commit, state}) {
			try {
				const response = await fetch(state.endPoints.dealersUrl);
				const carDealers = await response.json();

				commit("setDealersData", carDealers);
			} catch (error) {
				console.log(error);
			}
		},
	},

	getters: {
		carsDataReady(state) {
			return state.carsData;
		},
		carToViewComputed(state) {
			return state.carToView;
		},
	},
});
