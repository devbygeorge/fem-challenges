import Search from "component/Search";
import Select from "component/Select";
import CountriesGrid from "component/CountriesGrid";

function Homepage({ filterParams, setFilterParams, filteredData }) {
  return (
    <div className="container">
      <div className="flex">
        <Search filterParams={filterParams} setFilterParams={setFilterParams} />
        <Select filterParams={filterParams} setFilterParams={setFilterParams} />
      </div>

      <CountriesGrid data={filteredData} />
    </div>
  );
}

export default Homepage;
