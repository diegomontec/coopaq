import { useState } from "react";
import { Carousel as BootstrapCarousel, CarouselItem } from "react-bootstrap";

import imageNews from "../../src/assets/MatrizDelas/capa.jpg";

import IMG_1 from "../assets/MatrizDelas/48fbc9e9-e82a-41dd-8e69-ad083c6c3211.jpg";
import IMG_2 from "../assets/MatrizDelas/afe46eec-6436-43b5-ab6a-d425dfc433f3.jpg";
import IMG_3 from "../assets/MatrizDelas/c43d065e-84db-4cd7-8c7a-34aedd5388ec.jpg";
import IMG_4 from "../assets/MatrizDelas/d2ed172f-bffe-4a37-9a51-8015ce52830f.jpg";
import IMG_5 from "../assets/MatrizDelas/ee11985d-4da2-475a-8ad3-1d4e1c2514b9.jpg";
import IMG_6 from "../assets/MatrizDelas/f8a0b0c2-406f-4dbd-ad54-6c339c90ee0f.jpg";

const items = [
  { src: IMG_1, altText: "", key: 1, href: "" },
  { src: IMG_2, altText: "", key: 2, href: "" },
  { src: IMG_3, altText: "", key: 3, href: "" },
  { src: IMG_4, altText: "", key: 4, href: "" },
  { src: IMG_5, altText: "", key: 5, href: "" },
  { src: IMG_6, altText: "", key: 6, href: "" },
];

function MatrizDelas() {
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
            <em>⏲️ 01/07/2024</em>
          </p>
          <h1 className="fs-2 text-COOPAQ-orange text-center font-demibold">
            Matriz Delas participa de Encontro de Mulheres em Assentamentos do
            Litoral Norte.
          </h1>
          {/* <p className="fs-5 text-justify fst-italic">
            Sucesso na campanha de vacinação: 80% dos trabalhadores protegidos
            contra 5 Doenças.
          </p> */}

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
                  Representantes do projeto social Matriz Delas participaram de
                  um encontro de mulheres no Assentamento Jubileu, em São Miguel
                  dos Milagres, litoral Norte, na segunda-feira (1). A ação,
                  realizada pela Comissão Pastoral da Terra - CPT, reuniu
                  mulheres de cinco comunidades da região: Jubileu, Padre
                  Alexander, Quilombo dos Palmares, Domingas e Lucena.
                </p>
                <p>
                  Durante o encontro, as mulheres compartilharam seus anseios,
                  desejos e necessidades por meio de rodas de conversa e
                  dinâmicas. A representante do Matriz Delas, Daniele Soares,
                  realizou uma escuta qualificada e anotou as demandas para
                  viabilizar parcerias com as mulheres. Além disso, foram
                  pré-agendados encontros futuros para análise mais detalhada de
                  cada caso.
                </p>
                <strong>Fortalecendo a Voz das Mulheres</strong>
                <p>
                  O encontro teve como objetivo fortalecer a voz das mulheres
                  nos assentamentos e promover ações que atendam às suas
                  necessidades específicas. A parceria entre o Matriz Delas e a
                  CPT busca empoderar as mulheres e melhorar a qualidade de vida
                  nas comunidades rurais.
                </p>

                <strong>Próximos Passos</strong>

                <p>
                  Com base nas demandas apresentadas, o Matriz Delas trabalhará
                  em parceria com as lideranças femininas para desenvolver
                  soluções que atendam às necessidades das mulheres nos
                  assentamentos. O projeto visa promover a autonomia e o
                  empoderamento das mulheres, contribuindo para o
                  desenvolvimento sustentável das comunidades.
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

export default MatrizDelas;
