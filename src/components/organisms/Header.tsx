import imagemLogo from '../../assets/ELEMENTOS COOPAQ/LOGO_BOTAO1377.png'
import imagemSlogan from '../../assets/ELEMENTOS COOPAQ/LOGO_SLOGAN1376.png'

import '../../styles/Header.css'

function Header() {
  return (
    <div className='border-bottom'>
      {/* <div className='containerHeader container-fluid d-flex align-items-center justify-content-between'> */}
      <div className='containerHeader container-fluid d-flex align-items-center justify-content-around'>
        {/* <div className='bg-COOPAQ-gray h-100 font-extrabold language d-grid align-items-center text-center py-2'>
          <div className='text-COOPAQ-white'>PT</div>
          <div className='text-COOPAQ-white'>EN</div>
        </div> */}
        <a href="/" className='ancora-COOPAQ-slogam'>
          <img src={imagemSlogan} alt="Slogan" className='slogam-COOPAQ'/>
        </a>
        <div className='menu justify-content-end text-end'>
          <div className="text-end m-2 text-COOPAQ-gray d-flex justify-content-end">
            <a href="https://www.instagram.com/coopaqal?igsh=bmdrajQ2YmQybTh4" target="_blank"><i className="bi bi-instagram me-2"></i></a>
            <a href="https://www.facebook.com/coopaq.co" target="_blank"><i className="bi bi-facebook me-2"></i></a>
            <a href="https://www.youtube.com/@COOPAQAL" target="_blank"><i className="bi bi-youtube me-2"></i></a>
            <a href="" target="_blank"><i className="bi bi-tiktok"></i></a>
          </div>
          <div className="no-underline d-flex flex-row font-regular">
            <a className="me-4" href='nossahistoria'>Nossa História</a>
            <a className="me-4" href='nossosprojetos'>Nossos projetos</a>
            <a className="me-4" href='agroindústria'>Agroindústria</a>
            <a className="me-4" href='diretoria'>Diretoria</a>
            <a className='' href='https://www.instagram.com/coopaqal/' target='_blank'>Mídia Externa</a>
          </div>
        </div>
        <a href="/" className='ancora-COOPAQ-logo bg-COOPAQ-green-white'>
          <img src={imagemLogo} alt="LOGO COOPAQ" className='logo-COOPAQ' />
        </a>
      </div>
    </div>
  );
}

export default Header;
