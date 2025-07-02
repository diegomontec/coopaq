import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../../src/assets/PedaladaVerdeNews/CapaNewsPage.png'

import IMG_1 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (31).png';
import IMG_2 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (1).png';
import IMG_3 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (2).png';
import IMG_4 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (3).png';
import IMG_5 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (4).png';
import IMG_6 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (23).png';
import IMG_7 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (12).png';
import IMG_8 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (13).png';
import IMG_9 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (20).png';
import IMG_10 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (21).png';
import IMG_11 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (22).png';
import IMG_12 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (24).png';
import IMG_13 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (25).png';
import IMG_14 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (26).png';
import IMG_15 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (27).png';
import IMG_16 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (28).png';
import IMG_17 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (29).png';
import IMG_18 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (30).png';
import IMG_19 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (32).png';
import IMG_20 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (33).png';
import IMG_21 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (34).png';
import IMG_22 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (35).png';
import IMG_23 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG (36).png';
import IMG_24 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5131.jpg';
import IMG_25 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5097.jpg';
import IMG_26 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5105.jpg';
import IMG_27 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5108.jpg';
import IMG_28 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5109.jpg';
import IMG_29 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5113.jpg';
import IMG_30 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5148.jpg';
import IMG_31 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5137.jpg';
import IMG_32 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5139.jpg';
import IMG_33 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5143.jpg';
import IMG_34 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5144.jpg';
import IMG_35 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5146.jpg';
import IMG_36 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5161.jpg';
import IMG_37 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5152.jpg';
import IMG_38 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5153.jpg';
import IMG_39 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5156.jpg';
import IMG_40 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5158.jpg';
import IMG_41 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5160.jpg';
import IMG_42 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5167.jpg';
import IMG_43 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5169.jpg';
import IMG_44 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5171.jpg';
import IMG_45 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5173.jpg';
import IMG_46 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5164.jpg';
import IMG_47 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5166.jpg';
import IMG_48 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5181.jpg';
import IMG_49 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5182.jpg';
import IMG_50 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5183.jpg';
import IMG_51 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5185.jpg';
import IMG_52 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5174.jpg';
import IMG_53 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5175.jpg';
import IMG_54 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5190.jpg';
import IMG_55 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_E5105.jpg';
import IMG_56 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_E5114.jpg';
import IMG_57 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_E5131.jpg';
import IMG_58 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_E5135.jpg';
import IMG_59 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_E5136.jpg';
import IMG_60 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5187.jpg';
import IMG_61 from '../assets/PedaladaVerdeNews/FotosDaPage/IMG_5188.jpg';

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
  { src: IMG_14, altText: '', key: 14, href: '' },
  { src: IMG_15, altText: '', key: 15, href: '' },
  { src: IMG_16, altText: '', key: 16, href: '' },
  { src: IMG_17, altText: '', key: 17, href: '' },
  { src: IMG_18, altText: '', key: 18, href: '' },
  { src: IMG_19, altText: '', key: 19, href: '' },
  { src: IMG_20, altText: '', key: 20, href: '' },
  { src: IMG_21, altText: '', key: 21, href: '' },
  { src: IMG_22, altText: '', key: 22, href: '' },
  { src: IMG_23, altText: '', key: 23, href: '' },
  { src: IMG_24, altText: '', key: 24, href: '' },
  { src: IMG_25, altText: '', key: 25, href: '' },
  { src: IMG_26, altText: '', key: 26, href: '' },
  { src: IMG_27, altText: '', key: 27, href: '' },
  { src: IMG_28, altText: '', key: 28, href: '' },
  { src: IMG_29, altText: '', key: 29, href: '' },
  { src: IMG_30, altText: '', key: 30, href: '' },
  { src: IMG_31, altText: '', key: 31, href: '' },
  { src: IMG_32, altText: '', key: 32, href: '' },
  { src: IMG_33, altText: '', key: 33, href: '' },
  { src: IMG_34, altText: '', key: 34, href: '' },
  { src: IMG_35, altText: '', key: 35, href: '' },
  { src: IMG_36, altText: '', key: 36, href: '' },
  { src: IMG_37, altText: '', key: 37, href: '' },
  { src: IMG_38, altText: '', key: 38, href: '' },
  { src: IMG_39, altText: '', key: 39, href: '' },
  { src: IMG_40, altText: '', key: 40, href: '' },
  { src: IMG_41, altText: '', key: 41, href: '' },
  { src: IMG_42, altText: '', key: 42, href: '' },
  { src: IMG_43, altText: '', key: 43, href: '' },
  { src: IMG_44, altText: '', key: 44, href: '' },
  { src: IMG_45, altText: '', key: 45, href: '' },
  { src: IMG_46, altText: '', key: 46, href: '' },
  { src: IMG_47, altText: '', key: 47, href: '' },
  { src: IMG_48, altText: '', key: 48, href: '' },
  { src: IMG_49, altText: '', key: 49, href: '' },
  { src: IMG_50, altText: '', key: 50, href: '' },
  { src: IMG_51, altText: '', key: 51, href: '' },
  { src: IMG_52, altText: '', key: 52, href: '' },
  { src: IMG_53, altText: '', key: 53, href: '' },
  { src: IMG_54, altText: '', key: 54, href: '' },
  { src: IMG_55, altText: '', key: 55, href: '' },
  { src: IMG_56, altText: '', key: 56, href: '' },
  { src: IMG_57, altText: '', key: 57, href: '' },
  { src: IMG_58, altText: '', key: 58, href: '' },
  { src: IMG_59, altText: '', key: 59, href: '' },
  { src: IMG_60, altText: '', key: 60, href: '' },
  { src: IMG_61, altText: '', key: 61, href: '' },
];


