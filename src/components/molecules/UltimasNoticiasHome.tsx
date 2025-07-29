import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/UltimasNoticias.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CardsNoticias from "../atoms/CardsNoticias";

import IMG_BG from "../../assets/ELEMENTOS COOPAQ/IMG_NEWS.png";

import IMG_Assembleia from "../../assets/IG/assembleia geral.png";
import IMG_Valores from "../../assets/IG/valores.png";
import IMG_YT from "../../assets/IG/Se inscreva em nosso canal.png";
import IMG_Capa01 from "../../assets/BreakingNewsCOOPAQ/IMG_Capa01.jpg";
import IMG_Capa02 from "../../assets/News; Dia de Campo/IMG-20240430-WA0041 - Copia.jpg";
import IMG_Capa03 from "../../assets/PedaladaVerdeNews/CapaNewsPedaladaVerde.png";
import IMG_CapaImersão from "../../assets/ImersãoIntercooperação/CapaNewsImersão.jpg";
import IMG_CapaDoação from "../../assets/ReciclaveisMaceio/Capa2.jpg";
import IMG_SIPAT from "../../assets/SIPAT/CAPANews.png";
import IMG_EncontroDeNegocios from "../../assets/EncontroDeNegocios/Capa.png";
import IMG_CapaQualificaCOOPAQ from "../../assets/QualificaCOOPAQ/IMG5.jpg";
import IMG_GestãoeLiderança from "../../assets/GestãoeLiderança/CapaNews.jpg";
import IMG_CafeMulheresCampo from "../../assets/CaféMulheresCampo/CapaUltimasNoticias.jpg";
import IMG_AssembleiaGeralOrdinaria from "../../assets/AssembleiaGeralOrdinaria/capaUltimasNoticias.jpg";
import IMG_PedalCoopaq from "../../assets/PedalCoopaq/capa.jpg";
import IMG_QualificaJovem from "../../assets/QualificaJovem/CapaNews.png";
import IMG_SemetesParaCooperados from "../../assets/SementesParaCooperados/CapaNews.jpeg";
import IMG_Esporte_Ellayny from "../../assets/Esporte-Ellayny/CapaNews.jpg";
import IMG_Autoresponsabilidade from "../../assets/Autorresponsabilidade/CapaNews.jpg";
import IMG_MarceloBrilhante from "../../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/capaNews.jpeg";
import IMG_qualificajovemvisitamfabricadeprocessamentoderesiduosdecoco from "../../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/capaNews.jpeg";
import IMG_arracada2025 from "../../assets/Arrancada2025/capaNews.jpeg";
import IMG_imunizacao from "../../assets/Imunizacao/capa.jpg";
import IMG_matrizdelas from "../../assets/MatrizDelas/capa.jpg";
import IMG_formacaobioeconomia from "../../assets/FormacaoBioeconomia/IMG_formacaobioeconomia.jpeg";
import IMG_manutencaoexpansao from "../../assets/ManutencaoExpansao/capa.jpeg";
import IMG_liderancasrurais from "../../assets/LiderancasRurais/capa.jpeg";

