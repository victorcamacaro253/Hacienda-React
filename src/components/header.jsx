//import './Header.css'; // import a separate CSS for Header if needed
/*
const Header = () => {
    return (
        <header className="text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo" style={{ marginTop: '30px' }}>
                    <img src="/src/assets/images/img5.1.png" alt="Logo" className="img-fluid" />
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/victor" className="nav-link text-white">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white">Info</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white" onClick={() => window.location.href = "/historia"}>Nuestra Historia</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white">Intranet</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;

*/

import { Link } from 'react-router-dom';

import logo from '/src/assets/images/img5.1.png'; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo" style={{ marginTop: '30px' }}>
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="victor.html" className="nav-link text-white">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white">Contacto</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white">Info</a>
                </li>
                <li className="nav-item">
                <Link to="/history" className="nav-link text-white">Nuestra Historia</Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white">Intranet</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;