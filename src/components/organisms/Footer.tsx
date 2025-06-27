import Image from '../../assets/ELEMENTOS COOPAQ/LOGO_COOPAQ1378.png';
import '../../styles/Footer.css';

function Footer() {
  return (
    <div className='footer-css'>
      <footer className='bg-COOPAQ-green-white text-COOPAQ-white'>
        <div className='container d-flex flex-wrap justify-content-between tamFonte13px'>

          <div className='col-md-6 col-lg-4 container-logo-info align-items-start gap-3 '>
            <div className='col'>
              <a href="/" className='ancora-COOPAQ-Footer'>
                <img src={Image} alt="LOGO COOPAQ" className='footer-logo p-2'/>
              </a>
            </div>
            <div className='container'>
              <div className="row">
                  <div className="col">
                      <div className="info-container d-flex flex-column justify-content-between p-2"  style={{ width: '295px'}}>
                          <div>
                              <div className="address col me-2">
                                  <i className="bi bi-geo-alt-fill me-2 custom-color-black"></i>             
                                  <div>
                                      <a href="https://maps.app.goo.gl/j4CfX2kG299i6gQGA" target='blank' className='no-underline text-COOPAQ-white'>Rodovia AL 105 Norte, Distrito Industrial</a>
                                      <div>Matriz do Camaragibe - AL</div>
                                      <div>CEP 57.910-000</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="info-container d-flex flex-column justify-content-between p-2" style={{ width: '180px'}}>
                          <div>
                              <div className="contact col m-2">
                                <i className="bi bi-envelope-fill me-2 custom-color-black"></i>
                                <a href="mailto:recepcaocontato@coopaq.co" className='no-underline text-COOPAQ-white'>recepcaocontato@coopaq.co</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-8 container-logo-menu align-items-center gap-3'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='row m-2'>
                  <a href='/NossaHistoria' className='text-COOPAQ-green-black no-underline'>Nossa História</a>
                  <a href='/NossaHistoria' className='text-COOPAQ-white no-underline'>Onde tudo começou</a>
                  <a href='/NossaHistoria' className='text-COOPAQ-white no-underline'>Onde estamos</a>
                  <a href='/NossaHistoria' className='text-COOPAQ-white no-underline'>Nosso compromisso</a>
                </div>
                <div className='row m-2'>
                  <a href="/AgroIndústria" className='no-underline text-COOPAQ-green-black'>A Agroindústria</a>
                  <a href="/AgroIndústria" className='no-underline text-COOPAQ-white'>Sobre a Camaragibe</a>
                  <a href="/AgroIndústria" className='no-underline text-COOPAQ-white'>Sobre os produtos</a>
                  <a href="/AgroIndústria" className='no-underline text-COOPAQ-white'>Sustentabilidade</a>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row m-2'>
                  <a href='/NossosProjetos' className='no-underline text-COOPAQ-green-black'>Nossos Projetos</a>
                  <a href='/NossosProjetos' className='no-underline text-COOPAQ-white'>Projeto Coqueirais</a>
                  <a href='/NossosProjetos' className='no-underline text-COOPAQ-white'>Música Cooperada</a>
                  <a href='/NossosProjetos' className='no-underline text-COOPAQ-white'>Comunidade MatrizDelas</a>
                  <a href='/NossosProjetos' className='no-underline text-COOPAQ-white'>Mulheres de Fé</a>
                </div>
                <div className='row m-2'>
                  <a href="https://www.instagram.com/coopaqal?igsh=bmdrajQ2YmQybTh4" target='blank' className='no-underline text-COOPAQ-green-black'>Mídia Externa</a>
                  <a href="https://www.instagram.com/coopaqal?igsh=bmdrajQ2YmQybTh4" target='blank' className='no-underline text-COOPAQ-white'>Notícias</a>
                  <a href="https://www.instagram.com/coopaqal?igsh=bmdrajQ2YmQybTh4" target='blank' className='no-underline text-COOPAQ-white'>Vídeos</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
