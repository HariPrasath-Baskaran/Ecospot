import "./Dropdown.css";

function Dropdown({ MainMenu, SubMenu }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light text-dark">
        <div class="container-fluid">
          <div className="container">
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}

            <ul class="navbar-nav text-sizing">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {MainMenu}
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {SubMenu.map((separateMenu) => (
                    <li>
                      <a class="dropdown-item" href="#">
                        {separateMenu}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Dropdown;
