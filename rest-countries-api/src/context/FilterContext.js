import { createContext, useState } from "react";

const FilterContext = createContext({
  params: {
    region: "",
    name: "",
  },
  setParams: () => {},
  cleanParams: () => {},
});

export function FilterProvider({ children }) {
  const [params, setParams] = useState({
    region: "",
    name: "",
  });

  const cleanParams = () => {
    setParams({
      region: "",
      name: "",
    });
  };

  return (
    <FilterContext.Provider value={{ params, setParams, cleanParams }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
