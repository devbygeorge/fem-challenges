const initialState = {
  loading: false,
  data: [],
  error: ''
}

const fetchCountriesReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FETCH_COUNTRIES_SUCCESS': 
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'FETCH_COUNTRIES_FAILURE': 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'FETCH_COUNTRIES_LOADING': 
      return {
        ...state,
        loading: true,
      }
    default: 
      return state
  }

}
export default fetchCountriesReducer