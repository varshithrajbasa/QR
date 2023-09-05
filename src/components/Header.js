import { Link } from "react-router-dom";
const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            QR Code Generator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {routes.map((route) => {
                return (<li className="nav-item" key={route.name}>
                  <Link className="nav-link generate" to={route.path}>
                    {route.name}
                  </Link>
                </li>);
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
