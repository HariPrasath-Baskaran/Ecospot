import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App footer">
      <Navbar />
      <Main />
      <div className="footer-align">
        <Footer />
      </div>
    </div>
  );
}

export default App;
