import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../assets/Autorresponsabilidade/Capa.jpg'

import IMG_1 from '../assets/Autorresponsabilidade/IMG-20250512-WA0017.jpg';
import IMG_2 from '../assets/Autorresponsabilidade/IMG-20250512-WA0019.jpg';
import IMG_3 from '../assets/Autorresponsabilidade/IMG-20250512-WA0021.jpg';
import IMG_4 from '../assets/Autorresponsabilidade/Capa.jpg';

const items = [
    { src: IMG_1, altText: '', key: 1, href: '' },
    { src: IMG_2, altText: '', key: 2, href: '' },
    { src: IMG_3, altText: '', key: 3, href: '' },
    { src: IMG_4, altText: '', key: 4, href: '' },
];


function Autoresponsabilidade() {

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
      <div className='container'>
        <div className='container-fluid font-regular'>
          <p className='pt-5 mb-0'><em>⏲️ 12/05/2025</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>Time operacional participa de treinamento sobre autorresponsabilidade.</h1>
          <p className='fs-6 text-justify text-center fst-italic'></p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '500px'}} loading='lazy'/> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Na tarde da última quinta-feira, 08 de maio, promovemos um treinamento online com todos os nossos colaboradores com o tema “O Poder da Autorresponsabilidade”, conduzido pela Master Trainer Jamilly Brito.</p>
                <p>A capacitação teve como objetivo estimular a consciência individual, o protagonismo nas ações diárias e a responsabilidade de cada colaborador diante dos desafios e decisões no ambiente profissional e pessoal. O conteúdo reforçou a importância de atitudes alinhadas a uma postura proativa e consciente, com foco no crescimento individual e coletivo.</p>
                <p>Nosso compromisso em investir no crescimento e bem-estar de nossos colaboradores continua sendo uma prioridade, pois acreditamos que o fortalecimento pessoal de cada um contribui para a construção de um ambiente de trabalho mais saudável, respeitoso e colaborativo.</p>

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
    </div>
  )
}

export default Autoresponsabilidade;
