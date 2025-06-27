import { useState } from 'react';
import logoCOOPAQ from '../../assets/ELEMENTOS COOPAQ/LOGO_COOPAQ1378.png';
import '../../styles/Navbar.css';

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 navbar navbar-expand-lg navbar-light bg-COOPAQ-green-white font-demibold">
      <a className="navbar-brand" href="/">
        <img src={logoCOOPAQ} alt="Logo COOPAQ" className="logoNavBar" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto justify-content-center text-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="NossaHistoria">
              Nossa História
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="NossosProjetos">
              Nossos projetos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="AgroIndústria">
              Agroindústria
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="Diretoria">
              Diretoria
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="https://www.instagram.com/coopaqal/">
              Mídia Externa
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
