type ProjetoProps = {
  titulo: string;
  descricao: string;
  imagem: string;
  alt: string;
};

export default function Projeto({
  titulo,
  descricao,
  imagem,
  alt,
}: ProjetoProps) {
  return (
    <div className="projeto mt-5">
      <h2 className="titulo-projeto text-COOPAQ-green-black">{titulo}</h2>
      <img src={imagem} alt={alt} className="imagem-projeto" />
      <p className="descricao-projeto">{descricao}</p>
    </div>
  );
}
