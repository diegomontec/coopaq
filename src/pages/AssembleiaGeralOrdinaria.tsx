import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import imageNews from '../assets/AssembleiaGeralOrdinaria/capaNews.jpg';
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

import IMG_1 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0053.jpg';
import IMG_2 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0055.jpg';
import IMG_4 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0057.jpg';
import IMG_5 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0058.jpg';
import IMG_6 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0059.jpg';
import IMG_7 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0060.jpg';
import IMG_8 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0061.jpg';
import IMG_9 from '../assets/AssembleiaGeralOrdinaria/IMG-20250319-WA0062.jpg';
import IMG_10 from '../assets/AssembleiaGeralOrdinaria/IMG-202503192-A0063.jpg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
  { src: IMG_7, altText: '', key: 6, href: '' },
  { src: IMG_8, altText: '', key: 6, href: '' },
  { src: IMG_9, altText: '', key: 6, href: '' },
  { src: IMG_10, altText: '', key: 6, href: '' },
];


function AssembleiaGeralOrdinaria() {

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
          <p className='pt-5 mb-0'><em>⏲️ 19/03/2025</em></p>
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>Assembleia Geral Ordinária: Um Marco para o Futuro da Copa</h1>
          <p className='fs-6 text-justify text-center fst-italic'>Cooperados se reúnem para discutir crescimento e eleger nova diretoria</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

                <div className="fs-5 m-1" style={{ textAlign: "justify" }}>

                <p>No dia 9 de fevereiro, a Assembleia Geral Ordinária da Coopaq, reuniu mais de 300 agricultores cooperados para um dia de diálogo, decisões e planejamentos para o futuro da cooperativa.</p>

                <p>O evento foi marcado por uma eleição para a nova diretoria e discussões sobre temas importantes para o crescimento da Cooperativa.</p>

                <p>A assembleia reafirmou o compromisso com cada cooperado e destacou o papel fundamental de cada um na construção de um futuro próspero. Romulo Dantas, mais uma vez ganhou a eleição que o elegeu para novamente presidir a Cooperativa. Ele também foi responsável por mais uma iniciativa de cuidado e atenção aos cooperados, oferecendo almoço e sorteios de brindes para todos os presentes.</p>
                
                <p>Um ponto relevante do evento foi a apresentação do projeto Social Música Cooperada, que contou com a participação de crianças e adolescentes tocando flauta doce. A assembleia foi um sucesso e demonstrou a força e a união dos cooperados em busca de um futuro melhor para a Coopaq.</p>

              </div>
            </div>
            
          </div>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect} className='mx-auto'>
                {items.map((item, index) => (
                  <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
                    <img loading='lazy' className='d-flex w-100 ' src={item.src} alt={item.altText} style={{ cursor: 'pointer' }} />
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

export default AssembleiaGeralOrdinaria;
