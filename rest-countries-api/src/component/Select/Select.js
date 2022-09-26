import { useState, useContext } from "react";
import FilterContext from "context/FilterContext";

import "./Select.scss";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Select() {
  const [active, setActive] = useState(false);
  const { params, setParams } = useContext(FilterContext);

  const toggleActive = () => {
    setActive((active) => !active);
  };

  const changeRegion = (e) => {
    setParams((params) => {
      return {
        region: e.target.textContent,
        name: params.name,
      };
    });
  };

  return (
    <div onClick={toggleActive} className="select">
      <div className="select__label">
        <span>{params.region || "Filter by region"}</span>
        <i className={`far fa-angle-${active ? "up" : "down"}`}></i>
      </div>
      <ul className={`select__list ${active ? "active" : ""}`}>
        {regions.map((region) => (
          <li key={region} onClick={changeRegion} className="select__item">
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
