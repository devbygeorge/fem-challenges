import CountryDetails from "component/CountryDetails";

import { fetchCountry } from "util/fetchData";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Innerpage() {
  let { countryCode } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCountry(countryCode).then((response) => {
      setData(response.data[0]);
    });
  }, []);

  return (
    <div className="container">
      <Link to="/" className="back-button">
        <i className="fas fa-arrow-left"></i>
        Back
      </Link>
      <CountryDetails data={data} />
    </div>
  );
}

export default Innerpage;
