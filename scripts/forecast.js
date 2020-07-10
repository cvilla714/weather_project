//1.0 create the variable to store the API key //1.21 new key becaus i exceeded the amount allowed
// const key = "yLusZeOGNvWJKaXAtPTDaAg5kGAZxSe2";
// const key = "NA8O9d35RAnIA5zrVlNy25ojR1LnsHea";
//new key as off 7/10/2020

const key = "Fa1tORczSKnflphuiPFCKU303Z04wWn9";

//1.11 get the Weather information by creating the function
const getWeather = async (locationid) => {
  //1.12 adding the variables to 2nd endpoint
  const baseWeather = "http://dataservice.accuweather.com/currentconditions/v1/";
  //1.13 adding the key to the end of the basewheather
  const queryWeather = `${locationid}?apikey=${key}`;

  //1.14 combining the base and query weather
  const responseWeather = await fetch(baseWeather + queryWeather);

  //1.15 add the variable to change the data from json format to array
  const dataWeather = await responseWeather.json();
  //1.16 log back to the console the weather information //1.17 comment 1.16 out
  // console.log(dataWeather);
  //1.18 return the data so we can use it
  return dataWeather[0];
};

//this is to get the City information
//1.1 create the promise function //1.4 add the city parameter
const getCity = async (city) => {
  //1.2 add the endpoint for fetching the API
  const baseCity = "http://dataservice.accuweather.com/locations/v1/cities/search";
  //1.3 add the apikey and for me not to hardcode it i will create a template
  const queryCity = `?apikey=${key}&q=${city}`;

  //1.5 create the promise we are fetching from this location url and combining the key and as well
  const responseCity = await fetch(baseCity + queryCity);
  //1.6 transform the data to arrays
  const dataCity = await responseCity.json();

  //1.7 log back to the console //1.9 get rider for console log and add return to get the promise
  // console.log(dataCity[0]);
  // console.log(dataCity.Key);
  return dataCity[0];
};
//1.20 this was the testing area i need to comment this whole block
//1.8 call back the function and adding the city we are looking for //1.10 add the .then and .catch methods
//getCity("manchester")
//1.19 insert the return getweather instead of console.log
//.then((dataCity) => console.log(dataCity))
//	.then((dataCity) => {
//		return getWeather(dataCity.Key);
//	})
//	.then((dataWeather) => {
//		console.log(dataWeather);
//	})
//	.catch((err) => console.log(err));
//
// getWeather("329260");
