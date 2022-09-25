import { useState } from "react";
import "./Select.scss";

function Select({ filterParams, setFilterParams }) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((active) => !active);
  };

  const changeRegion = (e) => {
    setFilterParams((params) => {
      return {
        region: e.target.textContent,
        name: params.name,
      };
    });
  };

  return (
    <div onClick={toggleActive} className="select">
      <div className="select__label">
        <span>{filterParams.region || "Filter by region"}</span>
        <i className={`far fa-angle-${active ? "up" : "down"}`}></i>
      </div>
      <ul className={`select__list ${active && "active"}`}>
        <li onClick={changeRegion} className="select__item">
          Africa
        </li>
        <li onClick={changeRegion} className="select__item">
          Americas
        </li>
        <li onClick={changeRegion} className="select__item">
          Asia
        </li>
        <li onClick={changeRegion} className="select__item">
          Europe
        </li>
        <li onClick={changeRegion} className="select__item">
          Oceania
        </li>
      </ul>
    </div>
  );
}

export default Select;
