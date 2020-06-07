//1.0 get a hold to the form
const cityForm = document.querySelector("form");

//1.14 add the variable that will grab the card and details classes from the respective divs
//in other words this two divs <div class="card shadow-lg rounded"> and <div class="text-muted text-uppercase text-center details">
const card = document.querySelector(".card");
const details = document.querySelector(".details");
//1.24 get a hold to the clases for the images to change the icons
//1.24.1 we are getting a hold to this <img src="https://via.placeholder.com/400x300" class="time card-img-top" />
const time = document.querySelector("img.time");
//1.24.2 and we are getting a hold to this <div class="icon bg-light mx-auto text-center">
const icon = document.querySelector(".icon img");

//1.16 create the updateUI
const updateUI = (data) => {
	//1.19
	// const cityDetails = data.cityDetails;
	//1.20
	// const weatherDetails = data.weatherDetails;
	console.log(data);

	//1.23 another way to write 1.19 and 1.20 combined is by doing this
	const { cityDetails, weatherDetails } = data;

	//1.21 update the template details
	details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
	    <span>${weatherDetails.Temperature.Metric.Value}</span>
	    <span>&deg;C</span>
    </div>
    `;

	//1.27 updte the weather icon
	const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
	icon.setAttribute("src", iconSrc);

	//1.28 convert the if statement to a ternary operator
	let timeSrc = weatherDetails.IsDayTime ? "img/day.svg" : "img/night.svg";

	//1.25 upadate the night / day & icon images
	//1.25.1 change the day icon by creating a conditional statement
	// let timeSrc = null;
	// if (weatherDetails.IsDayTime) {
	// timeSrc = "img/day.svg";
	// } else {
	// timeSrc = "img/night.svg";
	// }
	//1.26 set the time attritube to change the picture
	time.setAttribute("src", timeSrc);

	//1.22 involves 2 steps first add the d-none class to the div in the html and remove it here
	//basically add it here on this line <div class="card shadow-lg rounded"> on the html
	if (card.classList.contains("d-none")) {
		card.classList.remove("d-none");
	}
};

//1.5
const updateCity = async (city) => {
	//1.7 test the code by loging back to the console the cities we use
	//console.log(city);//1.8 comment this out
	const cityDetails = await getCity(city); //1.9 start calling the city function

	//1.10 call the getWeather function
	const weatherDetails = await getWeather(cityDetails.Key);

	//1.11 return the values ro cityDetails and weatherDeatils
	return {
		cityDetails: cityDetails,
		weatherDetails: weatherDetails,
	};

	//1.13 since the property and value are the same like above
};

//1.1 create the event listener
cityForm.addEventListener("submit", (event) => {
	//1.2 prevent the default action to refresh the page after submitting information
	event.preventDefault();

	//1.3 get city value from what the form input field
	const city = cityForm.city.value.trim();
	//1.4 resetting the iput field to empty to submit new information
	cityForm.reset();

	//updathe the input with new city //1.6//1.12 add the update and catch methods
	updateCity(city)
		.then((data) => updateUI(data)) //1.18
		//.then((data) => console.log(data))//1.17 comment this out and replace it with 1.18
		.catch((err) => console.log(err));

	//creating the local storage
	//1.29 store the information we enter to the local storage
	localStorage.setItem("ultimaciudad", city);
});

if (localStorage.getItem("ultimaciudad")) {
	updateCity(localStorage.getItem("ultimaciudad"))
		.then((data) => updateUI(data))
		.catch((err) => console.log(err));
}
//ternary operator example

const valor = true ? "value 1" : "value 2 ";
console.log(valor);

const valor1 = false ? "value 1" : "value 2 ";
console.log(valor1);
