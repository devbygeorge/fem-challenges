import axios from "axios";

export function fetchCountries() {
  return axios
    .get(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,ccn3"
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function fetchCountry(country) {
  return axios
    .get(`https://restcountries.com/v3.1/alpha/${country}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
