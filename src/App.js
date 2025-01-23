import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import NoMatch from "./Pages/NoMatch/NoMatch";
import SubNavigation from "./Pages/SubNavigation/SubNavigation";
import {
  AirFreshener,
  Lamp,
  Mirror,
} from "./Pages/SubProduct/SubProductNavigate";
import ProductDescription from "./Components/ProductDescription/ProductDescription";
import ContactUs from "./Components/Contactus/ContactUs";
import Login from "./Components/Sign-In/login";
import CreateAccount from "./Components/Sign-In/CreateAccount";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

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
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/SignIn" element={<Login />}/>
        <Route path="/CreateAccount" element={<CreateAccount/>}/>
        <Route path="Shoppingcart" element={<ShoppingCart/>}/>
      </Routes>
      <div className="footer-align">
        <Footer />
      </div>

      {/* ######Testing surface##### */}

      {/* <Routes>
        <Route path="/airfreshener" element={<TestingFile />} />
        <Route path="/airfreshener/:id" element={<Testfile />} />
      </Routes> */}
    </div>
  );
}

export default App;
