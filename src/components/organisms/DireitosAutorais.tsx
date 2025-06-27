import '../../styles/DireitosAutorais.css';

function DireitosAutorais() {
  return (
    <footer className="tamFonte13px bg-COOPAQ-gray padding-top-30px text-COOPAQ-white font-regular direitos-css d-flex justify-content-center align-items-center">
      <div className='container'>
        <div className="row">
          <div className="col-md-4 text-start mb-2 mb-md-0">
            <span className="d-block text-center text-md-start">2024 COOPAQ - Todos os Direitos Reservados</span>
          </div>
          <div className="col-md-4 text-center mb-2 mb-md-0">
            <span className="d-block text-center">Política de Privacidade | Política de Cookies</span>
          </div>
          <div className="col-md-4 text-end">
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="https://www.instagram.com/coopaqal?igsh=bmdrajQ2YmQybTh4" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram me-2"></i></a>
              <a href="https://www.facebook.com/coopaq.co" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook me-2"></i></a>
              <a href="https://www.youtube.com/@COOPAQAL" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube me-2"></i></a>
              <a href="" target="_blank" rel="noopener noreferrer"><i className="bi bi-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DireitosAutorais;
