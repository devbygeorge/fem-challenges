import CountryDetails from "component/CountryDetails";

import { fetchCountry } from "util/fetchData";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Innerpage() {
  let navigate = useNavigate();

  let { countryCode } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCountry(countryCode).then((response) => {
      setData(response.data[0]);
    });
    console.log('fetches')
  }, [countryCode]);

  return (
    <main className="main">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-button">
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <CountryDetails data={data} />
      </div>
    </main>
  );
}

export default Innerpage;
