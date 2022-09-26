import Search from "component/Search";
import Select from "component/Select";
import CountriesGrid from "component/CountriesGrid";

function Homepage() {
  return (
    <main className="main">
      <div className="container">
        <div className="flex">
          <Search />
          <Select />
        </div>

        <CountriesGrid />
      </div>
    </main>
  );
}

export default Homepage;
