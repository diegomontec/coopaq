import React from "react";
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap";

interface CardsNoticiasProps {
  Titulo: string;
  Noticias: string;
  LeiaMais: React.ReactNode;
  imgSrc: string;
  link: string;
  targetBlank?: boolean;
}

function CardsNoticias({
  Titulo,
  Noticias,
  LeiaMais,
  imgSrc,
  link,
  targetBlank = false,
}: CardsNoticiasProps) {
  return (
    <div className="card-noticias mx-4 mx-md-0">
      <Card
        className="d-flex align-items-stretch justify-content-center"
        style={{ border: "0" }}
      >
        <a
          href={link}
          target={targetBlank ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <Card.Img
            variant="top"
            src={imgSrc}
            alt="Imagem Noticias"
            style={{
              objectFit: "cover",
              borderRadius: "20px",
              height: "100%",
            }}
          />
        </a>
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle className="font-demibold">{Titulo}</CardTitle>
          <CardText className="text-COOPAQ-gray tamFonte16px">
            {Noticias}
          </CardText>
          <div className="mt-auto">{LeiaMais}</div>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardsNoticias;
