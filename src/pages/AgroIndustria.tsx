import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import DireitosAutorais from "../components/organisms/DireitosAutorais";

function AgroIndustria() {
  return (
    <div>
      <Header />

      <section className="container pt-5">
        <h1 className="fs-2 pt-4 text-COOPAQ-orange text-center">
          AgroIndústria
        </h1>
        <p className="fs-5 text-center p-2 m-2">
          <strong>
            Agroindústria Camaragibe, levando o melhor do campo para a sua mesa
          </strong>
        </p>

        <article className="fs-5 text-left p-3 p-md-4 m-2 m-md-4 font-regular">
          <p>
            A Agroindústria Camaragibe, localizada no Complexo Multifuncional
            Coopaq, atua como indústria, comércio e serviço. Atende não só a
            região, como também diversos estados e regiões do Brasil, além de
            exportar para países do Mercosul.
          </p>
          <p>
            Localizada na Rodovia AL-105, no município de Matriz de Camaragibe,
            a unidade possui 7.500 metros quadrados e 48 repartições, incluindo
            caldeira, setor de quebragem, sala de produção com moagem e secagem,
            além de áreas de estocagem da matéria-prima e do produto final.
          </p>
          <p>
            Desde o início das operações, estima-se que cerca de duas mil
            pessoas, pertencentes ao núcleo familiar dos colaboradores, estejam
            sendo beneficiadas de forma indireta com a geração de empregos. A
            unidade conta com caldeiras configuradas para processar até três mil
            cocos por hora.
          </p>
          <p>
            O planejamento da Coopaq, segundo o presidente Romullo Dantas, foi
            possível com recursos próprios angariados nos últimos 13 anos.
            Atualmente, a produção é focada no processamento de coco ralado,
            leite de coco, farinha de coco e óleo de coco, com expectativa de
            crescimento anual de 40%.
          </p>

          <blockquote
            className="fs-6 mt-4 mb-4 border-start ps-3"
            style={{ borderLeft: "4px solid #01b364" }}
          >
            “Adquirimos uma planta industrial moderna, com o que há de mais
            atual no setor de processamento de derivados do coco. São quase
            vinte equipamentos, todos novos. Esse é um antigo sonho, construído
            para melhorar a condição de comercialização dos produtos da
            agricultura. Toda uma economia está sendo impulsionada com essa
            fábrica em operação, com impacto direto na geração de emprego e
            renda.” <strong>— afirmou o presidente</strong>.
          </blockquote>

          <p className="pt-3">
            <strong>Serviço:</strong>
            <br />
            Matriz de Camaragibe, 05 de dezembro, a partir das 9h da manhã.
            <br />
            Rodovia AL-105, ao lado do Posto de Combustíveis 4x4.
          </p>
        </article>
      </section>

      <Footer />
      <DireitosAutorais />
    </div>
  );
}

export default AgroIndustria;