function PedaladaVerde() {

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
          <p className='pt-5 mb-0'><em>⏲️ 10/06/2024</em></p>
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>Coopaq reúne mais de mil ciclistas na 2ª edição da Pedalada Verde</h1>
          <p className='fs-5 text-justify fst-italic'>O Circuito de 35 km levou os participantes para a Cachoeira Santa Helena, conhecida por suas cascatas em meio à mata atlântica</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Soares, Decom Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Mais de 1.000 ciclistas reuniram-se na 2ª edição da Pedalada Verde, realizada pela Coopaq - Cooperativa dos Agricultores Qualificados, em Matriz de Camaragibe, Litoral Norte do Estado.</p>
                <p>O evento entitulado Pedalada Verde, que faz parte da programação anual da Cooperativa, é mais uma das ações socioambientais, em alusão a Semana do Meio Ambiente, que vai de 03 a 8 de junho.</p>
                <p>Nesta 2ª edição, o circuito montado foi o da Cachoeira Santa Helena, área rural da cidade, onde os participantes tiveram que pedalar 28 km para poder prestigiar as belezas naturais em meio a mata atlântica e tomar um banho gelado entre as pedras.</p>
                <p>O tempo chuvoso não foi suficiente para desanimar as equipes que vieram da capital, toda a Região Norte e também fr estados do Nordeste, como Bahia, Pernambuco, Paraíba e Sergipe.</p>
                <p>Para a realização deste evento, a Coopaq contou com diversos empresários da região, bem como o apoio da Prefeitura de Matriz de Camaragibe por meio das Secretarias de Saúde, Agricultura e Guarda Civil Municipal, equipes de outros Pedais, além do BPRV - Bstalhão da Polícia Militar Rodoviária.</p>
                <p>Durante todo o evento, mais de 80 pessoas foram mobilizadas para dar todo o suporte para os participantes; do café da manhã, ao apoio e segurança durante o percurso, contando com bombeiro civil, técnicos de segurança, técnicas de enfermagem, pontos de hidratação, distribuição de “kits glicose”, mecânicos, veículo para recolhimento de bikes e desistentes, veículo de limpeza, além de água de coco na parada final.</p>
                <p>Dezenas de prêmios foram sorteados aos ciclistas, entre acessórios para ciclismo e também 5 bicicletas.</p>
                <p>De acordo com o presidente da Coopaq Romullo Dantas, o evento foi um sucesso e o que tudo indica, a 3ª edição já está confirmada. “Estamos muito felizes com mais uma edição da Pedalada Verde. Eventos como este mostram o quanto nos preocupamos com a conscientização ambiental. Ver tantos ciclistas nos parabenizando só mostra o quanto fazemos tudo com amor e dedicação. Que venha a 3ª edição”, afirmou Romullo.</p>
                <p>O evento também motivou os colaboradores do Complexo Industrial Coopaq, ao interesse pelo esporte, e com isso, foi criado oficialmente a equipe Pedal Coopaq, que brevemente também participará de pedais da região.</p>
              </div>
            </div>
            
          </div>
          <div className='row justify-content-center'>
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
    </div>
  )
}

export default PedaladaVerde;
