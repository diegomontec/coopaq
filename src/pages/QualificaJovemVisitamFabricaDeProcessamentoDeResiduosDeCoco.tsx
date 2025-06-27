import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import imageNews from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/capa.jpeg'
import { isMobile } from 'react-device-detect';
import Navbar from '../components/organisms/Navbar';

import IMG_1 from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/WhatsApp Image 2025-06-23 at 09.59.50 (1).jpeg';
import IMG_2 from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/WhatsApp Image 2025-06-23 at 09.59.50 (2).jpeg';
import IMG_3 from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/WhatsApp Image 2025-06-23 at 09.59.50 (3).jpeg';
import IMG_4 from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/WhatsApp Image 2025-06-23 at 09.59.51 (1).jpeg';
import IMG_5 from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/WhatsApp Image 2025-06-23 at 09.59.51 (2).jpeg';
import IMG_6 from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/WhatsApp Image 2025-06-23 at 09.59.51.jpeg';
import IMG_7 from '../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/capa.jpeg';

const items = [
    { src: IMG_1, altText: '', key: 1, href: '' },
    { src: IMG_2, altText: '', key: 2, href: '' },
    { src: IMG_3, altText: '', key: 3, href: '' },
    { src: IMG_4, altText: '', key: 4, href: '' },
    { src: IMG_5, altText: '', key: 5, href: '' },
    { src: IMG_6, altText: '', key: 6, href: '' },
    { src: IMG_7, altText: '', key: 7, href: '' }
];

function QualificaJovemVisitamFabricaDeProcessamentoDeResiduosDeCoco() {

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
          <p className='pt-5 mb-0'><em>⏲️ 23/06/2025</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul</h1>
          <p className='fs-6 text-justify text-center fst-italic'>A experiência foi fundamental para os jovens entenderem os processos do subproduto</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '500px'}} loading='lazy'/> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>A Ecoeponto, empresa localizada no em Coruripe, litoral Norte do estado, recebeu uma visita de estudantes do Programa Qualifica Jovem, do curso de bioeconomia, no último sábado (14). A fábrica é especializada em economia circular e processa resíduos de coco, transformando o insumo em produtos sustentáveis. Momento importante para todos os alunos que tiveram a teoria em sala de aula, mas precisavam dessa experiência prática, pra entender melhor os processos do derivado. Eles puderam ver de perto as etapas de processamento da casca e do quengo do coco e entender o que motiva esse seguimento que vem ganhado expansão no mercado.</p>
                <p>Além dos processos, durante a visita, os estudantes conheceram os maquinários utilizados na fábrica, incluindo os setores de coleta, desfibrilação, lavagem do pó, moagem e etc. A fábrica produz 360 quilos por dia de carvão, feito a partir do subproduto que seria descartado e o carvão é utilizado para churrasco e narguilé, com durabilidade maior que os carvões convencionais comercializados já a fibra é direcionada para misturas que servirão como insumos de plantas, areia de felinos, entre outros.</p>
                <p>A Ecoeponto é um exemplo de empresa ESG que está contribuindo para a redução do desperdício e para a promoção da economia circular. A visita foi uma oportunidade para os estudantes aprenderem sobre a importância da sustentabilidade e como essas práticas podem ser aplicadas em diferentes setores, inclusive na Agroindustria Camaragibe.</p>
                
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
      <Footer />
      <DireitosAutorais />
    </div>
  )
}

export default QualificaJovemVisitamFabricaDeProcessamentoDeResiduosDeCoco;
