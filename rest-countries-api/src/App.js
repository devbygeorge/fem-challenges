/* utilities import */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import { fetchCountries } from "util/fetchData";
import { useState, useEffect } from "react";

// /* global styles import */
import "style/main.scss";

/* page & layout imports */
import Header from "component/Header";
import Homepage from "route/Homepage";
import Innerpage from "route/Innerpage";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  /*---------- temporary storage ---------*/
  const [originalData, setOriginalData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [filterParams, setFilterParams] = useState({
    region: "",
    name: "",
  });

  const cleanFilterParams = () => {
    setFilterParams({
      region: "",
      name: "",
    });
  };

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
            country.name.common.toLowerCase().includes(filterParams.name) &&
            country.region.includes(filterParams.region)
        );
      });
    }
  }, [filterParams, originalData]);
  /* ----------------------------------------- */

  return (
    <Router>
      <div className={"app " + theme}>
        <Header
          theme={theme}
          changeTheme={changeTheme}
          cleanFilterParams={cleanFilterParams}
        />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  filterParams={filterParams}
                  setFilterParams={setFilterParams}
                  filteredData={filteredData}
                />
              }
            />
            <Route path="/:countryCode" element={<Innerpage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
