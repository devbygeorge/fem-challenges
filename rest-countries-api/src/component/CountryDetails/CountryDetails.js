import "./CountryDetails.scss";

function CountryDetails({ data }) {
  if (data === null) {
    return <div className="preloader"></div>;
  }

  return (
    <div className="country-details">
      <div className="country-details__img">
        <img src={data.flags.svg} alt={data.name.common} />
      </div>
      <div className="country-details__text">
        <h2 className="country-details__name">{data.name.common}</h2>
        <ul className="country-details__list">
          <li className="country-details__item">
            <strong>Native Name: </strong>
            <span>{data.name.common}</span>
          </li>
          <li className="country-details__item">
            <strong>Capital: </strong>
            <span>{data.capital}</span>
          </li>
          <li className="country-details__item">
            <strong>Population: </strong>
            <span>{data.population}</span>
          </li>
          <li className="country-details__item">
            <strong>Top Level Domain: </strong>
            <span>{data.tld}</span>
          </li>
          <li className="country-details__item">
            <strong>Region: </strong>
            <span>{data.region}</span>
          </li>
          <li className="country-details__item">
            <strong>Currencies: </strong>
            <ul className="country-details__sublist">
              {Object.values(data.currencies).map((item) => (
                <li key={item.name} className="country-details__subitem">
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
          <li className="country-details__item">
            <strong>Sub Region: </strong>
            <span>{data.subregion}</span>
          </li>
          <li className="country-details__item">
            <strong>Languages: </strong>
            <ul className="country-details__sublist">
              {Object.values(data.languages).map((item) => (
                <li key={item} className="country-details__subitem">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {data.borders && (
          <div className="country-details__borders">
            <strong className="country-details__border-label">
              Border Countrires:
            </strong>
            <ul className="country-details__border-list">
              {data.borders.map((border) => (
                <li key={border} className="country-details__border-item">
                  {border}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
