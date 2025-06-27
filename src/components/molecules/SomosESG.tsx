import Image from '../../assets/ELEMENTOS COOPAQ/ESG1379.png';
import '../../styles/SomosESG.css';

function SomosESG() {
  return (
      <>
      <div className="container-fluid bg-COOPAQ-orangeESG text-COOPAQ-gray">
        <div className='container pt-5 pb-5'>
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex align-items-end">
              <img src={Image} alt="Somos ESG" className='w-100' />
            </div>
            <div className="col-md-6 mt-2 d-flex align-items-center" style={{ width: '400px' }}>
              <div className="text-container">
                <div className='textSomos'>Somos</div>
                <div className='font-extrabold textESG'>ESG</div>
                <br />
                <br />
                <span className='text-justify'>ESG é uma sigla que representa três elementos-chave no mundo dos negócios e investimentos: Ambiental (E), Social (S) e Governança (G). Essa abordagem visa avaliar e integrar considerações não apenas financeiras, mas também ambientais, sociais e de governança nas decisões empressariais.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default SomosESG;