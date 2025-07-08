import Projeto from "../components/molecules/Projeto.tsx";

import imagemMatrizDelas from "../assets/MatrizDelas/Projeto.jpg";
import imagemCoqueirais from "../assets/ELEMENTOS COOPAQ/Projeto Coqueirais.png";
import imagemMusica from "../assets/ELEMENTOS COOPAQ/Música Cooperada.png";

import "../styles/NossoProjetosPage.css";
import "../styles/Projeto.css"

const projetos = [
  {
    titulo: "Comunidade MatrizDelas",
    descricao: "Matriz Delas tem o objetivo de unir o público feminino e multiplicar saberes, dividindo experiências sobre carreira e vida, de uma forma que as torne mulheres donas de si e de seu próprio negócio. Trazendo soluções e oportunidades por meio de quatro mulheres com pensamentos e vivências distintas, mas com objetivos iguais. Vamos alcançar e ajudar outras mulheres que já trabalham ou que pretendem ser independentes financeiramente. Para isso, vamos lançar mão de algumas ferramentas, sempre encorajando-as e as colocando como protagonistas.",
    imagem: imagemMatrizDelas,
    alt: "Projeto MatrizDelas",
  },
  {
    titulo: "Projeto Coqueirais",
    descricao: "O Projeto Coqueirais tem como propósito promover a consciência ambiental e a geração de renda nas comunidades de Matriz de Camaragibe, por meio do manejo adequado e tecnicamente assistido da cultura do coco (Cocos nucifera L.). Desenvolvido pela Cooperativa dos Agricultores Qualificados (COOPAQ), em parceria com a Secretaria Municipal de Agricultura e agricultores familiares da região, o projeto incentiva o plantio de mudas de coqueiros híbridos, aliando sustentabilidade e viabilidade econômica para zonas rurais e urbanas. Além disso, o projeto busca conscientizar sobre os cuidados com o meio ambiente no contexto do cultivo, oferecendo uma nova proposta de desenvolvimento econômico contínuo e eficaz para as comunidades participantes.",
    imagem: imagemCoqueirais,
    alt: "Projeto Coqueirais",
  },
  {
    titulo: "Música Cooperada",
    descricao: "O projeto Música Cooperada é uma iniciativa desenvolvida pela Igreja Assembleia de Deus Madureira (AD BRÁS) em parceria com a Cooperativa dos Agricultores Qualificados (COOPAQ). Seu principal objetivo é oferecer, de forma gratuita, aulas de teoria musical e instrumentos para crianças, adolescentes e jovens, proporcionando inclusão social e o desenvolvimento cultural por meio da música. O projeto tem como metas formar uma orquestra com 50 componentes, criar um coral mirim integrado a um conjunto de flauta doce (soprano, tenor, baixo e flauta barroca) e preparar uma banda para apresentações em desfiles e eventos, fortalecendo a interação comunitária.",
    imagem: imagemMusica,
    alt: "Projeto Música Cooperada",
  },
];

function NossosProjetos() {
  return (
    <div>
      <div className="container">
        <div className="container-fluid">
          {projetos.map((projeto, index) => (
            <Projeto
              key={index}
              titulo={projeto.titulo}
              imagem={projeto.imagem}
              descricao={projeto.descricao}
              alt={projeto.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NossosProjetos;
