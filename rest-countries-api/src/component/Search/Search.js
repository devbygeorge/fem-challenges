import "./Search.scss";

function Search({ filterParams, setFilterParams }) {
  const changeValue = (e) => {
    setFilterParams((params) => {
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
        value={filterParams.name || ""}
        onChange={changeValue}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Search;
