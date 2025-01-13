import "./Navbar.css";

import {
  FavoriteBorderOutlinedIcon,
  ShoppingBagOutlinedIcon,
  ShoppingCartOutlinedIcon,
} from "../../Utils/Icons";

function Navbar() {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top px-4">
        <div className="container-fluid align-items-center">
          <a href="#intro" className="navbar-brand">
            <span className="fw-bold text-secondary">
              <img
                src="Ecospot-logo.png"
                alt="company logo"
                className="navbar-brand company-logo "
              />
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav align-items-center nav--content">
              <li className="nav-item me-2">
                <a href="#" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="#" className="nav-link text-white">
                  About Us
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="#" className="nav-link text-white">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <span>
                  <ShoppingBagOutlinedIcon className="text-white me-1 " />
                </span>
              </li>
              <li className="nav-item">
                <span>
                  <FavoriteBorderOutlinedIcon className="text-white" />
                </span>
              </li>
              <li className="nav-item">
                <span>
                  <ShoppingCartOutlinedIcon className="text-white" />
                </span>
              </li>

              <li className="nav-item d-md-none">
                <a href="#" className="nav-link text-white">
                  Pricing
                </a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline border-none">
                <a className="btn  btn-sm bg-white" href="#pricing">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
