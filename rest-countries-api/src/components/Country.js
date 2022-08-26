import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import './Country.css';

class Country extends React.Component {
  constructor() {
    super() 
    this.state = {
      country: []
    }
  }
  
  componentDidMount() {
    const country = this.props.match.params.country

    axios.get(`https://restcountries.com/v2/name/${country}`)
    .then(response => {

      this.setState((state) => ({ 
        ...state,
        country: response.data[0]
      }))
    })
    .catch(err => {
      console.log(err);
    })

  }

  render() {
    const { country } = this.state;

    return (
      <div className="container">
        <Link to="/" className="Button-Default">
          <i className="fas fa-arrow-left"></i> 
          Back
        </Link>

        <div className="Country">
          <img src={country.flag} alt={country.name} />

          <div className="Country-Info">
            <h2>{country.name}</h2>

                
                  <div className="Country-Details">
                    <h4><span>Native Name: </span> {country.name} </h4>
                    <h4><span>Population: </span> {country.population} </h4>
                    <h4><span>Region: </span> {country.region} </h4>
                    <h4><span>Sub Region: </span> {country.subregion} </h4>
                    <h4><span>Capital: </span> {country.capital} </h4>
                    <h4><span>Top Level Domain: </span> {country.topLevelDomain} </h4>
                    <h4>
                      <span>Currencies: </span> 
                      <ul>
                        {country.currencies && country.currencies.map((curreny) => (
                          <li key={curreny.name}>{curreny.name}</li>
                        ))} 
                      </ul>
                    </h4>
                    <h4>
                      <span>Languages: </span> 
                      <ul>
                        {country.languages && country.languages.map((language) => (
                          <li key={language.name}>{language.name}</li>
                        ))} 
                      </ul>
                    </h4>
                  </div>


                  <div className="Country-Borders">
                    <span>Border Countries: </span>
                    <ul>
                      {country.borders && country.borders.map((border) => (
                        <li key={border} >{border}</li>
                      ))} 
                    </ul>   
                  </div>


          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(Country)