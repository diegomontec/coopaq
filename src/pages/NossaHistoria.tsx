import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import DireitosAutorais from "../components/organisms/DireitosAutorais";

import "../styles/NossaHistoria.css";
import imgMapaCooperados from "../assets/Cooperados/Mapa cooperados.png";

function NossaHistoria() {
  return (
    <div>
      <Header />
      <section className="container pt-5">
        <h1 className="fs-2 pt-4 text-COOPAQ-orange text-center">
          Nossa História
        </h1>
        <p className="fs-5 text-center p-2 m-2">
          <strong>
            COOPAQ, há 13 anos sendo o caminho mais curto entre o campo e a
            cidade
          </strong>
        </p>

        <article className="fs-5 text-left p-3 p-md-4 m-2 m-md-4 font-regular">
          <p>
            A Cooperativa dos Agricultores Qualificados - COOPAQ, fundada em
            2011 pelo atual presidente Romullo Dantas, localizada no município
            de Matriz de Camaragibe (AL), tem como objetivo integrar o público
            da agricultura familiar no mercado de forma justa e solidária.
            Busca-se criar alternativas à prática histórica de produção de
            cana-de-açúcar na região, promovendo a inclusão através de práticas
            de agricultura sustentável.
          </p>

          <p>
            Em setembro de 2024, a Coopaq completou 13 anos. Após anos de
            trabalho, em 2022 foi entregue à população a Agroindústria
            Camaragibe — um Complexo Multifuncional que beneficia dezenas de
            famílias com a geração de empregos e infraestrutura moderna, com
            caldeiras capazes de atingir três mil quilos de vapor por hora.
          </p>

          <p>
            Segundo o presidente Romullo Dantas, todo o planejamento foi
            possível com recursos próprios angariados ao longo da existência da
            Coopaq. A produção atual é voltada para coco ralado, leite de coco,
            farinha de coco e óleo de coco — com expectativa de crescimento de
            40% ao ano.
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
            renda.” <strong>— afirmou o presidente.</strong>
          </blockquote>

          <p>
            A Coopaq oferece assistência técnica orientada à realidade local,
            com base na agroecologia e sistemas sustentáveis. Também garante
            transporte da produção familiar aos centros de entrega e venda, além
            de organizar a produção por meio de classificação, padronização,
            armazenamento, beneficiamento e negociação da venda dos produtos.
          </p>

          <h2 className="fs-4 pt-4 text-COOPAQ-orange">
            <strong>COMÉRCIO</strong>
          </h2>
          <p>
            Os principais canais de comercialização incluem feiras locais,
            programas federais como o PNAE e PAA, hotéis e pousadas da região
            metropolitana de Recife e Maceió, bem como o comércio entre
            agricultores e estabelecimentos parceiros. A cooperativa também
            compra a produção excedente dos agricultores e incentiva os mercados
            de circuito curto.
          </p>

          <h2 className="fs-4 pt-4 text-COOPAQ-orange">
            <strong>CAPACITAÇÃO</strong>
          </h2>
          <p>
            A Coopaq atua ativamente na capacitação de jovens, mulheres e homens
            do campo. Além de manter diretorias específicas para Juventude e
            Mulheres, promove projetos sociais que atendem as famílias
            cooperadas.
          </p>

          <ul>
            <li>
              <strong>Música Cooperada:</strong> musicalização para crianças e
              adolescentes do campo;
            </li>
            <li>
              <strong>Matriz Delas:</strong> fomento ao empreendedorismo
              feminino;
            </li>
            <li>
              <strong>Coqueirais:</strong> distribuição de mudas de coco de alta
              qualidade;
            </li>
            <li>
              <strong>Qualifica Coopaq:</strong> minicursos profissionalizantes
              para o campo;
            </li>
            <li>
              <strong>Coopaq Jovem:</strong> curso de formação em bioeconomia
              para filhos de cooperados.
            </li>
          </ul>
        </article>

        <div className="d-flex justify-content-center mt-4 mb-5">
          <img
            loading="lazy"
            src={imgMapaCooperados}
            alt="Mapa Cooperados"
            className="imgMapaNossaHistoria img-fluid"
          />
        </div>
      </section>

      <Footer />
      <DireitosAutorais />
    </div>
  );
}

export default NossaHistoria;
