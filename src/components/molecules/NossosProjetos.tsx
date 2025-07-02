import "../../styles/NossosProjetos.css";
import IMG_ProjetoMulheres from "../../assets/ELEMENTOS COOPAQ/Comunidade MatrizDelas.png";
import IMG_ProjetoMusica from "../../assets/ELEMENTOS COOPAQ/Música Cooperada.png";
import IMG_ProjetoCoqueirais from "../../assets/ELEMENTOS COOPAQ/Projeto Coqueirais.png";

function NossosProjetos() {
  return (
    <div className="container-CNPEXT" id="NossosProjetos">
      <div className="container-fluid container-CNPINT text-COOPAQ-green-black">
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
          <div className="texto flex flex-wrap ">
            <div className="wordConheça">Conheça</div>
            <div className="wordNossos">Nossos</div>
            <div className="wordProjetos">Projetos</div>
          </div>
          <div className="imagens pt-5">
            <a href="/NossosProjetos">
              <img src={IMG_ProjetoCoqueirais} alt="Coqueirais" />
            </a>
            <a href="/NossosProjetos">
              <img src={IMG_ProjetoMusica} alt="Musica" />
            </a>
            <a href="/NossosProjetos">
              <img src={IMG_ProjetoMulheres} alt="MatrizDelas" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NossosProjetos;
