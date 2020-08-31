const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const updateUI = (data) => {
  console.log(data);
  const { cityDetails, weatherDetails } = data;

  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
	    <span>${weatherDetails.Temperature.Metric.Value}</span>
	    <span>&deg;C</span>
    </div>
    `;

  const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  let timeSrc = weatherDetails.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weatherDetails = await getWeather(cityDetails.Key);
  return {
    cityDetails: cityDetails,
    weatherDetails: weatherDetails,
  };
};

cityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
  localStorage.setItem("ultimaciudad", city);
});

if (localStorage.getItem("ultimaciudad")) {
  updateCity(localStorage.getItem("ultimaciudad"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
const valor = true ? "value 1" : "value 2 ";
console.log(valor);
const valor1 = false ? "value 1" : "value 2 ";
console.log(valor1);
