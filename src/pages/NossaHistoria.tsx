import "../styles/NossaHistoria.css";
import imgMapaCooperados from "../assets/Cooperados/Mapa cooperados.png";

function NossaHistoria() {
  return (
    <div>
      <section className="pt-5 mx-4">
        <h1 className="fs-2 px-lg-5 pt-4 text-COOPAQ-orange text-left fw-bold">
          Nossa História
        </h1>
        <p className="fs-5 text-left px-lg-5 fw-semibold">
          <strong>
            COOPAQ, há 14 anos sendo o caminho mais curto entre o campo e a
            cidade
          </strong>
        </p>

        {/* Bloco 1 e 2 lado a lado */}
        <div className="row align-items-start mt-4 mb-5">
          {/* Coluna Texto (50%) */}
          <div className="col-12 col-lg-6">
            <article className="fs-5 text-left p-md-4 m-2 m-md-4 fw-normal font-regular">
              <p>
                A Cooperativa dos Agricultores Qualificados - COOPAQ, fundada em
                2011 pelo atual presidente Romullo Dantas, localizada no
                município de Matriz de Camaragibe (AL), tem como objetivo
                integrar o público da agricultura familiar no mercado de forma
                justa e solidária. Busca-se criar alternativas à prática
                histórica de produção de cana-de-açúcar na região, promovendo a
                inclusão através de práticas de agricultura sustentável.
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
                possível com recursos próprios angariados ao longo da existência
                da Coopaq. A produção atual é voltada para coco ralado, leite de
                coco, farinha de coco e óleo de coco — com expectativa de
                crescimento de 40% ao ano.
              </p>

              <blockquote
                className="fs-6 mt-4 mb-4 border-start ps-3"
                style={{ borderLeft: "4px solid #01b364" }}
              >
                “Adquirimos uma planta industrial moderna, com o que há de mais
                atual no setor de processamento de derivados do coco. São quase
                vinte equipamentos, todos novos. Esse é um antigo sonho,
                construído para melhorar a condição de comercialização dos
                produtos da agricultura. Toda uma economia está sendo
                impulsionada com essa fábrica em operação, com impacto direto na
                geração de emprego e renda.”{" "}
                <strong>— afirmou o presidente.</strong>
              </blockquote>

              <p>
                A Coopaq oferece assistência técnica orientada à realidade
                local, com base na agroecologia e sistemas sustentáveis. Também
                garante transporte da produção familiar aos centros de entrega e
                venda, além de organizar a produção por meio de classificação,
                padronização, armazenamento, beneficiamento e negociação da
                venda dos produtos.
              </p>
            </article>
          </div>

          {/* Coluna Mapa (50%) */}
          <div
            className="col-12 col-lg-6 d-flex justify-content-center align-items-center px-4 px-lg-2"
            style={{ minHeight: "600px" }}
          >
            <img
              loading="lazy"
              src={imgMapaCooperados}
              alt="Mapa Cooperados"
              style={{ height: "100%", width: "auto", maxWidth: "80%" }}
            />
          </div>
        </div>

        {/* Bloco 3: Comércio e Capacitação (100%) */}
        <div className="row mt-5">
          <div className="col-12 px-lg-5">
            <h2 className="fs-4 pt-4 text-COOPAQ-orange fw-bold">COMÉRCIO</h2>
            <p className="fs-5 fw-normal font-regular">
              Os principais canais de comercialização incluem feiras locais,
              programas federais como o PNAE e PAA, hotéis e pousadas da região
              metropolitana de Recife e Maceió, bem como o comércio entre
              agricultores e estabelecimentos parceiros. A cooperativa também
              compra a produção excedente dos agricultores e incentiva os
              mercados de circuito curto.
            </p>

            <h2 className="fs-4 pt-4 text-COOPAQ-orange fw-bold">
              CAPACITAÇÃO
            </h2>
            <p className="fs-5 fw-normal font-regular">
              A Coopaq atua ativamente na capacitação de jovens, mulheres e
              homens do campo. Além de manter diretorias específicas para
              Juventude e Mulheres, promove projetos sociais que atendem as
              famílias cooperadas.
            </p>

            <ul className="fs-5 fw-normal font-regular">
              <li>
                <strong>Música Cooperada:</strong> musicalização para crianças e
                adolescentes do campo;
              </li>
              <li>
                <strong>Matriz Delas:</strong> fomento ao empreendedorismo
                feminino;
              </li>
              <li>
                <strong>Coqueirais:</strong> distribuição de mudas de coco de
                alta qualidade;
              </li>
              <li>
                <strong>Qualifica Coopaq:</strong> minicursos
                profissionalizantes para o campo;
              </li>
              <li>
                <strong>Coopaq Jovem:</strong> curso de formação em bioeconomia
                para filhos de cooperados.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NossaHistoria;
