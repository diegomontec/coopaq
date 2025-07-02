import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../assets/ReciclaveisMaceio/Capa.jpg';

import IMG_1 from '../assets/ReciclaveisMaceio/IMG0.jpg';
import IMG_2 from '../assets/ReciclaveisMaceio/IMG1.jpg';
import IMG_3 from '../assets/ReciclaveisMaceio/Capa.jpg';

const items = [
  { src: IMG_1, altText: '', key: 1, href: '' },
  { src: IMG_2, altText: '', key: 2, href: '' },
  { src: IMG_3, altText: '', key: 3, href: '' },
];


function ReciclaveisMaceio() {

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
          <p className='pt-5 mb-0'><em>⏲️ 03/09/2024</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>Coopaq doa materiais recicláveis para cooperativa, em Maceió</h1>
          <p className='fs-6 text-justify text-center fst-italic'>Aproximadamente 100kg de resíduos compostos por papéis, papelões, plásticos, PVC, ferro e eletrônicos, foram entregues para coleta seletiva e reciclagem à Cooplum</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img loading='lazy' src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '800px'}} /> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>A Coopaq - Cooperativa dos Agricultores Qualificados doou aproximadamente 100kg de resíduos sólidos à Cooperativa de Recicladores de Lixo Urbano de Maceió - Cooplum. A iniciativa do Setor de TI - Tecnologia da Informação da Coopaq, tem o objetivo de se aprimorar a cada ano e é reforçada por meio de outras ações, que dizem respeito à agenda de responsabilidade socioambiental da Cooperativa.</p>
                <p>No volume de recicláveis doados, destaca-se papéis, papelões, plásticos, PVC, ferro, além de eletrônicos. A cooperativa beneficiada é habilitada por meio de um edital público, lançado pela Prefeitura de Maceió.</p>
                <p>De acordo com Pedro Mendes, engenheiro da computação da Coopaq, por sermos uma empresa com princípio ESG - sigla traduzida para o português, empresa que desenvolve um conjunto de ações voltados à preocupação ambiental, social e governança, a gente tem uma responsabilidade maior nas nossas práticas.</p>
                <p>“A primeira seria a responsabilidade ambiental; fazendo a doação desses resíduos para a reciclagem, vamos ajudar a reduzir a quantidade de materiais que iriam para aterro sanitário. Dessa forma, estamos contribuindo para a diminuição da poluição e do impacto ambiental. Sem falar na responsabilidade social, que além dos benefícios ambientais, essa doação dos resíduos para a reciclagem pode ter impacto social positivo. Como a gente doa para uma cooperativa de reciclagem, a empresa já trabalha com isso e já apoia comunidades carentes com outros projetos sociais. Sem falar na imagem e reputação, porque a gente está demonstrando compromisso com a reciclagem e a sustentabilidade, entre diversos outros benefícios a longo prazo, tanto para o planeta, quanto para a nossa imagem", informou Pedro.</p>
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
    </div>
  )
}

export default ReciclaveisMaceio;
