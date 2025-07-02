// import { Carousel } from 'react-bootstrap';
// import { useMemo } from 'react';

import '../../styles/UltimasNoticias.css';
import CardsNoticias from '../atoms/CardsNoticias';
import IMG_BG from '../../assets/ELEMENTOS COOPAQ/IMG_NEWS.png';

import IMG_Assembleia from '../../assets/IG/assembleia geral.png';
import IMG_Valores from '../../assets/IG/valores.png'
import IMG_YT from '../../assets/IG/Se inscreva em nosso canal.png'
import IMG_Capa01 from '../../assets/BreakingNewsCOOPAQ/IMG_Capa01.jpg'
import IMG_Capa02 from '../../assets/News; Dia de Campo/IMG-20240430-WA0041 - Copia.jpg'
import IMG_Capa03 from '../../assets/PedaladaVerdeNews/CapaNewsPedaladaVerde.png'
import IMG_CapaImersão from '../../assets/ImersãoIntercooperação/CapaNewsImersão.jpg'
import IMG_CapaDoação from '../../assets/ReciclaveisMaceio/Capa2.jpg'
import IMG_SIPAT from '../../assets/SIPAT/CAPANews.png'
import IMG_EncontroDeNegocios from '../../assets/EncontroDeNegocios/Capa.png'
import IMG_CapaQualificaCOOPAQ from '../../assets/QualificaCOOPAQ/IMG5.jpg'
import IMG_GestãoeLiderança from '../../assets/GestãoeLiderança/CapaNews.jpg'
import IMG_CafeMulheresCampo from '../../assets/CaféMulheresCampo/CapaUltimasNoticias.jpg'
import IMG_AssembleiaGeralOrdinaria from '../../assets/AssembleiaGeralOrdinaria/capaUltimasNoticias.jpg'
import IMG_PedalCoopaq from '../../assets/PedalCoopaq/capa.jpg'
import IMG_QualificaJovem from '../../assets/QualificaJovem/CapaNews.png'
import IMG_SemetesParaCooperados from '../../assets/SementesParaCooperados/CapaNews.jpeg'
import IMG_Esporte_Ellayny from '../../assets/Esporte-Ellayny/CapaNews.jpg' 
import IMG_Autoresponsabilidade from '../../assets/Autorresponsabilidade/CapaNews.jpg'
import IMG_MarceloBrilhante from '../../assets/GESTÃO INICIA PROGRAMA DE DESENVOLVIMENTO DE LIDERANÇA COM COACH NACIONAL MARCELO BRILHANTE/capaNews.jpeg'
import IMG_qualificajovemvisitamfabricadeprocessamentoderesiduosdecoco from "../../assets/Estudantes do Qualifica Jovem visitam fábrica de processamento de resíduos de coco no Litoral Sul/capaNews.jpeg";
import IMG_arracada2025 from '../../assets/Arrancada2025/capaNews.jpeg';

