import IMG_ProjetoMulheres from '../../assets/ELEMENTOS COOPAQ/Comunidade MatrizDelas.png';
import IMG_ProjetoMulherDeFe from '../../assets/ELEMENTOS COOPAQ/Mulheres de Fé.png';
import IMG_ProjetoMusica from '../../assets/ELEMENTOS COOPAQ/Música Cooperada.png';
import IMG_ProjetoCoqueirais from '../../assets/ELEMENTOS COOPAQ/Projeto Coqueirais.png';

function NossosProjetosMobile() {
  return (
    <div className='container-CNPEXT' id='NossosProjetosMobile'>
      <div className='container-fluid container-CNPINT text-COOPAQ-green-black'>
        <div className='w-75 container d-flex flex-column align-items-center'>
          <div className='texto mb-3'>
            <div className='wordConheça'>Conheça</div>
            <div className='wordNossos'>Nossos</div>
            <div className='wordProjetos'>Projetos</div>
          </div>
          <div className='imagens'>
            <a href="/NossosProjetos"><img src={IMG_ProjetoMulherDeFe} alt="Mulher de Fé" style={{ width: '400px', height: 'auto', display: 'block', marginBottom: '10px' }} /></a>
            <a href="/NossosProjetos"><img src={IMG_ProjetoCoqueirais} alt="Coqueirais" className='img-coqueirais' style={{ width: '400px', height: 'auto', display: 'block', marginBottom: '10px' }} /></a>
            <a href="/NossosProjetos"><img src={IMG_ProjetoMusica} alt="Musica" style={{ width: '400px', height: 'auto', display: 'block', marginBottom: '10px' }} /></a>
            <a href="/NossosProjetos"><img src={IMG_ProjetoMulheres} alt="MatrizDelas" style={{ width: '400px', height: 'auto', display: 'block', marginBottom: '10px' }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NossosProjetosMobile;
