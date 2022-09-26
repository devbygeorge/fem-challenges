import { useContext } from "react";
import FilterContext from "context/FilterContext";

import "./Search.scss";

function Search() {
  const { params, setParams } = useContext(FilterContext);

  const changeValue = (e) => {
    setParams((params) => {
      return {
        region: params.region,
        name: e.target.value,
      };
    });
  };

  return (
    <div className="search">
      <i className="far fa-search"></i>
      <input
        type="text"
        value={params.name || ""}
        onChange={changeValue}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Search;
