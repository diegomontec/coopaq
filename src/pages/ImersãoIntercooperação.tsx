import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../../src/assets/ImersãoIntercooperação/CapaNewsImersão.jpg'

import IMG_1 from '../assets/ImersãoIntercooperação/FotosPage/IMG_1.jpg';
import IMG_2 from '../assets/ImersãoIntercooperação/FotosPage/IMG_2.jpg';
import IMG_3 from '../assets/ImersãoIntercooperação/FotosPage/IMG_3.jpg';
import IMG_4 from '../assets/ImersãoIntercooperação/FotosPage/IMG_4.jpg';
import IMG_5 from '../assets/ImersãoIntercooperação/FotosPage/IMG_5.jpg';
import IMG_6 from '../assets/ImersãoIntercooperação/FotosPage/CapaNewsImersão.jpg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
  { src: IMG_4, altText: '', key: 4, href: '' },
  { src: IMG_5, altText: '', key: 5, href: '' },
  { src: IMG_6, altText: '', key: 6, href: '' },
];


function ImersãoIntercooperação() {

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
          <h1 className='fs-2 text-COOPAQ-orange text-center font-demibold'>Colaboradores da Coopaq fazem imersão de intercooperação, na região Norte do Brasil</h1>
          <p className='fs-5 text-justify fst-italic'>Na companhia do presidente, representantes do administrativo e da Agroindústria Camaragibe, para compartilhar experiências e conhecer novos processamentos</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-75 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Ascom Daniele Soares</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>Nosso presidente, Romullo Dantas, o responsável pelo setor contábil, Junior Viana e o líder de manutenção da nossa agroindústria, senhor Marcos Antônio, foram juntos, numa imersão a quilômetros de Alagoas, em uma visita de intercooperação, em estados da região Norte do Brasil.</p>
                <p>A primeira parada ocorreu em Macapá, capital do Amapá, em uma visita à Cooperativa Bio+Açaí, com o objetivo de promover parcerias e apresentar os produtos produzidos pela Camaragibe, num intercâmbio com instituições do 3º setor da região., momento de muito entusiasmo, troca de experiências e aprendizado.</p>
                <p>Já no segundo dia, a turma partiu de Macapá em sentido Sul do estado do Amapá, por meio de lancha, e visitou comunidades ribeirinhas, banhadas pelo Rio Amazonas. Amapá é um estado pequeno com apenas 16 municípios e só pode ser visitado por meio de transporte aéreo ou fluvial, e nesta imersão, nossa turma percorreu dezenas de ilhotas entre esses municípios, por cerca de 7h, conhecendo pequenos produtores rurais. Na oportunidade, a turma pescou e conheceu um cultivo de açaí e beneficiamento de palmito, tornando a visita rica de cultura, conhecimento e intercooperação.</p>
                <p>No terceiro e último dia, nossos representantes seguiram para uma visita à Biopar, em Santo Antônio do Tauá, no estado do Pará, nossa grande parceira, que possui uma das mais modernas indústrias de biodiesel do norte do país. A visita de cortesia ocorreu com o objetivo de ampliar ainda mais os negócios entre a indústria e nós da Coopaq.</p>
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

export default ImersãoIntercooperação;