const news = [
  {
    Titulo: "Arrancada 2025",
    Noticias: "🚀💪🏽 Uma Jornada de Autoconhecimento e Integração",
    LeiaMais: "/arrancada2025",
    imgSrc: IMG_arracada2025,
    targetBlank: false
  },
  {
    Titulo: "Qualifica Jovem visitam Fábrica de Processamento de Resíduos de Coco",
    Noticias: "🌱🥥 A experiência foi fundamental para os jovens entenderem os processos do subproduto",
    LeiaMais: "/qualificajovemvisitamfabricadeprocessamentoderesiduosdecoco",
    imgSrc: IMG_qualificajovemvisitamfabricadeprocessamentoderesiduosdecoco,
    targetBlank: false
  },
  {
    Titulo: "Coach Nacional Marcelo Brilhante",
    Noticias: "🚀📈 Gestão Inicia Programa de Desenvolvimento de Liderança",
    LeiaMais: "/marcelobrilhante",
    imgSrc: IMG_MarceloBrilhante,
    targetBlank: false
  },
  {
    Titulo: "Autoresponsabilidade COOPAQ",
    Noticias: "🌱🥥 Time operacional participa de treinamento sobre autorresponsabilidade.",
    LeiaMais: "/autoresponsabilidade",
    imgSrc: IMG_Autoresponsabilidade,
    targetBlank: false
  },
  {
    Titulo: "ESPORTE",
    Noticias: "🏆💪🏽 Apoiando cada vez mais o esporte, Coopaq vira patrocinadora oficial de lutadora de jiu-jítsu.",
    LeiaMais: "/esporteellayny",
    imgSrc: IMG_Esporte_Ellayny,
    targetBlank: false
  },
  {
    Titulo: "Lançamento do Projeto QUALIFICA JOVEM",
    Noticias: "🦾💎 Capacitando Jovens para um Futuro Sustentável",
    LeiaMais: "/qualificajovem",
    imgSrc: IMG_QualificaJovem,
    targetBlank: false
  }, 
  {
    Titulo: "Coopaq em parceria com o Governo do Estado Distribui sementes para cooperados",
    Noticias: "🌱👨🏽‍🌾 Parceria visa fortalecer a agricultura local e impulsionar a economia",
    LeiaMais: "/coopaqemparceriacomogov",
    imgSrc: IMG_SemetesParaCooperados,
    targetBlank: false
  },
  {
    Titulo: "Coopaq participa da 15ª Etapa do Circuito Unidos pela Bike",
    Noticias: "🚴🦾 Coopaq participa da 15ª Etapa do Circuito Unidos pela Bike, em Catende/PE.",
    LeiaMais: "/pedalcoopaq",
    imgSrc: IMG_PedalCoopaq,
    targetBlank: false
  },
  {
    Titulo: "Assembleia Geral Ordinária",
    Noticias: "📋🌐 Cooperados se reúnem para discutir crescimento e eleger nova diretoria",
    LeiaMais: "/assembleiageralordinaria",
    imgSrc: IMG_AssembleiaGeralOrdinaria,
    targetBlank: false
  },
  {
    Titulo: "Café com Mulheres do Campo",
    Noticias: "💫💎 Café com Mulheres do Campo é sucesso e marca início dos trabalhos do Matriz Delas, em 2025.",
    LeiaMais: "/cafecommulheresdocampo",
    imgSrc: IMG_CafeMulheresCampo,
    targetBlank: false
  },
  {
    Titulo: "Gestão e Liderança",
    Noticias: "📋🌐 9 colaboradores dos setores administrativos foram capacitados pela mentora Técia Moura.",
    LeiaMais: "/gestãoeliderança",
    imgSrc: IMG_GestãoeLiderança,
    targetBlank: false
  },  
  {
    Titulo: "Qualifica COOPAQ",
    Noticias: "📋🌐 Coopaq lança mais novo projeto social para seus agricultores cooperados.",
    LeiaMais: "/qualificacoopaq",
    imgSrc: IMG_CapaQualificaCOOPAQ,
    targetBlank: false
  },
  {
    Titulo: "Doação de Materiais",
    Noticias: "📋🌐 Coopaq doa materiais recicláveis para cooperativa, em Maceió.",
    LeiaMais: "/doacaodemateriaisreciclaveisparacooperativademaceio",
    imgSrc: IMG_CapaDoação,
    targetBlank: false
  },
  {
    Titulo: "COOPAQ reúne colaboradores para a SIPAT",
    Noticias: "🌱🥥 Evento contou com diversos profissionais técnicos que destacaram a importância de um ambiente de trabalho seguro e saudável.",
    LeiaMais: "/SIPAT",
    imgSrc: IMG_SIPAT,
    targetBlank: false
  },
  {
    Titulo: "Encontro de Negócios",
    Noticias: "💫💎 Coopaq participa de Encontro de Negócios e apresenta nossos produtos.",
    LeiaMais: "/encontrodenegocios",
    imgSrc: IMG_EncontroDeNegocios,
    targetBlank: false
  },
  {
    Titulo: "Imersão de Intercooperação",
    Noticias: "📋🌐 Colaboradores da Coopaq fazem imersão de intercooperação, na região Norte do Brasil.",
    LeiaMais: "/imersaointercooperacao",
    imgSrc: IMG_CapaImersão,
    targetBlank: false
  },
  {
    Titulo: "Pedalada Verde",
    Noticias: "🚴🌴 Coopaq reúne mais de mil ciclistas na 2ª edição da Pedalada Verde.",
    LeiaMais: "/pedaladaverde",
    imgSrc: IMG_Capa03,
    targetBlank: false
  },
  {
    Titulo: "“Dia de Campo” no Assentamento Boa União ",
    Noticias: "🌱🥥 O evento que tem objetivo de fomentar a capacitação do produtor rural (...)",
    LeiaMais: "/diadecampo",
    imgSrc: IMG_Capa02,
    targetBlank: false
  },
  {
    Titulo: "Decom, COOPAQ",
    Noticias: "😁 Coopaq e Camaragibe fazem Blit's dos EPI's, em alusão à Campanha Abril Verde",
    LeiaMais: "/campanhaabrilverde",
    imgSrc: IMG_Capa01,
    targetBlank: false
  },
  {
    Titulo: "📋 Ei, anota aí!",
    Noticias: `😁 Dia 24 de março, nossa Assembleia Geral Ordinária. Contamos com sua presença!`,
    LeiaMais: 'https://www.instagram.com/p/C4aoFq-uTJj/',
    imgSrc: IMG_Assembleia
  },  
  {
    Titulo: "COOPAQAL",
    Noticias: "🌐💫 Descubra nossa missão, visão e valores, fundamentos que moldam cada passo em direção ao nosso propósito.",
    LeiaMais: "https://www.instagram.com/p/C0O4cCSr5o7/?img_index=1",
    imgSrc: IMG_Valores,
    targetBlank: true
  },
  {
    Titulo: "Dá um Google 👉🏾COOPAQAL",
    Noticias: "👨🏽‍🌾🌱 Vem conhecer um pouco mais da gente, por meio do nosso conteúdo no Youtube",
    LeiaMais: "https://www.instagram.com/p/C0CprWyrEuR/",
    imgSrc: IMG_YT,
    targetBlank: true
  },
]

