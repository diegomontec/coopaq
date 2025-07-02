import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';


import imageNews from '../assets/QualificaJovem/Capa.png';


import IMG_1 from '../assets/QualificaJovem/IMG_8420.png';
import IMG_2 from '../assets/QualificaJovem/IMG_8421.png';
import IMG_3 from '../assets/QualificaJovem/IMG_8422.png';
import IMG_4 from '../assets/QualificaJovem/IMG_8423.png';
import IMG_5 from '../assets/QualificaJovem/IMG_8424.png'; 
import IMG_6 from '../assets/QualificaJovem/IMG_8425.png';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
];


function QualificaJovem() {

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
          <p className='pt-5 mb-0'><em>⏲️ 08/04/2025</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>Lançamento do Projeto QUALIFICA JOVEM: Capacitando Jovens para um Futuro Sustentável</h1>
          <p className='fs-6 text-justify text-center fst-italic'>O curso que faz parte do Projeto Social Qualifica Coopaq, trará mais oportunidades a juventude do campo a habilitando para o mercado de trabalho</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Na manhã do dia 05, foi lançado o Projeto QUALIFICA JOVEM, uma iniciativa que visa capacitar 50 jovens entre 16 e 29 anos para desenvolver produtos sustentáveis a partir das cascas de coco. O projeto faz parte do Programa Selo Biocombustível Social da COOPAQ e tem como objetivo promover o desenvolvimento econômico e social da comunidade beneficiada.</p>
                <p className='fs-5 text-justify fst-italic text-COOPAQ-orange'>Parceria com o Instituto Cerradus</p>
                <p>A parceria com o Instituto Cerradus será fundamental para o sucesso do projeto, habilitando os participantes a identificar e desenvolver produtos sustentáveis e fomentando a inovação através do uso de tecnologias sustentáveis e práticas ambientais responsáveis.</p>
                <p className='fs-5 text-justify fst-italic text-COOPAQ-orange'>Apoio à Juventude</p>
                <p>Segundo o presidente Romullo Dantas: “ Esse projeto visa apoiar a juventude das comunidades rurais, assentamentos e povoados, contribuindo para que a economia local seja impulsionada por meio dos insumos utilizados. Uma bolsa no valor de R$900 também será dada aos jovens como forma de apoio e incentivo. Temos certeza que os resultados serão positivos”, afirmou.</p>
                <p>Com o lançamento do Projeto QUALIFICA JOVEM, a COOPAQ demonstram seu compromisso com a sustentabilidade e o desenvolvimento econômico e social da comunidade. Vamos juntos construir um futuro mais sustentável!</p>

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
    </div>
  )
}

export default QualificaJovem;
