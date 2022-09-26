import ReactDOM from "react-dom/client";
import App from "App";
import { ThemeProvider } from "context/ThemeContext";
import { FilterProvider } from "context/FilterContext";
import { CountriesProvider } from "context/CountriesContext";

/* create and render root element */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <FilterProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </FilterProvider>
  </ThemeProvider>
);
