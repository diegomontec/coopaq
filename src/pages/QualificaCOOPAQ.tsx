import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import imageNews from '../assets/QualificaCOOPAQ/IMG6.jpg';
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

import IMG_1 from '../assets/QualificaCOOPAQ/IMG6.jpg';
import IMG_2 from '../assets/QualificaCOOPAQ/IMG7.jpg';
import IMG_3 from '../assets/QualificaCOOPAQ/IMG8.jpg';
import IMG_4 from '../assets/QualificaCOOPAQ/IMG9.jpg';
import IMG_5 from '../assets/QualificaCOOPAQ/IMG10.jpg';
import IMG_6 from '../assets/QualificaCOOPAQ/IMG11.jpg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
];


function QualificaCOOPAQ() {

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
          <p className='pt-5 mb-0'><em>⏲️ 18/09/2024</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>CAPACITAÇÃO: COOPAQ lança mais novo projeto social para seus agricultores cooperados, o QUALIFICA COOPAQ</h1>
          <p className='fs-6 text-justify text-center fst-italic'>O Projeto visa atender mais de 200 agricultores até novembro, os orientando sobre Cooperativismo e o Selo do Biocombustível Social</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Pensando em colaborar ainda mais com o conhecimento dos agricultores cooperados, o presidente Romullo Dantas, idealizou mais um Projeto Social, - o Qualifica Coopaq; projeto de qualificação de agricultores familiares, que consiste em oferecer minicursos que abordem temas voltados à agricultura familiar. Com foco principal na formação e orientação dos agricultores, preparando-os para atuar de forma mais eficiente e competitiva no mercado, além de garantir a sustentabilidade dos empreendimentos agrícolas.</p>
                <p>A primeira edição do Qualifica Coopaq visa qualificar mais de 200 cooperados, em quatro turmas de cerca de 50 cooperados, até novembro, com a formatura geral prevista para dezembro deste ano. A cada turma, especialistas convidados contribuirão trazendo conteúdo rico e possibilitando nova visão a cerca dos temas.</p>
                <p>O evento que aconteceu no Centro de Logística da Coopaq, contou a turma de agricultores cooperados que residem na área rural de Matriz de Camaragibe e microrregiões circunvizinhas e o primeiro tema do curso ministrado pelo presidente, com colaboração do coordenador de assistência técnica e extensão rural, Ayrton Lima, foi Cooperativismo e Selo do Biocombustível Social.</p>
                <p>O minicurso no formato de painel, contou com a presença do Secretário de Agricultura, Pecuária e Pesca de Matriz de Camaragibe, Renan Dantas e do agricultor cooperado Manoel Messias, um dos fundadores da Coopaq, no qual ambos abordaram suas experiências e importância do cooperativismo na região, além de seus princípios e vantagens. Também houve uma oficina com os participantes para entender quais suas maiores necessidades e expectativas.</p>
                <p>Romullo Dantas, idealizador do Qualifica Coopaq, falou da importância de trazer incentivos aos agricultores por meio do conhecimento: “Nesta manhã buscamos apresentar a eles de uma forma diferente, a importância e a força que o cooperativismo representa para o sucesso das nossas atividades. Também falamos sobre nossa relação com o Selo do Biocombustível Social e como sua produção impacta nas nossas vidas. Por fim, os ouvimos e os orientamos sobre as atualizações das ações internas, para construirmos juntos, uma nova fase que beneficiará a todos nós”, afirmou o presidente.</p>
                <p>A segunda turma do Projeto Qualifica Coopaq está prevista para dia 26 de setembro, com agricultores cooperados do município de Porto Calvo.</p>
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

export default QualificaCOOPAQ;
