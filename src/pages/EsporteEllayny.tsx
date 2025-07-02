import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../assets/Esporte-Ellayny/IMG-20250416-WA0030.jpg';

import IMG_1 from '../assets/Esporte-Ellayny/IMG-20250416-WA0027.jpg';
import IMG_2 from '../assets/Esporte-Ellayny/IMG-20250416-WA0028.jpg';
import IMG_3 from '../assets/Esporte-Ellayny/IMG-20250416-WA0029.jpg';
import IMG_4 from '../assets/Esporte-Ellayny/IMG-20250416-WA0031.jpg';
import IMG_5 from '../assets/Esporte-Ellayny/IMG-20250416-WA0030.jpg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
];


function EsporteEllayny() {

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
          <p className='pt-5 mb-0'><em>⏲️ 17/04/2025</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>Apoiando cada vez mais o esporte, Coopaq vira patrocinadora oficial de lutadora de jiu-jítsu</h1>
          <p className='fs-6 text-justify text-center fst-italic'></p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '500px'}} loading='lazy'/> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Investir em bem-estar e qualidade de vida é uma de nossas missões como empresa. Patrocinar atletas amadores das mais diversas áreas faz parte do nosso cotidiano e com  alegria anunciamos que nos tornamos PATROCINADORA OFICIAL da jovem atleta Ellayny Mirelly. Ela tem 14 anos e há um tempo vem brilhando no jiu-jitsu e participando de torneios com a nossa colaboração.</p>
                <p>Com sua dedicação e talento,  Ellayny conquistou o título de campeã em seu último torneio - Open Maragogi, na categoria infantojuvenil B, de 14 a 15 anos e vem inspirando todos ao seu redor.</p>
                <p>A Coopaq acredita no poder do esporte para transformar histórias reais e promover qualidade de vida, e estamos comprometidos em apoiar nossos atletas e a comunidade. Vamos juntos celebrar essa parceria e o sucesso de Ellayny.</p>

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

export default EsporteEllayny;
