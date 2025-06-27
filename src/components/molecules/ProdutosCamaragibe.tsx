import image from '../../assets/ELEMENTOS COOPAQ/PRODUTOSCAMARAGIBE1380v2.0.png';
import '../../styles/ProdutosCamaragibe.css';

function ProdutosCamaragibe() {
    return (
        <div className='ProdutosCamaragibe container-fluid d-flex justify-content-center align-items-center'>
            <div className='container p-5'>
                <img src={image} alt="PRODUTOS CAMARAGIBE" className='imagePC' />
            </div>
        </div>
    );
}

export default ProdutosCamaragibe;
