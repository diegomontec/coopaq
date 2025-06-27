import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import imageNews from '../assets/PedalCoopaq/capa.jpg';
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

import IMG_1 from '../assets/PedalCoopaq/IMG-20250401-WA0006.jpg';
import IMG_2 from '../assets/PedalCoopaq/IMG-20250401-WA0007.jpg';
import IMG_4 from '../assets/PedalCoopaq/IMG-20250401-WA0008.jpg';
import IMG_5 from '../assets/PedalCoopaq/IMG-20250401-WA0009.jpg';
import IMG_6 from '../assets/PedalCoopaq/IMG-20250401-WA0010.jpg';
import IMG_7 from '../assets/PedalCoopaq/IMG-20250401-WA0011.jpg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
  { src: IMG_7, altText: '', key: 6, href: '' },
];

function PedalCoopaq() {

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
          <p className='pt-5 mb-0'><em>⏲️ 01/04/2025</em></p>
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>Colaboradores Inauguram o Pedal Coopaq na 15ª Etapa do Circuito Unidos pela Bike</h1>
          <p className='fs-6 text-justify text-center fst-italic'>Evento foi representado pelo quarteto que levou o nome e a bandeira do Pedal, numa trilha de 23 km no município de Catende/PE</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '400px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

                <div className="fs-5 m-1" style={{ textAlign: "justify" }}>

                <p>No último domingo, dia 30 de março, nossos participaram da 15ª etapa do Circuito Unidos pela Bike, realizado no município de Catende, em Pernambuco. A ocasião também marcou o lançamento do grupo Pedal Coopaq, uma iniciativa do presidente Romullo Dantas para estimular o desporto entre os colaboradores.
                </p>

                <p>O grupo Pedal Coopaq é formado por funcionários da Coopaq que são praticantes de atividades físicas, incluindo o ciclismo. A iniciativa visa promover a saúde e o bem-estar, além de fortalecer o espírito de equipe e a vida mais saudável.
                </p>

                <p>Os participantes que participaram da trilha foram Daniele Soares, Neto Feitosa, Elielson Antônio e Lázaro Wesley. Eles enfrentaram os desafios da trilha, que incluía muitas ladeiras e uma conexão intensa com a natureza.
                </p>
                
                <p>Na ocasião, a turma convidou os grupos de ciclismo que participaram do Circuito para também marcarem presença na Pedalada Verde, evento de ciclismo promovido pela Coopaq com o objetivo de conscientizar sobre a importância da atividade física para a saúde e o meio ambiente, e que ocorrerá em agosto deste ano.
                </p>

                <p>Em 2024, a Pedalada Verde contou com mais de 800 praticantes do ciclismo, atletas e entusiastas do esporte, que se reuniram para pedalar e desfrutar da beleza natural da região de Matriz de Camaragibe.
                </p>

                <p>Segundo o presidente Romullo Dantas, "A Coopaq se orgulha dos nossos colaboradores que participaram do evento e se compromete a continuar promovendo iniciativas que visem a saúde e o bem-estar. O lançamento do grupo Pedal Coopaq é um passo importante nessa direção,” afirma.
                </p>

              </div>
            </div>
            
          </div>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect} className='mx-auto'>
                {items.map((item, index) => (
                  <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
                    <img loading='lazy' className='d-flex w-100 mx-auto' src={item.src} alt={item.altText} style={{ maxWidth: '400px', cursor: 'pointer' }} />
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

export default PedalCoopaq;
