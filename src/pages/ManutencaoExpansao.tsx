import { useState } from "react";
import { Carousel as BootstrapCarousel, CarouselItem } from "react-bootstrap";

import imageNews from "../../src/assets/ManutencaoExpansao/capa.jpeg";

import IMG_1 from "../../src/assets/ManutencaoExpansao/img_um.jpeg"
import IMG_2 from "../../src/assets/ManutencaoExpansao/img_dois.jpeg";
import IMG_3 from "../../src/assets/ManutencaoExpansao/img_tres.jpeg";
import IMG_4 from "../../src/assets/ManutencaoExpansao/img_quatro.jpeg";

const items = [
  { src: IMG_1, altText: "", key: 1, href: "" },
  { src: IMG_2, altText: "", key: 2, href: "" },
  { src: IMG_3, altText: "", key: 3, href: "" },
  { src: IMG_4, altText: "", key: 4, href: "" },
];

function ManutencaoExpansao() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  const handleItemClick = (itemIndex: number) => {
    if (items[itemIndex].href) {
      window.open(items[itemIndex].href, "_blank");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="container-fluid font-regular">
          <p className="pt-5 mb-0">
            <em>⏲️ 24/07/2025</em>
          </p>
          <h1 className="fs-2 text-COOPAQ-orange text-center font-demibold">
            Agroindústria Camaragibe passa por manutenção e expansão durante
            recesso operacional.
          </h1>
          <p className="fs-5 text-justify fst-italic">
            Intervenções estruturais visam ampliar capacidade produtiva e
            melhorar condições de trabalho para os colaboradores.
          </p>

          <div className="row">
            <div className="">
              <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                <img
                  loading="lazy"
                  src={imageNews}
                  alt="imageNews"
                  className="w-75 float-md-start me-md-3 mb-3"
                  style={{ maxWidth: "800px" }}
                />
              </div>

              <p className="pt-2 pb-2 mb-0">
                <em>Por Daniele Soares, Ascom Coopaq/Camaragibe</em>
              </p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>
                  Com o time operário em recesso, a Agroindústria Camaragibe
                  aproveita o mês de julho para realizar importantes obras de
                  manutenção e expansão em sua estrutura. Desde o início do mês,
                  a movimentação no chão de fábrica deu lugar às equipes
                  técnicas dos Setores de Manutenção e Construção Civil, que
                  assumiram a missão de revitalizar os espaços e preparar a
                  planta para um novo ciclo de produção, enquanto o time
                  operacional descansa.
                </p>
                <p>
                  As intervenções contemplam ampliação da área útil, melhoria do
                  fluxo operacional e maior conforto para os colaboradores.
                  Entre os serviços executados estão obras de alvenaria,
                  impermeabilização, emassamento e adequações conforme as Normas
                  Regulamentadoras (NRs) de segurança do trabalho.
                </p>
                <p>
                  A operação está sob a supervisão de dois engenheiros: Júlio
                  Cézar, responsável pelas equipes de manutenção mecânica,
                  elétrica, caldeiraria e soldagem; e Wesley Araújo, que lidera
                  as frentes de construção civil voltadas à parte estrutural.
                </p>
                <p>
                  A previsão é que as atividades industriais sejam retomadas no
                  dia 30 de julho, com a agroindústria pronta para iniciar mais
                  um período de safra, agora com mais eficiência e melhores
                  condições para toda a equipe.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-9">
              <BootstrapCarousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                className="mx-auto"
              >
                {items.map((item, index) => (
                  <CarouselItem
                    key={item.key}
                    onClick={() => handleItemClick(index)}
                  >
                    <img
                      loading="lazy"
                      className="d-block w-100"
                      src={item.src}
                      alt={item.altText}
                      style={{ cursor: "pointer" }}
                    />
                  </CarouselItem>
                ))}
              </BootstrapCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManutencaoExpansao;
