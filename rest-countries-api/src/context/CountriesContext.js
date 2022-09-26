import { createContext, useState, useEffect, useContext } from "react";
import FilterContext from "context/FilterContext";
import { fetchCountries } from "util/fetchData";

const CountriesContext = createContext(null);

export function CountriesProvider({ children }) {
  const { params } = useContext(FilterContext);

  const [originalData, setOriginalData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (!originalData) {
      fetchCountries().then((response) => {
        setOriginalData(response.data);
        setFilteredData(response.data);
      });
    } else {
      setFilteredData(() => {
        return originalData.filter(
          (country) =>
            country.name.common.toLowerCase().includes(params.name.toLowerCase()) &&
            country.region.includes(params.region)
        );
      });
    }
  }, [params, originalData]);

  return (
    <CountriesContext.Provider value={{ data: filteredData }}>
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContext;
