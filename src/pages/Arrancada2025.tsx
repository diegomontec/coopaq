import { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

import imageNews from '../assets/Arrancada2025/capa.jpeg';

import IMG_1 from '../assets/Arrancada2025/WhatsApp Image 2025-06-23 at 10.53.20.jpeg';
import IMG_2 from '../assets/Arrancada2025/WhatsApp Image 2025-06-23 at 10.54.44.jpeg';
import IMG_3 from '../assets/Arrancada2025/WhatsApp Image 2025-06-23 at 10.56.00.jpeg';
import IMG_4 from '../assets/Arrancada2025/WhatsApp Image 2025-06-23 at 11.01.54 (1).jpeg';
import IMG_5 from '../assets/Arrancada2025/WhatsApp Image 2025-06-23 at 11.01.54.jpeg';
import IMG_6 from '../assets/Arrancada2025/WhatsApp Image 2025-06-23 at 11.01.55 (1).jpeg';
import IMG_7 from '../assets/Arrancada2025/WhatsApp Image 2025-06-23 at 11.01.55.jpeg';
import IMG_8 from '../assets/Arrancada2025/capa.jpeg';

const items = [
    { src: IMG_1, altText: '', key: 1, href: '' },
    { src: IMG_2, altText: '', key: 2, href: '' },
    { src: IMG_3, altText: '', key: 3, href: '' },
    { src: IMG_4, altText: '', key: 4, href: '' },
    { src: IMG_5, altText: '', key: 5, href: '' },
    { src: IMG_6, altText: '', key: 6, href: '' },
    { src: IMG_7, altText: '', key: 7, href: '' },
    { src: IMG_8, altText: '', key: 8, href: '' }
];


function Arrancada2025() {

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
          <p className='pt-5 mb-0'><em>⏲️ 23/06/2025</em></p>
          <h1 className='fs-1 text-COOPAQ-orange text-center font-demibold'>Arrancada 2025: Uma Jornada de Autoconhecimento e Integração</h1>
          <p className='fs-6 text-justify text-center fst-italic'>Coopaq e Camaragibe reuniram colaboradores para a 2ª edição do maior evento interno, com o objetivo de fortalecer a cultura institucional</p>
  
          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img src={imageNews} alt="imageNews" className='w-100 float-md-start me-md-3 mb-3' style={{maxWidth: '700px'}} loading='lazy'/> 
              </div>

                <p className='pt-2 pb-2 mb-0'><em>Daniele Sores, assessoria Coopaq</em></p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>A Coopaq e a Agroindústria Camaragibe realizaram a Arrancada 2025, nos dias 17 e 18. Evento interno para fortalecer a cultura das empresas.</p>
                <p>O primeiro dia contou com a imersão "Além do Uniforme", conduzida por Téssia Moura. O evento trouxe reflexões importantes sobre atitudes no ambiente de trabalho, cultura organizacional e o papel de cada colaborador na construção de um time forte e alinhado.</p>
                <p>Os colaboradores participaram de dinâmicas práticas, exercícios e reflexões voltadas à autoconsciência e autoliderança. O objetivo foi fortalecer o desenvolvimento pessoal e coletivo, promovendo uma cultura organizacional mais humana e consciente.</p>
                <p>No segundo dia, a palestra do especialista Gustavo Botelho aprofundou a imersão no autoconhecimento e na autoaceitação. Os colaboradores vivenciaram momentos de integração, descontração e valorização das equipes.</p>
                <p>A Noite do Milho marcou o encerramento da Arrancada 2025, com uma festa cheia de alegria, união e comidas típicas. Os gestores foram especialmente agradecidos por proporcionar essa experiência rica e investir no bem-estar e desenvolvimento profissional dos colaboradores.</p>
                <p>A Arrancada 2025 reforça o compromisso da Coopaq e Agroindústria Camaragibe com as pessoas e com o propósito que as une. Os colaboradores saíram da jornada ainda mais conectados e motivados para o que vem pela frente.</p>
                <p className='fw-semibold'>Confira os registros do evento</p>
                <p>De acordo com a gestora de processos, Ilva Dantas: <span className='fst-italic'>“A Arrancada 2025 foi um sucesso, com momentos de aprendizado, integração e celebração. Nós investimos no desenvolvimento dos colaboradores e na construção de um ambiente de trabalho forte e humano porque sabemos que o nosso crescimento é conjunto. Se as empresas crescem todos crescem”</span>, afirmou.</p>
                
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
    </div>
  )
}

export default Arrancada2025;
