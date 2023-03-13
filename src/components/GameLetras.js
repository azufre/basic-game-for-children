import React, { useState } from "react";
import Vocal from "./Vocal";
import "./GameVocales.css";
import VocalContainer from "./VocalContainer";
import PuntajeContainer from "./PuntajeContainer";

const MiVocales = [
  {
    vocal: "a",
    img_line:
      "https://i.postimg.cc/fRjcF1bK/Whats-App-Image-2023-03-12-at-10-57-03-PM-1.jpg",
    img:
      "https://i.postimg.cc/BvS2PYnh/Whats-App-Image-2023-03-12-at-10-12-50-PM.jpg"
  },
  {
    vocal: "e",
    img_line:
      "https://i.postimg.cc/RhHfTD8w/Whats-App-Image-2023-03-12-at-10-57-04-PM.jpg",
    img:
      "https://i.postimg.cc/W16M3LTF/Whats-App-Image-2023-03-12-at-10-13-10-PM.jpg"
  },
  {
    vocal: "i",
    img_line:
      "https://i.postimg.cc/C1dbR1sP/Whats-App-Image-2023-03-12-at-10-57-03-PM.jpg",
    img:
      "https://i.postimg.cc/nL3B44sn/Whats-App-Image-2023-03-12-at-10-13-28-PM.jpg"
  },
  {
    vocal: "o",
    img_line:
      "https://i.postimg.cc/nVjvZXzM/Whats-App-Image-2023-03-12-at-10-57-05-PM.jpg",
    img:
      "https://i.postimg.cc/NMLTpKTm/Whats-App-Image-2023-03-12-at-10-32-02-PM.jpg"
  },
  {
    vocal: "u",
    img_line:
      "https://i.postimg.cc/NMVmmcNg/Whats-App-Image-2023-03-12-at-10-57-04-PM-2.jpg",
    img:
      "https://i.postimg.cc/pT7j7PY7/Whats-App-Image-2023-03-12-at-10-32-13-PM.jpg"
  },
  {
    vocal: "z",
    img_line:
      "https://i.postimg.cc/5tsw9vLQ/Whats-App-Image-2023-03-12-at-10-57-04-PM-1.jpg",
    img:
      "https://i.postimg.cc/FzLSXwTK/Whats-App-Image-2023-03-12-at-10-32-32-PM.jpg"
  }
];

const MiVocalesLine = [
  {
    vocal: "a",
    img_line:
      "https://i.postimg.cc/fRjcF1bK/Whats-App-Image-2023-03-12-at-10-57-03-PM-1.jpg",
  },
  {
    vocal: "e",
    img_line:
      "https://i.postimg.cc/RhHfTD8w/Whats-App-Image-2023-03-12-at-10-57-04-PM.jpg",
  },
  {
    vocal: "i",
    img_line:
      "https://i.postimg.cc/C1dbR1sP/Whats-App-Image-2023-03-12-at-10-57-03-PM.jpg",
  },
  {
    vocal: "o",
    img_line:
      "https://i.postimg.cc/nVjvZXzM/Whats-App-Image-2023-03-12-at-10-57-05-PM.jpg",
  },
  {
    vocal: "u",
    img_line:
      "https://i.postimg.cc/NMVmmcNg/Whats-App-Image-2023-03-12-at-10-57-04-PM-2.jpg",
  },
  {
    vocal: "z",
    img_line:
      "https://i.postimg.cc/5tsw9vLQ/Whats-App-Image-2023-03-12-at-10-57-04-PM-1.jpg",
  }
];

const random_list = (data) => {
  return data
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
}

export default function GameVocales() {
  
    const [puntaje, setPuntaje] = useState(0);
    const [_MiVocales, setMiVocales] = useState(random_list(MiVocales));
    const [_MiVocalesLine, setMiVocalesLine] = useState(MiVocalesLine);

    const actualizarPuntaje = (vocal) => {
        setPuntaje(puntaje + 1);
        setMiVocales(_MiVocales.filter(e => e.vocal !== vocal)); 
        setMiVocalesLine(_MiVocalesLine.filter(e => e.vocal !== vocal));    
    }

    const reiniciarJuego = () => {
      setMiVocales(random_list(MiVocales));
      setMiVocalesLine(MiVocalesLine);
      setPuntaje(0);
    }
    
  const vocales = _MiVocales.map((e) => (
    <Vocal key={e.vocal} vocal={e.vocal} img_url={e.img} />
  ));

  return (
    <div className="container">
      <div className="header">
        <p>Coloca las palabras donde corresponda.</p>
      </div>
      <div className="side">
        <div className="vocales">{vocales}</div>
      </div>
      <div className="main">
        <div className="sub-main">
          {_MiVocales.length > 0 &&
          <VocalContainer className="vocal-contenedor" onValidVocal={actualizarPuntaje} MiVocalesLine={_MiVocalesLine} />}
          <PuntajeContainer className="puntaje-contenedor" puntaje={puntaje} onClickReiniciar={reiniciarJuego} />
        </div>
      </div>
      <div className="footer">
        <p>AMDO &copy; 2023</p>
      </div>
    </div>
  );
}
