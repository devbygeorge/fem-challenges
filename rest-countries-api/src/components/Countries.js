import React from "react";
import { fetchCountries } from '../redux/actions/fetchCountries';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Search from './Search';
import Filter from './Filter';
import './Countries.css';

const mapStateToProps = props => ({
  countries: props.countries,
  searchValue: props.searchValue,
  region: props.region
});

const mapDispatchToProps = dispatch => ({
  fetchCountries: (data) => dispatch(fetchCountries(data))
});

class Countries extends React.Component {
  
  componentDidMount() {
    const { fetchCountries } = this.props;
    fetchCountries();
  }

  render() {
    const { countries, searchValue, region } = this.props;
    const filteredCountries = countries.data.slice(10).filter(country => {
      const countryNameLower = country.name.toLowerCase();
      const countryRegionLower = country.region.toLowerCase();
      const searchValueLower = searchValue.toLowerCase();
      const choosenRegionLower = region.toLowerCase();

      if(countryNameLower.includes(searchValueLower) && countryRegionLower.includes(choosenRegionLower)){
        return true
      }
      return false
    })

    return (
      <div className="Countries">
        <div className="container">
          
          <div className="Countries-Features">
            <Search />
            <Filter />
          </div>

          <div className="Countries-Wrapper">
            {filteredCountries.map(country => (
              <Link to={`/${country.name}`} key={country.name}>
                <img src={country.flag} alt={country.name} />
                <div className="Countries-Info">
                  <h2>{country.name}</h2>
                  <h3>
                    <span>Population: </span>
                    {country.population}
                  </h3>
                  <h3>
                    <span>Region: </span>
                    {country.region}
                  </h3>
                  <h3>
                    <span>Capital: </span>
                    {country.capital}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)