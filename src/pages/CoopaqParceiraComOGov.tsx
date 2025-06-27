import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import imageNews from '../assets/SementesParaCooperados/01.jpeg';
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

import IMG_1 from '../assets/SementesParaCooperados/02.jpeg';
import IMG_2 from '../assets/SementesParaCooperados/03.jpeg';
import IMG_3 from '../assets/SementesParaCooperados/04.jpeg';
import IMG_4 from '../assets/SementesParaCooperados/05.jpeg';
import IMG_5 from '../assets/SementesParaCooperados/06.jpeg';
import IMG_6 from '../assets/SementesParaCooperados/07.jpeg';
import IMG_7 from '../assets/SementesParaCooperados/08.jpeg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
  { src: IMG_7, altText: '', key: 7, href: '' },

];

function CoopaqParceiraComOGov() {

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
          <p className='pt-5 mb-0'><em>⏲️ 08/04/2025</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>Coopaq em parceria com o Governo do Estado Distribui sementes para cooperados</h1>
          <p className='fs-6 text-justify text-center fst-italic'>Parceria visa fortalecer a agricultura local e impulsionar a economia</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>A Coopaq, em parceria com o governo do Estado, está realizando a entrega de sementes para agricultores familiares cooperados por meio do Programa Planta Alagoas. Até o fim de semana serão distribuídas cerca de 5 toneladas de sementes de milho e feijão, beneficiando cerca de 300 cooperados de assentamentos, acampamentos e fazendas.</p>
                <p>A iniciativa visa apoiar o plantio, garantir a segurança alimentar e impulsionar a economia local. O valor das sementes distribuídas supera R$ 100.000,00, caso a Coopaq não atuasse como intermediadora. Isso demonstra o compromisso do programa em apoiar a agricultura local.</p>
                <p>As sementes são de alta qualidade e desenvolvidas em Alagoas, garantindo que os agricultores tenham acesso a variedades adaptadas às condições climáticas e de solo da região. A distribuição ocorre em tempo hábil para o plantio, visando à colheita no segundo semestre.</p>
              </div>
            </div>
            
          </div>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect} className='mx-auto'>
                {items.map((item, index) => (
                  <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
                    <img loading='lazy' className='d-flex w-100' src={item.src} alt={item.altText} style={{ maxHeight: '600px', cursor: 'pointer', objectFit: 'contain' }} />
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

export default CoopaqParceiraComOGov;
