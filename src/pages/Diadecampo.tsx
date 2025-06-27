import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import IMG_1 from '../assets/News; Dia de Campo/IMG-20240430-WA0040.jpg';
import IMG_2 from '../assets/News; Dia de Campo/IMG-20240430-WA0041.jpg';
import IMG_4 from '../assets/News; Dia de Campo/IMG-20240430-WA0043.jpg';
import IMG_5 from '../assets/News; Dia de Campo/IMG-20240430-WA0044.jpg';
import IMG_6 from '../assets/News; Dia de Campo/IMG-20240430-WA0045.jpg';
import IMG_7 from '../assets/News; Dia de Campo/IMG-20240430-WA0046.jpg';
import IMG_8 from '../assets/News; Dia de Campo/IMG-20240430-WA0047.jpg';
import IMG_9 from '../assets/News; Dia de Campo/IMG-20240430-WA0048.jpg';
import IMG_10 from '../assets/News; Dia de Campo/IMG-20240430-WA0049.jpg';
import IMG_11 from '../assets/News; Dia de Campo/IMG-20240430-WA0050.jpg';
import IMG_12 from '../assets/News; Dia de Campo/IMG-20240430-WA0051.jpg';
import IMG_13 from '../assets/News; Dia de Campo/IMG-20240430-WA0052.jpg';
import IMG_14 from '../assets/News; Dia de Campo/IMG-20240430-WA0053.jpg';
import IMG_15 from '../assets/News; Dia de Campo/IMG-20240430-WA0054.jpg';
import IMG_16 from '../assets/News; Dia de Campo/IMG-20240430-WA0055.jpg';
import IMG_17 from '../assets/News; Dia de Campo/IMG-20240430-WA0056.jpg';
import IMG_18 from '../assets/News; Dia de Campo/IMG-20240430-WA0057.jpg';
import IMG_19 from '../assets/News; Dia de Campo/IMG-20240430-WA0058.jpg';
import IMG_20 from '../assets/News; Dia de Campo/IMG-20240430-WA0059.jpg';
import IMG_21 from '../assets/News; Dia de Campo/IMG-20240430-WA0060.jpg';

import capa from '../assets/News; Dia de Campo/capa.jpg'
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
  // {
  //   src: IMG_3,
  //   altText: '',
  //   key: 3,
  //   href: '',
  // },
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
  {
    src: IMG_8,
    altText: '',
    key: 8,
    href: '',
  },
  {
    src: IMG_9,
    altText: '',
    key: 9,
    href: '',
  },
  {
    src: IMG_10,
    altText: '',
    key: 10,
    href: '',
  },
  {
    src: IMG_11,
    altText: '',
    key: 11,
    href: '',
  },
  {
    src: IMG_12,
    altText: '',
    key: 12,
    href: '',
  },
  {
    src: IMG_13,
    altText: '',
    key: 13,
    href: '',
  },
  {
    src: IMG_14,
    altText: '',
    key: 14,
    href: '',
  },
  {
    src: IMG_15,
    altText: '',
    key: 15,
    href: '',
  },
  {
    src: IMG_16,
    altText: '',
    key: 16,
    href: '',
  },
  {
    src: IMG_17,
    altText: '',
    key: 17,
    href: '',
  },
  {
    src: IMG_18,
    altText: '',
    key: 18,
    href: '',
  },
  {
    src: IMG_19,
    altText: '',
    key: 19,
    href: '',
  },
  {
    src: IMG_20,
    altText: '',
    key: 20,
    href: '',
  },
  {
    src: IMG_21,
    altText: '',
    key: 21,
    href: '',
  },
];

function Diadecampo() {

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
      {/* <div className='container'> */}
      <div className='container px-5'>
        <div className='container-fluid font-bold px-5'>
          <p className='pt-5 mb-0'><em>30/04/2024 ⏲️</em></p>
          <h1 className='fs-2 text-start text-COOPAQ-orange'>Assentamento Boa União recebe equipe de ATER em mais um “Dia de Campo”</h1>
          <p className='fs-5 text-start'><em>O evento que tem objetivo de fomentar a capacitação do produtor rural, abordou temas como uso de drone e precificação</em></p>
          {/* <div className=" d-flex align-items-center mt-5">
              <img src={capa} alt="capa" className='w-100 float-md-center me-md-3 mb-3 image-fluid' style={{maxWidth: '700px'}} />
            </div> */}
            <div className="d-flex justify-content-center align-items-center">
    <img loading='lazy' src={capa} alt="capa" className='w-100 image-fluid' style={{maxWidth: '700px'}} />
</div>

          <div className="row">
            <div className="">
              {/* <p className='fs-4 ps-5 text-COOPAQ-orange'>Decom, Coopaq</p> */}
                <p><em>Daniele Soares, jornalista</em></p>
              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Nesta manhã de domingo, nossa equipe de ATER - Assistência Técnica de Extensão Rural, realizou mais um Dia de Campo.</p>
                <p>Dessa vez, a ação aconteceu no Assentamento Boa União, no município de Porto Calvo, litoral Norte e contou com toda a equipe de ATER, dos diretores da Coopaq, Salatiel Alves responsável pelo setor Comercial e Mayara Costa, responsável pela Juventude e Mulheres, além de Rúbia e Gilson, técnicos do Sebrae.</p>
                <p>O Dia de Campo que faz parte do Projeto Coqueirais, tem sido realizado com o objetivo de fomentar a capacitação do produtor rural, por meio de Convênio, em parceria com a deputada Federal Tereza Nelma.</p>
                <p>O tema deste encontro abordado pelo setor de ATER , foi o “Uso de Drone na Agricultura”, ministrado pelo técnico em agroecologia da Coopaq, José Feitosa, em seguida, os representantes do Sebrae ministraram um curso sobre Precificação de preços.</p>
              </div>
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
      {/* </div> */}
      <Footer />
      <DireitosAutorais />
    </div>
  )
}

export default Diadecampo;
