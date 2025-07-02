import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../assets/SIPAT/CAPA.png';

import IMG_1 from '../assets/SIPAT/CAPA.png';
import IMG_2 from '../assets/SIPAT/IMG-20240730-WA0005.png';
import IMG_3 from '../assets/SIPAT/IMG-20240730-WA0006.png';
import IMG_4 from '../assets/SIPAT/IMG-20240730-WA0007.png';
import IMG_5 from '../assets/SIPAT/IMG-20240730-WA0008.png';
import IMG_6 from '../assets/SIPAT/IMG-20240730-WA0009.png';
import IMG_7 from '../assets/SIPAT/IMG-20240730-WA0010.png';
import IMG_8 from '../assets/SIPAT/IMG6459.png';
import IMG_9 from '../assets/SIPAT/IMG_6460.png';
import IMG_10 from '../assets/SIPAT/IMG_6469.png';
import IMG_11 from '../assets/SIPAT/IMG_6796.png';
import IMG_12 from '../assets/SIPAT/IMG_6807.png';
import IMG_13 from '../assets/SIPAT/IMG_6876.png';
import IMG_14 from '../assets/SIPAT/IMG_6879.png';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 5, href: '' },
  { src: IMG_7, altText: '', key: 5, href: '' },
  { src: IMG_8, altText: '', key: 5, href: '' },
  { src: IMG_9, altText: '', key: 5, href: '' },
  { src: IMG_10, altText: '', key: 5, href: '' },
  { src: IMG_11, altText: '', key: 5, href: '' },
  { src: IMG_12, altText: '', key: 5, href: '' },
  { src: IMG_13, altText: '', key: 5, href: '' },
  { src: IMG_14, altText: '', key: 5, href: '' },
];


function SIPAT() {

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
          <p className='pt-5 mb-0'><em>⏲️ 20/07/2024</em></p>
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>COOPAQ reúne colaboradores para a SIPAT</h1>
          <p className='fs-5 text-justify fst-italic'>Evento contou com diversos profissionais técnicos que destacaram a importância de um ambiente de trabalho seguro e saudável</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Soares, Ascom Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Iniciamos a quinzena do segundo semestre de trabalhos do Complexo Cooppaq, com a realização da SIPAT - Semana Interna de Prevenção de Acidentes de Trabalho, com o tema Saúde Mental - Combatendo acidentes, construindo um ambiente seguro. O evento contou com diversos profissionais técnicos, que destacaram a importância de um ambiente de trabalho seguro e saudável, que valoriza e cuida do profissional colaborador.</p>
                <p>A Sipat realizada nos dias 17, 18 e 19, reuniu cerca de 80 colaboradores que fazem parte do quadro funcional dos setores administrativos e da Agroindústria Camaragibe, mas, antes disso, o Setor de Segurança do Trabalho, liderado pelo técnico de segurança do trabalho, Deives Branco, realizou uma Simulação de Emergência, com a colaboração do consultor Paulo Emanuel. No momento, os colaboradores passaram por um curto treinamento de primeiros socorros.</p>
                <p>De acordo com o presidente da Coopaq, Romullo Dantas: “A Sipat foi a oportunidade dos nossos funcionários adquirirem conhecimentos, compartilhar experiências e esclarecer dúvidas sobre segurança no trabalho, contribuindo para a redução de acidentes e doenças no nosso ambiente de trabalho. Foram dias proveitosos e estamos satisfeitos com os resultados”, afirmou Romullo.</p>
                <p className='fs-5 text-justify fst-italic text-COOPAQ-orange'>Objetivo da Sipat</p>
                <p>A Semana Interna de Prevenção de Acidentes de Trabalho - SIPAT, é uma semana dedicada à conscientização e prevenção de acidentes e doenças ocupacionais dentro de uma empresa ou instituição. Durante a SIPAT, além das palestras educacionais, foram realizadas diversas atividades como treinamentos e ações que têm como objetivo promover a segurança, saúde e qualidade de vida dos nossos colaboradores.</p>
                <p className='fs-5 text-justify fst-italic text-COOPAQ-orange'>Sobre a Programação</p>
                <p>No primeiro dia da programação, a psicóloga Júlia Lira falou sobre a saúde mental como aliada da segurança e do sucesso profissional. Pela tarde a enfermeira convidada, Edilane Bonfim, falou sobre DST's - Doenças Sexualmente Transmissíveis, alertando a todos sobre os riscos à saúde pelo não uso de preservativo. No segundo dia pela manhã, a Sipat recebeu a nutricionista Mayara Santos, que palestrou sobre alimentação saudável, dando exemplos de alimentos que colaboram para uma vida saudável e os alimentos que devem ser evitados. pela tarde, quem assumiu o comando foi o socorrista Abelardo Cavalcante, que falou sobre primeiros socorros e a importância de preservar a vida. No terceiro e último dia, os colaboradores contaram com a fisioterapeuta Leilane Lima, que falou sobre ergonomia do trabalho, trocando experiências e tirando dúvidas dos colaboradores. Já no horário da tarde, o conselheiro tutelar Artêmio Damasceno abordou o tema Julho Coral, que trata-se de uma Campanha nacional sobre a Conscientização sobre os Direitos e Deveres da Criança.</p>
                <p>Vale lembrar que durante os três dias de evento, o Teatro Corporativo Sesi, participou com peças teatrais temáticas, que abordaram temas relevantes fazendo uso de uma comunicação lúdica, criativa, reflexiva e eficiente.</p>
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

export default SIPAT;