import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import NoMatch from "./Pages/NoMatch/NoMatch";
import SubNavigation from "./Pages/SubNavigation/SubNavigation";
import { AirFreshener } from "./Pages/SubProduct/AirFreshener";
import Lamp from "./Pages/SubProduct/Lamp";
import Mirror from "./Pages/SubProduct/Mirror";

import { Routes, Route } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription/ProductDescription";

function App() {
  // const location = useLocation();
  // const hideLocation = ["/Lamp"];

  return (
    <div className="App footer">
      {/* {hideLocation.includes(location.pathname) ? "" : <SubNavigation />} */}
      <Navbar />
      <SubNavigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="AirFreshener" element={<AirFreshener />} />
        <Route path="AirFreshener/:id" element={<ProductDescription />} />
        <Route path="Lamp" element={<Lamp />} />
        <Route path="Lamp/:id" element={<ProductDescription />} />

        <Route path="Mirror" element={<Mirror />} />
        <Route path="Mirror/:id" element={<ProductDescription />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="productdes" element={<ProductDescription />} />
      </Routes>
      <div className="footer-align">
        <Footer />
      </div>
    </div>
  );
}

export default App;
