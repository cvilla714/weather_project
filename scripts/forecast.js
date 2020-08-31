//1.0 create the variable to store the API key //1.21 new key becaus i exceeded the amount allowed
// const key = "yLusZeOGNvWJKaXAtPTDaAg5kGAZxSe2";
// const key = "NA8O9d35RAnIA5zrVlNy25ojR1LnsHea";
//new key as off 7/10/2020

const key = "Fa1tORczSKnflphuiPFCKU303Z04wWn9";
const getWeather = async (locationid) => {
  const baseWeather = "https://dataservice.accuweather.com/currentconditions/v1/";
  const queryWeather = `${locationid}?apikey=${key}`;
  const responseWeather = await fetch(baseWeather + queryWeather);
  const dataWeather = await responseWeather.json();
  return dataWeather[0];
};

const getCity = async (city) => {
  const baseCity = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const queryCity = `?apikey=${key}&q=${city}`;
  const responseCity = await fetch(baseCity + queryCity);
  const dataCity = await responseCity.json();
  return dataCity[0];
};
