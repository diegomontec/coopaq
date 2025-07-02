import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../assets/EncontroDeNegocios/CapaPage.png';

import IMG_1 from '../assets/EncontroDeNegocios/FotosPage/IMG_1.png';
import IMG_2 from '../assets/EncontroDeNegocios/FotosPage/IMG_4.png';
import IMG_3 from '../assets/EncontroDeNegocios/FotosPage/IMG_5.png';
import IMG_4 from '../assets/EncontroDeNegocios/Capa.png';
import IMG_5 from '../assets/EncontroDeNegocios/CapaPage.png';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
];


function EncontroDeNegocios() {

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
          <p className='pt-5 mb-0'><em>⏲️ 19/07/2024</em></p>
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>Coopaq participa de Encontro de Negócios e apresenta nossos produtos</h1>
          <p className='fs-5 text-justify fst-italic'>A Feira possibilitou que os produtos da Agroindústria Camaragibe fossem apresentados a novos parceiros, fortalecendo a agricultura familiar</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Ascom Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>No início desta semana, o setor comercial da Coopaq, por meio do coordenador George Dantas, participou do Encontro de Negócios do Cooperativismo da Agricultura Familiar, no Sebrae, apresentando o que os nossos cooperados produzem, como tubérculos, frutas, verduras, hortaliças, além dos nossos produtos derivados de coco da Agroindústria Camaragibe. Momento importante para disponibilizar nosso catálogo</p>
                <p>O evento reuniu cooperativas da agricultura familiar e empresas fornecedoras de refeições, para fomentar parcerias e fortalecer o cooperativismo no Estado.</p>
              </div>
            </div>
            
          </div>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect} className='mx-auto'>
                {items.map((item, index) => (
                  <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
                    <img className='d-block w-100' src={item.src} alt={item.altText} style={{ cursor: 'pointer' }} />
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

export default EncontroDeNegocios;
