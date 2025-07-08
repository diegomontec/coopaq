import { useState } from 'react';
import imagemLogo from '../../assets/ELEMENTOS COOPAQ/LOGO_BOTAO1377.png';
import imagemSlogan from '../../assets/ELEMENTOS COOPAQ/LOGO_SLOGAN1376.png';
import '../../styles/Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="border-bottom px-lg-5">
      <div className="containerHeader container-fluid d-flex align-items-center justify-content-between">
        <a href="/" className="ancora-COOPAQ-slogam">
          <img src={imagemSlogan} alt="Slogan" className="slogam-COOPAQ" />
        </a>

        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`menu d-none d-md-block`}>
          <div className="text-end m-2 text-COOPAQ-gray d-flex justify-content-end">
            <a
              href="https://www.instagram.com/coopaqal"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram me-2"></i>
            </a>
            <a
              href="https://www.facebook.com/coopaq.co"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook me-2"></i>
            </a>
            <a
              href="https://www.youtube.com/@COOPAQAL"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-youtube me-2"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
          <div className="no-underline d-flex flex-row font-regular">
            <a className="me-4" href="/nossahistoria">
              Nossa História
            </a>
            <a className="me-4" href="/nossosprojetos">
              Nossos projetos
            </a>
            <a className="me-4" href="/agroindustria">
              Agroindústria
            </a>
            <a className="me-4" href="/diretoria">
              Diretoria
            </a>
            <a href="/midia-externa">Mídia Externa</a>
          </div>
        </div>

        <a
          href="/"
          className="ancora-COOPAQ-logo d-none d-md-flex bg-COOPAQ-green-white"
        >
          <img src={imagemLogo} alt="LOGO COOPAQ" className="logo-COOPAQ" />
        </a>
      </div>

      {menuAberto && (
        <div className="d-md-none bg-COOPAQ-green-white px-4">
          <div className="d-flex flex-column align-items-center py-3 font-regular">
            <a
              className="mb-2 text-white text-decoration-none"
              href="/nossahistoria"
            >
              Nossa História
            </a>
            <a
              className="mb-2 text-white text-decoration-none"
              href="/nossosprojetos"
            >
              Nossos projetos
            </a>
            <a
              className="mb-2 text-white text-decoration-none"
              href="/agroindustria"
            >
              Agroindústria
            </a>
            <a
              className="mb-2 text-white text-decoration-none"
              href="/diretoria"
            >
              Diretoria
            </a>
            <a
              className="mb-3 text-white text-decoration-none"
              href="/midia-externa"
            >
              Mídia Externa
            </a>

            <div className="d-flex justify-content-center">
              <a
                className="text-white text-decoration-none me-3"
                href="https://www.instagram.com/coopaqal"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a
                className="text-white text-decoration-none me-3"
                href="https://www.facebook.com/coopaq.co"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a
                className="text-white text-decoration-none me-3"
                href="https://www.youtube.com/@COOPAQAL"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a
                className="text-white text-decoration-none"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-tiktok fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