const news = [
  {
    Titulo:
      "Coopaq recebe lideranças rurais",
    Noticias:
      "Encontro reuniu representantes de assentamentos e acampamentos da zona rural do Litoral Norte, com presença do deputado Alfredo Gaspar de Mendonça",
    LeiaMais: "/liderancasrurais",
    imgSrc: IMG_liderancasrurais,
    targetBlank: false,
  },
  {
    Titulo: "Agroindústria Camaragibe passa por manutenção e expansão",
    Noticias:
      "Intervenções estruturais visam ampliar capacidade produtiva e melhorar condições de trabalho para os colaboradores",
    LeiaMais: "/manutencaoexpansao",
    imgSrc: IMG_manutencaoexpansao,
    targetBlank: false,
  },
  {
    Titulo: "Formação em Bioeconomia",
    Noticias:
      "Juventude Coopaq celebra a conclusão do Curso de Formação em Bioeconomia com foco no aproveitamento das cascas de coco",
    LeiaMais: "/formacaoembioeconomia",
    imgSrc: IMG_formacaobioeconomia,
    targetBlank: false,
  },
  {
    Titulo: "Campanha de Imunização",
    Noticias:
      "Coopaq e Agroindústria Camaragibe Realizam Campanha de Imunização contra Doenças Virais",
    LeiaMais: "/imunizacao",
    imgSrc: IMG_imunizacao,
    targetBlank: false,
  },
  {
    Titulo: "Matriz Delas participa",
    Noticias:
      "Matriz Delas participa de Encontro de Mulheres em Assentamentos do Litoral Norte",
    LeiaMais: "/matriz-delas",
    imgSrc: IMG_matrizdelas,
    targetBlank: false,
  },
  {
    Titulo: "Arrancada 2025",
    Noticias: "Uma Jornada de Autoconhecimento e Integração",
    LeiaMais: "/arrancada2025",
    imgSrc: IMG_arracada2025,
    targetBlank: false,
  },
  {
    Titulo:
      "Qualifica Jovem visitam Fábrica de Processamento de Resíduos de Coco",
    Noticias:
      "A experiência foi fundamental para os jovens entenderem os processos do subproduto",
    LeiaMais: "/qualificajovemvisitamfabricadeprocessamentoderesiduosdecoco",
    imgSrc: IMG_qualificajovemvisitamfabricadeprocessamentoderesiduosdecoco,
    targetBlank: false,
  },
  {
    Titulo: "Coach Nacional Marcelo Brilhante",
    Noticias: "Gestão Inicia Programa de Desenvolvimento de Liderança",
    LeiaMais: "/marcelobrilhante",
    imgSrc: IMG_MarceloBrilhante,
    targetBlank: false,
  },
  {
    Titulo: "Autoresponsabilidade COOPAQ",
    Noticias:
      "Time operacional participa de treinamento sobre autorresponsabilidade.",
    LeiaMais: "/autoresponsabilidade",
    imgSrc: IMG_Autoresponsabilidade,
    targetBlank: false,
  },
  {
    Titulo: "ESPORTE",
    Noticias:
      "Apoiando cada vez mais o esporte, Coopaq vira patrocinadora oficial de lutadora de jiu-jítsu.",
    LeiaMais: "/esporteellayny",
    imgSrc: IMG_Esporte_Ellayny,
    targetBlank: false,
  },
  {
    Titulo: "Lançamento do Projeto QUALIFICA JOVEM",
    Noticias: "Capacitando Jovens para um Futuro Sustentável",
    LeiaMais: "/qualificajovem",
    imgSrc: IMG_QualificaJovem,
    targetBlank: false,
  },
  {
    Titulo:
      "Coopaq em parceria com o Governo do Estado Distribui sementes para cooperados",
    Noticias:
      "Parceria visa fortalecer a agricultura local e impulsionar a economia",
    LeiaMais: "/coopaqemparceriacomogov",
    imgSrc: IMG_SemetesParaCooperados,
    targetBlank: false,
  },
  {
    Titulo: "Coopaq participa da 15ª Etapa do Circuito Unidos pela Bike",
    Noticias:
      "Coopaq participa da 15ª Etapa do Circuito Unidos pela Bike, em Catende/PE.",
    LeiaMais: "/pedalcoopaq",
    imgSrc: IMG_PedalCoopaq,
    targetBlank: false,
  },
  {
    Titulo: "Assembleia Geral Ordinária",
    Noticias:
      "Cooperados se reúnem para discutir crescimento e eleger nova diretoria",
    LeiaMais: "/assembleiageralordinaria",
    imgSrc: IMG_AssembleiaGeralOrdinaria,
    targetBlank: false,
  },
  {
    Titulo: "Café com Mulheres do Campo",
    Noticias:
      "Café com Mulheres do Campo é sucesso e marca início dos trabalhos do Matriz Delas, em 2025.",
    LeiaMais: "/cafecommulheresdocampo",
    imgSrc: IMG_CafeMulheresCampo,
    targetBlank: false,
  },
  {
    Titulo: "Gestão e Liderança",
    Noticias:
      "9 colaboradores dos setores administrativos foram capacitados pela mentora Técia Moura.",
    LeiaMais: "/gestãoeliderança",
    imgSrc: IMG_GestãoeLiderança,
    targetBlank: false,
  },
  {
    Titulo: "Qualifica COOPAQ",
    Noticias:
      "Coopaq lança mais novo projeto social para seus agricultores cooperados.",
    LeiaMais: "/qualificacoopaq",
    imgSrc: IMG_CapaQualificaCOOPAQ,
    targetBlank: false,
  },
  {
    Titulo: "Doação de Materiais",
    Noticias: "Coopaq doa materiais recicláveis para cooperativa, em Maceió.",
    LeiaMais: "/doacaodemateriaisreciclaveisparacooperativademaceio",
    imgSrc: IMG_CapaDoação,
    targetBlank: false,
  },
  {
    Titulo: "COOPAQ reúne colaboradores para a SIPAT",
    Noticias:
      "Evento contou com diversos profissionais técnicos que destacaram a importância de um ambiente de trabalho seguro e saudável.",
    LeiaMais: "/SIPAT",
    imgSrc: IMG_SIPAT,
    targetBlank: false,
  },
  {
    Titulo: "Encontro de Negócios",
    Noticias:
      "Coopaq participa de Encontro de Negócios e apresenta nossos produtos.",
    LeiaMais: "/encontrodenegocios",
    imgSrc: IMG_EncontroDeNegocios,
    targetBlank: false,
  },
  {
    Titulo: "Imersão de Intercooperação",
    Noticias:
      "Colaboradores da Coopaq fazem imersão de intercooperação, na região Norte do Brasil.",
    LeiaMais: "/imersaointercooperacao",
    imgSrc: IMG_CapaImersão,
    targetBlank: false,
  },
  {
    Titulo: "Pedalada Verde",
    Noticias:
      "Coopaq reúne mais de mil ciclistas na 2ª edição da Pedalada Verde.",
    LeiaMais: "/pedaladaverde",
    imgSrc: IMG_Capa03,
    targetBlank: false,
  },
  {
    Titulo: "“Dia de Campo” no Assentamento Boa União ",
    Noticias:
      "O evento que tem objetivo de fomentar a capacitação do produtor rural (...)",
    LeiaMais: "/diadecampo",
    imgSrc: IMG_Capa02,
    targetBlank: false,
  },
  {
    Titulo: "Decom, COOPAQ",
    Noticias:
      "Coopaq e Camaragibe fazem Blit's dos EPI's, em alusão à Campanha Abril Verde",
    LeiaMais: "/campanhaabrilverde",
    imgSrc: IMG_Capa01,
    targetBlank: false,
  },
  {
    Titulo: "📋 Ei, anota aí!",
    Noticias: `Dia 24 de março, nossa Assembleia Geral Ordinária. Contamos com sua presença!`,
    LeiaMais: "https://www.instagram.com/p/C4aoFq-uTJj/",
    imgSrc: IMG_Assembleia,
  },
  {
    Titulo: "COOPAQAL",
    Noticias:
      "Descubra nossa missão, visão e valores, fundamentos que moldam cada passo em direção ao nosso propósito.",
    LeiaMais: "https://www.instagram.com/p/C0O4cCSr5o7/?img_index=1",
    imgSrc: IMG_Valores,
    targetBlank: true,
  },
  {
    Titulo: "Dá um Google 👉🏾 COOPAQAL",
    Noticias:
      "Vem conhecer um pouco mais da gente, por meio do nosso conteúdo no Youtube",
    LeiaMais: "https://www.instagram.com/p/C0CprWyrEuR/",
    imgSrc: IMG_YT,
    targetBlank: true,
  },
];

function UltimasNoticiasHome() {
  return (
    <div className="container containerNEWS">
      <div className="container-fluid">
        <span className="fs-1 text-COOPAQ-green-white">Últimas Notícias</span>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {news.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardsNoticias
                Titulo={item.Titulo}
                Noticias={item.Noticias}
                LeiaMais={
                  <a
                    href={item.LeiaMais || "#"}
                    target={item.targetBlank ? "_blank" : "_self"}
                    className="no-underline text-COOPAQ-green-black font-demibold"
                  >
                    LEIA MAIS
                    <i className="bi bi-arrow-right-short p-2 custom-color-black"></i>
                  </a>
                }
                imgSrc={item.imgSrc || IMG_BG}
                link={item.LeiaMais || "#"}
                targetBlank={item.targetBlank}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default UltimasNoticiasHome;