/* react utilities import */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";

/* util & context import */
import ThemeContext from "context/ThemeContext";

// /* global styles import */
import "style/main.scss";

/* page & layout imports */
import Header from "component/Header";
import Homepage from "route/Homepage";
import Innerpage from "route/Innerpage";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"app " + theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:countryCode" element={<Innerpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
