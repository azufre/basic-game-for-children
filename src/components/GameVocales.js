import React, { useState } from "react";
import Vocal from "./Vocal";
import "./GameVocales.css";
import VocalContainer from "./VocalContainer";
import PuntajeContainer from "./PuntajeContainer";

//https://postimg.cc/gallery/p9n8dxz

const MiVocales = [
  {
    vocal: "a",
    img_line:
      "https://i.postimg.cc/mgYYK8tm/Whats-App-Image-2022-04-16-at-12-11-06-AM-3.jpg",
    img:
      "https://i.postimg.cc/V6VnXhVk/Whats-App-Image-2022-04-16-at-12-11-07-AM.jpg"
  },
  {
    vocal: "e",
    img_line:
      "https://i.postimg.cc/dQfjChbj/Whats-App-Image-2022-04-16-at-12-11-06-AM-2.jpg",
    img:
      "https://i.postimg.cc/1zyGSw-Fs/Whats-App-Image-2022-04-16-at-12-11-07-AM-1.jpg"
  },
  {
    vocal: "i",
    img_line:
      "https://i.postimg.cc/cLy7DV4K/Whats-App-Image-2022-04-16-at-12-11-06-AM-1.jpg",
    img:
      "https://i.postimg.cc/hjjVznMY/Whats-App-Image-2022-04-16-at-12-11-07-AM-2.jpg"
  },
  {
    vocal: "o",
    img_line:
      "https://i.postimg.cc/qMCXxk0V/Whats-App-Image-2022-04-16-at-12-11-06-AM.jpg",
    img:
      "https://i.postimg.cc/mrVQgk3M/Whats-App-Image-2022-04-16-at-12-11-07-AM-3.jpg"
  },
  {
    vocal: "u",
    img_line:
      "https://i.postimg.cc/kGLNPHQp/Whats-App-Image-2022-04-16-at-12-11-05-AM.jpg",
    img:
      "https://i.postimg.cc/Vv0MgFxB/Whats-App-Image-2022-04-16-at-12-11-07-AM-4.jpg"
  }
];

const MiVocalesLine = [
  {
    vocal: "a",
    img_line:
      "https://i.postimg.cc/mgYYK8tm/Whats-App-Image-2022-04-16-at-12-11-06-AM-3.jpg",
  },
  {
    vocal: "e",
    img_line:
      "https://i.postimg.cc/dQfjChbj/Whats-App-Image-2022-04-16-at-12-11-06-AM-2.jpg",
  },
  {
    vocal: "i",
    img_line:
      "https://i.postimg.cc/cLy7DV4K/Whats-App-Image-2022-04-16-at-12-11-06-AM-1.jpg",
  },
  {
    vocal: "o",
    img_line:
      "https://i.postimg.cc/qMCXxk0V/Whats-App-Image-2022-04-16-at-12-11-06-AM.jpg",
  },
  {
    vocal: "u",
    img_line:
      "https://i.postimg.cc/kGLNPHQp/Whats-App-Image-2022-04-16-at-12-11-05-AM.jpg",
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
        <p>Coloca las vocales donde corresponda.</p>
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
        <p>SASA &copy; 2022</p>
      </div>
    </div>
  );
}
