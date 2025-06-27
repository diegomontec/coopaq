import { useState } from 'react';

import { Carousel as BootstrapCarousel, CarouselItem } from 'react-bootstrap';

// import IMG_Pedalada from '../../assets/Carrousel/BannerPedalada.jpg'
import IMG_Carousel01 from '../../assets/Carrousel/BANNER_SITECOOPAQCarrossel-01.png';
import IMG_Carousel02 from '../../assets/Carrousel/BANNER_SITECOOPAQCarrossel-02.png';
import IMG_Carousel03 from '../../assets/Carrousel/BANNER_SITECOOPAQCarrossel-03.png';

const items = [
  // {
  //   src: IMG_Pedalada,
  //   altText: '2° Pedalada Verde',
  //   key: 1,
  //   href: 'https://forms.gle/CzyZJGJTHfieaePf8',
  // },
  {
    src: IMG_Carousel01,
    altText: 'COOPAQ',
    key: 1,
    href: '',
  },
  {
    src: IMG_Carousel02,
    altText: 'Nossos Produtos',
    key: 2,
    href: 'https://www.instagram.com/coopaqal/',
  },
  {
    src: IMG_Carousel03,
    altText: 'Nosso Canal no Youtube',
    key: 3,
    href: 'https://www.youtube.com/@COOPAQAL',
  },
];

function Carousel() {
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
    <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect}>
      {items.map((item, index) => (
        <CarouselItem key={item.key} onClick={() => handleItemClick(index)}>
          <img className="d-block w-100" src={item.src} alt={item.altText} style={{ cursor: 'pointer' }} />
        </CarouselItem>
      ))}
    </BootstrapCarousel>
  );
}

export default Carousel;
