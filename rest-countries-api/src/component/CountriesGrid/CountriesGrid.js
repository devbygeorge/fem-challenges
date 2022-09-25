import { Link } from "react-router-dom";

import "./CountriesGrid.scss";

function CountriesGrid({ data }) {
  if (data === null) {
    return <div className="preloader"></div>;
  }

  return (
    <div className="countries-grid">
      {data.map((country) => {
        return (
          <Link to={country.ccn3} key={country.ccn3} className="country">
            <div className="country__img">
              <img
                src={country.flags.png}
                alt={country.name.common}
                loading="lazy"
                className="country__img"
              />
            </div>
            <div className="country__text">
              <h2 className="country__name">{country.name.common}</h2>
              <ul className="country__list">
                <li className="country__item">
                  <strong>Population: </strong>
                  <span>{country.population}</span>
                </li>
                <li className="country__item">
                  <strong>Region: </strong>
                  <span>{country.region}</span>
                </li>
                <li className="country__item">
                  <strong>Capital: </strong>
                  <span>{country.capital}</span>
                </li>
              </ul>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesGrid;
