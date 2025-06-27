import { Card, CardTitle, CardText } from "react-bootstrap";
import "../../styles/CardDiretoria.css"; // opcional, para separar estilos

interface CardsDiretoriaProps {
  Nome: string;
  Cargo: string;
  Sobre: string;
  imgPerfil: string;
}

function CardsDiretoria({
  Nome,
  Cargo,
  Sobre,
  imgPerfil,
}: CardsDiretoriaProps) {
  return (
    <Card className="d-flex flex-column flex-md-row align-items-center align-items-md-start border-0 h-100 p-3 gap-3">
      <div
        className="img-diretoria"
        style={{
          backgroundImage: `url(${imgPerfil})`,
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-center text-center text-md-start">
        <CardTitle
          className="font-extrabold mb-1"
          style={{ fontSize: "1.5rem", color: "#01b364" }}
        >
          {Nome}
        </CardTitle>
        <CardText
          className="font-regular mb-0"
          style={{ fontSize: "1.2rem", color: "#01b364" }}
        >
          {Cargo}
        </CardText>
        <CardText>
          <div
            className="font-regular mt-2"
            style={{ fontSize: "1rem", textAlign: "left" }}
          >
            {Sobre}
          </div>
        </CardText>
      </Card.Body>
    </Card>
  );
}

export default CardsDiretoria;
