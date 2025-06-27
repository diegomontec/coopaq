import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import imageNews from '../assets/GestãoeLiderança/CapaPage.jpg';
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

import IMG_1 from '../assets/GestãoeLiderança/IMG-20241101-WA0008.jpg';
import IMG_2 from '../assets/GestãoeLiderança/IMG-20241101-WA0009.jpg';
import IMG_3 from '../assets/GestãoeLiderança/IMG-20241101-WA0010.jpg';
import IMG_4 from '../assets/GestãoeLiderança/IMG-20241101-WA0012.jpg';
import IMG_5 from '../assets/GestãoeLiderança/IMG-20241101-WA0013.jpg';
import IMG_6 from '../assets/GestãoeLiderança/IMG-20241101-WA0014.jpg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
];


function GestãoeLiderança() {

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
          <p className='pt-5 mb-0'><em>⏲️ 18/08/2024</em></p>
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>Representantes da Coopaq participam de treinamento sobre gestão e liderança, em busca de melhor performance</h1>
          <p className='fs-6 text-justify text-center fst-italic'>Ao todo, 9 colaboradores dos setores administrativos foram capacitados pela mentora Técia Moura, em Arapiraca, - segunda maior cidade do Estado, localizada no agreste</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

                <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Nos dias 16 e 17 de agosto, o time de líderes administrativo da Coopaq - Cooperativa dos Agricultores Qualificados, participou de dois dias intensos de uma entrega extraordinária na imersão alavanque seu Negócio, junto a dezenas de empresários e gestores, no qual todos estavam unidos em um único propósito: Transformar a gestão e alavancar resultados alagoano.</p>

                <p>Foram dois dias de aprendizado, com ferramentas e estratégias de gestão e liderança que destravou muitas áreas, comportamentos e características fundamentais para um bom líder. Para José Viana, assistente de contabilidade da Coopaq: “Foi tudo muito incrível. Obrigado a esta organização e aos líderes Romullo e Ilva, por nos proporcionar esses dias de aprendizado. Muito bom entendermos que estamos alinhados e que temos um único propósito. Avante”, conclui.</p>

                <p>Investir no conhecimento dos funcionários, é uma prática comum para a empresa e a intenção da Coopaq, em oferecer esse treinamento a alguns dos líderes que compõe o quadro administrativo partiu novamente da gestora Ilva Dantas:</p>
                <p>“É importante termos uma equipe preparada. Treiná-los e capacitá-los a se tornarem melhores do que são, é um investimento onde todos saem ganhando: eles por desenvolverem suas habilidades com mais aptidão e nós como instituição, por temos um time de peso que visa crescimento para nossa Cooperativa, desenvolvem ótima ideias e trazendo soluções que fazem toda diferença.Acredito que essa é a chave do sucesso”, afirma Ilva Dantas.</p>
              </div>
            </div>
            
          </div>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect} className='mx-auto'>
                {items.map((item, index) => (
                  <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
                    <img loading='lazy' className='d-flex w-100' src={item.src} alt={item.altText} style={{ cursor: 'pointer' }} />
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

export default GestãoeLiderança;
