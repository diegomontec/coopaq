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
    <div className="projeto w-100">
      <img
        src={imagem}
        alt={alt}
        className="w-100 rounded-5 mb-5"
        style={{ height: "50vh", objectFit: "cover" }}
      />
      <h2 className="text-COOPAQ-green-black fw-bold fs-3 mb-3">{titulo}</h2>
      <p className="fs-5 text-dark">{descricao}</p>
    </div>
  );
}
