import { combineReducers } from 'redux';

import changeThemeReducer from './changeTheme';
import changeRegionReducer from './changeRegion';
import changeFilterActiveReducer from './changeFilterActive';
import searchUpdateReducer from './searchUpdate';
import fetchCountriesReducer from './fetchCountries';

const allReducers = combineReducers({
  theme: changeThemeReducer,
  region: changeRegionReducer,
  isFilterActive: changeFilterActiveReducer,
  searchValue: searchUpdateReducer,
  countries: fetchCountriesReducer
})

export default allReducers