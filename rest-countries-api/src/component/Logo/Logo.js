import { Link } from "react-router-dom";
import "./Logo.scss";

function Logo({ cleanFilterParams }) {
  return (
    <Link onClick={cleanFilterParams} className="logo" to="/">
      <h1>Where in the world?</h1>
    </Link>
  );
}

export default Logo;
