import { useState } from "react";
import { Carousel as BootstrapCarousel, CarouselItem } from "react-bootstrap";

import imageNews from "../../src/assets/Imunizacao/capa.jpg";

import IMG_1 from "../assets/Imunizacao/066d26f1-a4ec-42a2-b22a-eba182bb8fd8.jpg";
import IMG_2 from "../assets/Imunizacao/0ac9f23a-8c97-4be0-ae3a-00695b7c6861.jpg";
import IMG_3 from "../assets/Imunizacao/42dc11d1-16cc-4dc7-a088-0b59f6ea9739.jpg";
import IMG_4 from "../assets/Imunizacao/5c12dc8c-2ad7-457b-9ec3-d0b924327f7c.jpg";
import IMG_5 from "../assets/Imunizacao/84b132fb-1675-4724-a55a-1051a93e8ac0.jpg";
import IMG_6 from "../assets/Imunizacao/bbbffd5a-4cda-406c-a068-a53be675f087.jpg";

const items = [
  { src: IMG_1, altText: "", key: 1, href: "" },
  { src: IMG_2, altText: "", key: 2, href: "" },
  { src: IMG_3, altText: "", key: 3, href: "" },
  { src: IMG_4, altText: "", key: 4, href: "" },
  { src: IMG_5, altText: "", key: 5, href: "" },
  { src: IMG_6, altText: "", key: 6, href: "" },
];

function Imunizacao() {
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
            <em>⏲️ 01/07/2025</em>
          </p>
          <h1 className="fs-2 text-COOPAQ-orange text-center font-demibold">
            Coopaq e Agroindústria Camaragibe Realizam Campanha de Imunização
            contra Doenças Virais.
          </h1>
          <p className="fs-5 text-justify fst-italic">
            Sucesso na campanha de vacinação: 80% dos trabalhadores protegidos
            contra 5 Doenças.
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
                <em>Ascom Daniele Soares</em>
              </p>

              <div className="fs-5 m-1" style={{ textAlign: "justify" }}>
                <p>
                  A Cooperativa dos Agricultores Qualificados e a Agroindústria
                  Camaragibe, em parceria com a Secretaria Municipal de Saúde de
                  Matriz de Camaragibe, realizaram uma ação de atualização
                  vacinal voltada para seus colaboradores dos setores
                  administrativo, industrial e construção civil. A iniciativa
                  teve como objetivo ampliar o acesso à imunização para os
                  profissionais que, devido à rotina de trabalho, não priorizam
                  a vacinação.
                </p>
                <p>
                  Mais de 80% dos trabalhadores foram vacinados contra doenças
                  virais como influenza, DT (Difteria e Tétano), tríplice viral
                  (Sarampo, Caxumba e Rubéola), febre amarela e hepatite B. A
                  ação foi realizada no próprio Complexo, facilitando o
                  atendimento aos colaboradores.
                </p>
                <p>
                  A atividade foi idealizada pelo setor de Recursos Humanos e
                  integra o compromisso da presidência com o bem-estar dos
                  colaboradores. A campanha de imunização é um exemplo do
                  compromisso da empresa com a saúde e segurança de seus
                  funcionários.
                </p>

                <strong>Parceria eficaz</strong>

                <p>
                  A parceria entre a Coopaq, Agroindústria Camaragibe e a
                  Secretaria Municipal de Saúde de Matriz de Camaragibe permitiu
                  que a campanha de imunização fosse realizada com sucesso,
                  garantindo a proteção dos colaboradores contra doenças virais.
                </p>

                <strong>Compromisso com a saúde</strong>

                <p>
                  A Coopaq e a Agroindústria Camaragibe demonstram seu
                  compromisso com a saúde e segurança de seus funcionários,
                  investindo em ações que promovam o bem-estar e a qualidade de
                  vida no trabalho.
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

export default Imunizacao;
