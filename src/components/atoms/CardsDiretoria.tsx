import { Card, CardTitle, CardText } from "react-bootstrap";
import "../../styles/CardDiretoria.css"; // opcional, para separar estilos

interface CardsDiretoriaProps {
  Nome: string;
  Cargo: string;
  Sobre: string;
  imgPerfil: string;
  iconLinkedin?: string;
}

function CardsDiretoria({
  Nome,
  Cargo,
  Sobre,
  imgPerfil,
  iconLinkedin,
}: CardsDiretoriaProps) {
  return (
    <Card className="d-flex flex-column flex-md-row align-items-left align-items-md-start border-0 h-100 gap-5">
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
          <div className="flex align-items-center">
            <span>{Nome}</span>
            {iconLinkedin && (
              <a
                href={iconLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2 d-inline-flex align-items-center"
                style={{ lineHeight: 0 }}
                aria-label={`LinkedIn de ${Nome}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#0a66c2"
                  viewBox="0 0 16 16"
                  style={{
                    display: "block",
                    marginBottom: "0px",
                  }}
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 
        .513 16 1.146v13.708c0 .633-.526 1.146-1.175 
        1.146H1.175C.526 16 0 15.487 0 
        14.854V1.146zm4.943 
        12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
        0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.342-1.248-.822 
        0-1.358.538-1.358 1.248 0 
        .694.52 1.248 1.327 
        1.248h.015zm4.908 8.212V9.359c0-.215.016-.43.08-.586.175-.43.571-.875 
        1.238-.875.873 0 1.222.66 1.222 
        1.63v3.866h2.401V9.25c0-2.22-1.18-3.252-2.756-3.252-1.274 
        0-1.845.7-2.165 
        1.193v.026h-.015a5.5 5.5 0 0 
        1 .015-.026V6.169h-2.4c.03.678 
        0 7.225 0 7.225h2.4z"
                  />
                </svg>
              </a>
            )}
          </div>
        </CardTitle>
        <CardText
          className="font-regular"
          style={{ fontSize: "1.2rem", color: "#01b364", textAlign: "left" }}
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
