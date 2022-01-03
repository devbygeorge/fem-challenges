import axios from 'axios';

export const fetchCountriesSuccess = (countries) => {
  return {
    type: 'FETCH_COUNTRIES_SUCCESS',
    payload: countries
  }
}

export const fetchCountriesFailure = (error) => {
  return {
    type: 'FETCH_COUNTRIES_FAILURE',
    payload: error
  }
}

export const fetchCountriesLoading = () => {
  return {
    type: 'FETCH_COUNTRIES_LOADING'
  }
}

export const fetchCountries = () => {
  return function(dispatch){
    dispatch(fetchCountriesLoading());
    axios.get('https://restcountries.com/v2/all?fields=name,capital,region,population,flag')
    .then(response => {
      dispatch(fetchCountriesSuccess(response.data));
    })
    .catch(err => {
      dispatch(fetchCountriesFailure(err.message));
    })

  }
}