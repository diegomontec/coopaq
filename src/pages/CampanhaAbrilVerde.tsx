import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import IMG_1 from '../assets/BreakingNewsCOOPAQ/IMG-1.jpg';
import IMG_2 from '../assets/BreakingNewsCOOPAQ/IMG-2.jpg';
import IMG_3 from '../assets/BreakingNewsCOOPAQ/IMG-3.jpg';
import IMG_4 from '../assets/BreakingNewsCOOPAQ/IMG-4.jpg'
import IMG_5 from '../assets/BreakingNewsCOOPAQ/IMG-5.jpg'
import IMG_6 from '../assets/BreakingNewsCOOPAQ/IMG-6.jpg'
import IMG_7 from '../assets/BreakingNewsCOOPAQ/IMG-7.jpg'

import imageNews from '../assets/BreakingNewsCOOPAQ/image.jpg'
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

const items = [
  {
    src: IMG_1,
    altText: '',
    key: 1,
    href: '',
  },
  {
    src: IMG_2,
    altText: '',
    key: 2,
    href: '',
  },
  {
    src: IMG_3,
    altText: '',
    key: 3,
    href: '',
  },
  {
    src: IMG_4,
    altText: '',
    key: 4,
    href: '',
  },
  {
    src: IMG_5,
    altText: '',
    key: 5,
    href: '',
  },
  {
    src: IMG_6,
    altText: '',
    key: 6,
    href: '',
  },
  {
    src: IMG_7,
    altText: '',
    key: 7,
    href: '',
  },
];

function CampanhaAbrilVerde() {

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  const handleItemClick = (itemIndex: number) => {
    if (items[itemIndex].href) {
      window.open(items[itemIndex].href, '_blank');
    }
  };

  return (
    <div>
      { isMobile ? <Navbar /> : <Header /> }
      <div className='container'>
        <div className='container-fluid font-regular'>
          <h1 className='fs-2 pt-5 text-COOPAQ-orange border-top text-center'>Coopaq e Camaragibe fazem Blit's dos EPI's,<br/> em alusão à Campanha Abril Verde</h1>
          <p className='fs-5 text-justify p-4 m-4'>O momento teve o objetivo de alertar e orientar os colaboradores sobre a segurança e bem-estar no ambiente de trabalho</p>
  
          <div className="row">
            <div className="col-md-6">
              <p className='fs-4 ps-5 text-COOPAQ-orange'>Decom, Coopaq</p>
              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Este mês acontece a Campanha Abril Verde, que tem o objetivo de disseminar e conscientizar os empregadores, trabalhadores e toda a população, sobre a prevenção, contra acidentes e doenças relacionadas ao trabalho.</p>
                <p>Nós da Coopaq e Camaragibe, nos preocupamos com o bem-estar dos nossos colaboradores e estamos atentos às mobilizações e práticas, que garantam um ambiente de trabalho seguro e saudável para os nossos trabalhadores.</p>
                <p>Por isso, em alusão à Campanha, nesta tarde (11), realizamos uma ação que faz parte da SIPAT - Semana Interna de Prevenção de Acidentes de Trabalho, na qual dedicamos um momento a uma atividade lúdica, visitando todos os setores do administrativo e da agroindústria,  com o intuito de promover conhecimento e conscientização sobre segurança e saúde no ambiente de trabalho, com todos os nossos colaboradores.</p>
                <p>O momento contou com a "Blitz dos EPI's", no qual os membros da nossa CIPA - Comissão Interna de Prevenção de Acidentes, visitaram os setores e fizeram distribuição de informativos com orientação e brindes.</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mt-5">
              <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '520px'}} />
            </div>
          </div>
          <div className='row justify-content-center'>
            {/* <div> */}
            <div className='col-9'>
              <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect} className='mx-auto'>
                {items.map((item, index) => (
                  <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
                    <img loading='lazy' className='d-block w-100' src={item.src} alt={item.altText} style={{ cursor: 'pointer' }} />
                  </CarouselItem>
                ))}
              </BootstrapCarousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <DireitosAutorais />
    </div>
  )
}

export default CampanhaAbrilVerde;
