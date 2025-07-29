import { useState } from "react";
import { Carousel as BootstrapCarousel, CarouselItem } from "react-bootstrap";

import imageNews from "../assets/LiderancasRurais/capa.jpeg";

import IMG_1 from "../assets/LiderancasRurais/img_um.jpeg";
import IMG_2 from "../assets/LiderancasRurais/img_dois.jpeg";
import IMG_3 from "../assets/LiderancasRurais/img_tres.jpeg";
import IMG_4 from "../assets/LiderancasRurais/img_quatro.jpeg";
import IMG_5 from "../assets/LiderancasRurais/img_cinco.jpeg";
import IMG_6 from "../assets/LiderancasRurais/img_seis.jpeg";
import IMG_7 from "../assets/LiderancasRurais/img_sete.jpeg";
import IMG_8 from "../assets/LiderancasRurais/img_oito.jpeg";
import IMG_9 from "../assets/LiderancasRurais/img_nove.jpeg";
import IMG_10 from "../assets/LiderancasRurais/img_dez.jpeg";
import IMG_11 from "../assets/LiderancasRurais/img_onze.jpeg";
import IMG_12 from "../assets/LiderancasRurais/img_doze.jpeg";

const items = [
  { src: IMG_1, altText: "", key: 1, href: "" },
  { src: IMG_2, altText: "", key: 2, href: "" },
  { src: IMG_3, altText: "", key: 3, href: "" },
  { src: IMG_4, altText: "", key: 4, href: "" },
  { src: IMG_5, altText: "", key: 5, href: "" },
  { src: IMG_6, altText: "", key: 6, href: "" },
  { src: IMG_7, altText: "", key: 7, href: "" },
  { src: IMG_8, altText: "", key: 8, href: "" },
  { src: IMG_9, altText: "", key: 9, href: "" },
  { src: IMG_10, altText: "", key: 10, href: "" },
  { src: IMG_11, altText: "", key: 11, href: "" },
  { src: IMG_12, altText: "", key: 12, href: "" },
];

function LiderancasRurais() {
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
            <em>⏲️ 28/07/2025</em>
          </p>
          <h1 className="fs-2 text-COOPAQ-orange text-center font-demibold">
            Coopaq recebe lideranças rurais e reafirma compromisso com a
            agricultura familiar.
          </h1>
          <p className="fs-5 text-justify fst-italic">
            Encontro reuniu representantes de assentamentos e acampamentos da
            zona rural do Litoral Norte, com presença do deputado Alfredo Gaspar
            de Mendonça, em um café da manhã
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
                  Na manhã deste domingo (27), a sede da Cooperativa dos
                  Agricultores Qualificados foi palco de um importante encontro
                  com lideranças de assentamentos, acampamentos e fazendas da
                  zona rural do Litoral Norte. O momento, que ocorreu durante um
                  café da manhã com o presidente da cooperativa, Romulo Dantas e
                  diretores, teve como objetivo ouvir as demandas dos
                  representantes, alinhar ações futuras e fortalecer o
                  compromisso da entidade com a agricultura familiar.
                </p>
                <p>
                  Durante o encontro, os participantes debateram estratégias de
                  desenvolvimento sustentável para a região, com ênfase na
                  diversificação das culturas agrícolas além da tradicional
                  coqueicultura. A proposta é ampliar o leque de possibilidades
                  para os agricultores locais, garantindo maior segurança
                  alimentar e geração de renda.
                </p>
                <p>
                  A reunião contou também com a presença do deputado federal
                  Alfredo Gaspar de Mendonça, que destacou projetos
                  parlamentares voltados ao fortalecimento da agricultura
                  familiar. O deputado relembrou ainda políticas públicas que já
                  impactaram positivamente o setor e reafirmou seu compromisso
                  com os pequenos produtores da região.
                </p>

                <blockquote>
                  “Esse tipo de encontro é essencial para construir um plano de
                  ação que esteja alinhado com a realidade do campo. Reunir os
                  líderes rurais e dialogar diretamente com eles mostra o quanto
                  essa gestão é participativa e comprometida”, destacou Romullo
                  Dantas.
                </blockquote>

                <p>
                  A atual gestão da Cooperativa Qualificados tem se destacado
                  pelo incentivo à organização comunitária, à produção
                  diversificada e pelo fomento ao cooperativismo como
                  instrumento de transformação econômica e social no campo.
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

export default LiderancasRurais;
