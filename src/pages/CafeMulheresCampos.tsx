import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import imageNews from '../assets/CaféMulheresCampo/capaNews.jpg';
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

// import IMG_1 from '../assets/CaféMulheresCampo/IMG-20250319-WA0035.jpg';
import IMG_2 from '../assets/CaféMulheresCampo/IMG-20250319-WA0036.jpg';
// import IMG_3 from '../assets/CaféMulheresCampo/IMG-20250319-WA0038.jpg';
import IMG_4 from '../assets/CaféMulheresCampo/IMG-20250319-WA0039.jpg';
import IMG_5 from '../assets/CaféMulheresCampo/IMG-20250319-WA0040.jpg';
import IMG_6 from '../assets/CaféMulheresCampo/IMG-20250319-WA0041.jpg';
import IMG_7 from '../assets/CaféMulheresCampo/IMG-20250319-WA0042.jpg';
import IMG_8 from '../assets/CaféMulheresCampo/IMG-20250319-WA0043.jpg';
import IMG_9 from '../assets/CaféMulheresCampo/IMG-20250319-WA0044.jpg';
import IMG_10 from '../assets/CaféMulheresCampo/IMG-20250319-WA0045.jpg';
import IMG_11 from '../assets/CaféMulheresCampo/IMG-20250319-WA0046.jpg';
import IMG_12 from '../assets/CaféMulheresCampo/IMG-20250319-WA0047.jpg';
import IMG_13 from '../assets/CaféMulheresCampo/IMG-20250319-WA0048.jpg';
import IMG_14 from '../assets/CaféMulheresCampo/IMG-20250319-WA0049.jpg';
import IMG_15 from '../assets/CaféMulheresCampo/IMG-20250319-WA0050.jpg';
import IMG_16 from '../assets/CaféMulheresCampo/IMG-20250319-WA0051.jpg';
import IMG_17 from '../assets/CaféMulheresCampo/IMG-20250319-WA0052.jpg';

const items = [
  // { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  // { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
  { src: IMG_7, altText: '', key: 6, href: '' },
  { src: IMG_8, altText: '', key: 6, href: '' },
  { src: IMG_9, altText: '', key: 6, href: '' },
  { src: IMG_10, altText: '', key: 6, href: '' },
  { src: IMG_11, altText: '', key: 6, href: '' },
  { src: IMG_12, altText: '', key: 6, href: '' },
  { src: IMG_13, altText: '', key: 6, href: '' },
  { src: IMG_14, altText: '', key: 6, href: '' },
  { src: IMG_15, altText: '', key: 6, href: '' },
  { src: IMG_16, altText: '', key: 6, href: '' },
  { src: IMG_17, altText: '', key: 6, href: '' },
];


function CafeMulheresCampos() {

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
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>Café com Mulheres do Campo é sucesso e marca início dos trabalhos do Matriz Delas, em 2025</h1>
          <p className='fs-6 text-justify text-center fst-italic'>Mais de 100 agricultoras da região Norte participaram do evento, que contou com palestra, dinâmicas e entrega de brindes</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

                <div className="fs-5 m-1" style={{ textAlign: "justify" }}>

                <p>O Centro de Logística da Coopaq recebeu, no último sábado (13), mais de 100 agricultoras de vários locais da região Norte para um café da manhã especial, em comemoração ao Dia Internacional das Mulheres. O evento, organizado pelo Projeto Social Matriz Delas, fez sucesso e marcou o início dos trabalhos da instituição em 2025.</p>

                <p>As participantes tiveram a oportunidade de ouvir uma palestra da consultora do Sebrae, Desiree Farah, que abordou temas relevantes para o empreendedorismo feminino. Além disso, o evento contou com dinâmicas divertidas, entrega de brindes para todas as participantes e um sorteio de presentes.</p>

                <p>Um dos momentos mais importantes do evento foi a aplicação de um questionário para entender as principais necessidades das mulheres participantes. Os resultados serão utilizados para oferecer cursos profissionalizantes e oportunidades de empreendedorismo nas localidades de origem das participantes.</p>
                
                <p>"Agradecemos a todas as participantes e principalmente à Coopaq, em nome do presidente Romullo Dantas, por apoiar esse projeto e suprir todas as nossas necessidades para fazer desse evento um momento especial", disse Ilva Dantas, idealizadora do MD.</p>

                <p>O evento foi um marco importante para o Matriz Delas, que inicia seus trabalhos em 2025 com o objetivo de empoderar as mulheres da região Norte e promover o empreendedorismo feminino no campo.</p>
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

export default CafeMulheresCampos;