// function UltimasNoticias() {
//   const groupedNews = useMemo(() => {
//     const result = [];
//     for (let i = 0; i < news.length; i += 3) {
//       result.push(news.slice(i, i + 3));
//     }
//     return result;
//   }, []);

//   return (
//     <div className="container containerNEWS">
//       <div className="container-fluid">
//         {/* <a href='/ultimasnoticias' className='no-underline'> */}
//           <span className="fs-1 text-COOPAQ-green-white">Últimas Notícias</span>
//         {/* </a> */}
//         <Carousel controls={false} interval={3000} pause="hover">
//           {groupedNews.map((group, index) => (
//             <Carousel.Item key={index}>
//               <div className="row">
//               {group.map((item, idx) => (
//                 <div className="col-md-4" key={idx}>
//                   <CardsNoticias
//                     Titulo={item.Titulo}
//                     Noticias={item.Noticias}
//                     LeiaMais={
//                       <a href={item.LeiaMais ? item.LeiaMais : "#"} target={item.targetBlank ? '_blank' : '_self'} className='no-underline text-COOPAQ-green-black font-demibold'>
//                         LEIA MAIS
//                         <i className="bi bi-arrow-right-short custom-color-black"></i>
//                       </a>
//                     }
//                     imgSrc={item.imgSrc ? item.imgSrc : IMG_BG}
//                     link={item.LeiaMais ? item.LeiaMais : "#"}
//                     targetBlank={item.targetBlank}
//                   />
//                 </div>
//               ))}
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }


// export default UltimasNoticias;

function UltimasNoticias() {
  return (
    <div className="container containerNEWS">
      <div className="container-fluid">
        <span className="fs-1 text-COOPAQ-green-white">Últimas Notícias</span>

        <div className="row mt-4">
          {news.map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
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
                    <i className="bi bi-arrow-right-short custom-color-black"></i>
                  </a>
                }
                imgSrc={item.imgSrc || IMG_BG}
                link={item.LeiaMais || "#"}
                targetBlank={item.targetBlank}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default UltimasNoticias;