import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

/* import imageNews from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/capaNews.jpeg' */
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

import IMG_1 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.48(1).jpeg';
import IMG_2 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.48(2).jpeg';
import IMG_3 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.48(3).jpeg';
import IMG_4 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.49(1).jpeg';
import IMG_5 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.49(2).jpeg';
import IMG_6 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.49(3).jpeg';
import IMG_7 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.49.jpeg';
import IMG_8 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.50(1).jpeg';
import IMG_9 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.50(2).jpeg';
import IMG_10 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.50(3).jpeg';
import IMG_11 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.50.jpeg';
import IMG_12 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/WhatsApp Image 2025-06-14 at 09.18.51.jpeg';
import IMG_13 from '../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/capaNews.jpeg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
  { src: IMG_7, altText: '', key: 7, href: '' },
  { src: IMG_8, altText: '', key: 8, href: '' },
  { src: IMG_9, altText: '', key: 9, href: '' },
  { src: IMG_10, altText: '', key: 10, href: '' },
  { src: IMG_11, altText: '', key: 11, href: '' },
  { src: IMG_12, altText: '', key: 12, href: '' },
  { src: IMG_13, altText: '', key: 13, href: '' },
];


function MarceloBrilhante() {

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
          <p className='pt-5 mb-0'><em>⏲️ 16/06/2025</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE</h1>
          <p className='fs-6 text-justify text-center fst-italic'>O objetivo do programa é aumentar a performance do líderes da Coopaq e Camaragibe através de encontros</p>
  
          <div className="row">
            <div className="">
              { /* <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '500px'}} loading='lazy'/> 
              </div> */ } 

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Nesta sexta-feira, 13, a Coopaq e Camaragibe receberam o Coach Marcelo Brilhante para iniciar um trabalho de Team Coaching Business com os seus líderes. O programa, que consiste em 10 encontros, visa desenvolver as competências da liderança com métodos, estratégias e atividades práticas que serão implementadas ao longo do programa.</p>
                <p>O objetivo é fortalecer o time de liderança e prepará-lo para alcançar os objetivos da empresa. "Sabemos que para avançar e crescer, é fundamental ter um time forte e preparado, com pensamentos alinhados e objetivos claros", destacou o presidente Romullo Dantas.</p>
                <p>O Coach Marcelo Brilhante irá trabalhar com os líderes para desenvolver suas habilidades e competências, melhorando o desempenho da equipe e alcançando os objetivos da empresa. O Complexo está confiante de que o programa vai trazer resultados positivos e melhorar o desempenho da empresa.</p>
                <p>“Agradecemos a oportunidade de trabalhar com o Coach Marcelo Brilhante e estamos ansiosos para começar essa jornada de desenvolvimento e crescimento!", finalizou Romullo Dantas.</p>
                <p>O programa de Team Coaching Business é uma iniciativa importante para a cooperativa, que busca melhorar a liderança e o desempenho da empresa. Com o apoio do Coach Marcelo Brilhante, a cooperativa está pronta para enfrentar os desafios e alcançar seus objetivos.</p>
                
              </div>
            </div>
            
          </div>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect} className='mx-auto'>
                {items.map((item, index) => (
                  <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
                    <img loading='lazy' className='d-flex w-100' src={item.src} alt={item.altText} style={{ maxHeight: '400px', cursor: 'pointer', objectFit: 'contain' }} />
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

export default MarceloBrilhante;
