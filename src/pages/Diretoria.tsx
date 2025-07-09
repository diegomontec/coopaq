import { Container } from "react-bootstrap";

import CardsDiretoria from "../components/atoms/CardsDiretoria";

import faceRomullo from "../assets/Cooperados/NovaDiretoria/Romulo.jpeg";
import faceAyrton from "../assets/Cooperados/NovaDiretoria/Ayrton.jpeg";
import faceRinaldo from "../assets/Cooperados/NovaDiretoria/Rinaldo.jpeg";
import faceLilian from "../assets/Cooperados/NovaDiretoria/Lilian.jpeg";
import faceMayara from "../assets/Cooperados/NovaDiretoria/Mayara.jpeg";

const people = [
  {
    Nome: "Romullo Dantas",
    Cargo: "Diretor Presidente",
    Sobre:
      "Com ampla experiência no setor agrícola e na gestão cooperativista, Rômulo atua de forma estratégica para fortalecer a união entre os cooperados e promover o desenvolvimento sustentável. Sua liderança é pautada pela transparência, inovação e compromisso com o crescimento coletivo, sempre buscando melhores oportunidades para os produtores e contribuindo para o progresso da comunidade rural.",
    imgPerfil: faceRomullo,
  },
  {
    Nome: "Rinaldo José",
    Cargo: "Diretor Financeiro",
    Sobre:
      "Responsável pela gestão estratégica dos recursos financeiros da cooperativa, Rinaldo atua com foco na transparência, sustentabilidade e solidez econômica. Com olhar analítico e experiência no setor da agricultura, conduz o planejamento orçamentário, controla os investimentos e garante a saúde financeira da instituição, sempre alinhado aos princípios cooperativistas e ao compromisso com o crescimento dos associados.",
    imgPerfil: faceRinaldo,
  },
  {
    Nome: "Lilian Dantas",
    Cargo: "Diretora de Jovens e Mulheres",
    Sobre:
      "Comprometida com a inclusão, o protagonismo feminino e a valorização das novas gerações no meio rural, a Lilian desenvolve iniciativas que fortalecem a participação ativa desses públicos na cooperativa. Com sensibilidade, visão de futuro e espírito cooperativista, atua na promoção de oportunidades, capacitações e lideranças, contribuindo para a renovação, diversidade e inovação no campo.",
    imgPerfil: faceLilian,
  },
  {
    Nome: "Mayara Costa",
    Cargo: "Diretora Secretária",
    Sobre:
      "Responsável por garantir a organização administrativa e a transparência dos processos internos, Mayara atua com dedicação no registro, acompanhamento e divulgação das decisões da cooperativa. Com atenção aos detalhes e compromisso com a governança, zela pela comunicação entre os órgãos da cooperativa e os cooperados, fortalecendo a confiança, a clareza e a participação ativa de todos no dia a dia da gestão.",
    imgPerfil: faceMayara,
  },
  {
    Nome: "Ayrton Lima",
    Cargo: "Diretor de Produção e Comércio",
    Sobre:
      "Com foco na qualidade da produção e na valorização do trabalho dos cooperados, Ayrton atua para fortalecer as cadeias produtivas e ampliar as oportunidades de mercado. Sua gestão é voltada para o aumento da produtividade e inovação no campo, sempre buscando parcerias estratégicas e promovendo o crescimento sustentável da cooperativa e de seus associados.",
    imgPerfil: faceAyrton,
  },
];

function Diretoria() {
  return (
    <div className="container-fluid">
      {/* <HeaderAdvice /> */}
      <div className="container-fluid font-regular mt-5 mb-5 font-regular">
        <h1
          className="container"
          style={{ fontSize: "1.5rem", textAlign: "justify" }}
        >
          A Diretoria da Cooperativa é composta por líderes comprometidos com os
          princípios do cooperativismo e o desenvolvimento sustentável do meio
          rural. À frente da presidência, o Diretor Presidente conduz as
          estratégias com visão de futuro, fortalecendo a união entre os
          cooperados e impulsionando o crescimento coletivo. O Diretor
          Financeiro assegura a gestão responsável dos recursos, garantindo
          estabilidade e transparência nas finanças. A Diretora Secretária
          organiza e registra os processos internos com rigor e clareza,
          promovendo uma comunicação eficiente entre os setores. A Diretora de
          Jovens e Mulheres atua com dedicação na inclusão, capacitação e
          valorização desses públicos, estimulando a renovação e diversidade no
          campo. Já o Diretor de Produção e Comércio lidera ações voltadas à
          melhoria da produtividade e à ampliação de mercados, gerando mais
          oportunidades para os associados. Juntos, formam uma equipe sólida,
          alinhada aos valores cooperativistas e ao compromisso com o
          fortalecimento da agricultura familiar.
        </h1>
      </div>
      <Container>
        {people.map((membro, index) => (
          <div key={index} className="mb-5">
            <CardsDiretoria {...membro} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Diretoria;
