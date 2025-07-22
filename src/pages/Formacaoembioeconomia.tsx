import { useState } from "react";
import { Carousel as BootstrapCarousel, CarouselItem } from "react-bootstrap";

import imageNews from "../../src/assets/FormacaoBioeconomia/imagem_dez.jpeg";

import IMG_1 from "../assets/FormacaoBioeconomia/imagem_um.jpeg";
import IMG_2 from "../assets/FormacaoBioeconomia/imagem_dois.jpeg";
import IMG_3 from "../assets/FormacaoBioeconomia/imagem_tres.jpeg";
import IMG_4 from "../assets/FormacaoBioeconomia/imagem_quatro.jpeg";
import IMG_5 from "../assets/FormacaoBioeconomia/imagem_cinco.jpeg";
import IMG_6 from "../assets/FormacaoBioeconomia/imagem_seis.jpeg";
import IMG_7 from "../assets/FormacaoBioeconomia/imagem_sete.jpeg";
import IMG_8 from "../assets/FormacaoBioeconomia/imagem_oito.jpeg";
import IMG_9 from "../assets/FormacaoBioeconomia/imagem_nove.jpeg";
import IMG_10 from "../assets/FormacaoBioeconomia/imagem_onze.jpeg";
import IMG_11 from "../assets/FormacaoBioeconomia/imagem_doze.jpeg";
import IMG_12 from "../assets/FormacaoBioeconomia/imagem_treze.jpeg";
import IMG_14 from "../assets/FormacaoBioeconomia/imagem_quinze.jpeg";
import IMG_15 from "../assets/FormacaoBioeconomia/imagem_dezeseis.jpeg";
import IMG_16 from "../assets/FormacaoBioeconomia/imagem_dezesete.jpeg";

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
  { src: IMG_14, altText: "", key: 14, href: "" },
  { src: IMG_15, altText: "", key: 15, href: "" },
  { src: IMG_16, altText: "", key: 16, href: "" },
];

function Formacaoembioeconomia() {
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
            <em>⏲️ 21/07/2025</em>
          </p>
          <h1 className="fs-2 text-COOPAQ-orange text-center font-demibold">
            Juventude Coopaq celebra a conclusão do Curso de Formação em
            Bioeconomia com foco no aproveitamento das cascas de coco.
          </h1>
          <p className="fs-5 text-justify fst-italic text-center">
            Ao todo, 50 jovens foram capacitados para atuarem no mercado com o
            sub produto que antes descartado.
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
                  No último sábado, 19 de julho, a COOPAQ realizou a cerimônia
                  de entrega dos certificados do Curso de Formação em
                  Bioeconomia: Aproveitamento Sustentável das Cascas de Coco,
                  marcando o encerramento da primeira edição do Projeto
                  Qualifica Jovem, iniciativa integrante do Programa de
                  Capacitações Qualifica Coopaq.
                </p>
                <p>
                  O projeto foi idealizado pelo presidente da COOPAQ, Romullo
                  Dantas, com o objetivo de capacitar jovens entre 16 e 29 anos
                  – filhos e netos de cooperados – para atuarem como agentes de
                  transformação em suas comunidades. Com o apoio do Programa
                  Selo Biocombustível Social, a iniciativa reforça o compromisso
                  da cooperativa com o desenvolvimento local, a sustentabilidade
                  e a valorização da juventude rural.
                </p>
                <p>
                  Lançado em abril deste ano, o curso foi ofertado nos formatos
                  presencial e on-line, com foco na formação técnica e ambiental
                  dos alunos. Durante três meses, os participantes mergulharam
                  em conteúdos teóricos e práticos, aprendendo sobre
                  alternativas sustentáveis para o reaproveitamento de resíduos,
                  com destaque para as cascas de coco – um subproduto abundante
                  na região.
                </p>
                <p>
                  Uma das experiências mais marcantes da formação foi a visita
                  técnica à indústria Ecoeponto, em Coruripe, onde os alunos
                  puderam acompanhar de perto todo o processo de transformação
                  do coco em produtos como carvão e fibra de coco. A atividade
                  contribuiu significativamente para a consolidação dos
                  conhecimentos adquiridos em sala de aula e despertou nos
                  jovens o interesse por soluções empreendedoras e sustentáveis.
                </p>
                <blockquote>
                  “Ao final dessa jornada, o que celebramos não é apenas a
                  conclusão de um curso, mas a abertura de novas possibilidades.
                  Nossos alunos agora têm em mãos conhecimento e visão para
                  transformar o que antes era considerado descarte em
                  oportunidades reais de trabalho e geração de renda”, destacou
                  o presidente Romullo Dantas.
                </blockquote>
                <p>
                  A cerimônia de encerramento reuniu parceiros do projeto e
                  autoridades locais, que prestigiaram os formandos e reforçaram
                  a importância de iniciativas como esta para o fortalecimento
                  do cooperativismo e a valorização do meio ambiente.
                </p>
                <p>
                  Agradecemos à prefeita de Porto Calvo Eronita Sposito e ao
                  responsável pelo Setor de Transportes, por ter dado total
                  apoio aos jovens da comunidade rural da cidade,
                  disponibilizando um veiculo durante todo o curso, para os
                  alunos se locomoverem com tranquilidade e segurança. Gratidão!
                </p>
                <p>
                  A COOPAQ segue firme em seu propósito de transformar vidas por
                  meio da educação, inovação e sustentabilidade, e o Projeto
                  Qualifica Jovem é apenas o começo de uma série de ações
                  voltadas à formação da juventude rural.
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

export default Formacaoembioeconomia;
