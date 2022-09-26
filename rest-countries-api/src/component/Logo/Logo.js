import { useContext } from "react";
import { Link } from "react-router-dom";
import FilterContext from "context/FilterContext";

import "./Logo.scss";

function Logo() {
  const { cleanParams } = useContext(FilterContext);

  return (
    <Link onClick={cleanParams} to="/" className="logo">
      <h1>Where in the world?</h1>
    </Link>
  );
}

export default Logo;
