import React, { useState } from "react";
import Vocal from "./Vocal";
import "./GameVocales.css";
import VocalContainer from "./VocalContainer";
import PuntajeContainer from "./PuntajeContainer";
import { Link } from "react-router-dom";

const MiVocales = [
  {
    vocal: "1",
    img:
      "https://i.postimg.cc/PxFxjTcy/Whats-App-Image-2022-05-08-at-7-54-27-PM.jpg"
  },
  {
    vocal: "2",
    img:
      "https://i.postimg.cc/SxWJM02Q/Whats-App-Image-2022-05-08-at-7-54-26-PM-3.jpg"
  },
  {
    vocal: "3",
    img:
      "https://i.postimg.cc/LXsXwnyh/Whats-App-Image-2022-05-08-at-7-54-26-PM-2.jpg"
  },
  {
    vocal: "4",
    img:
      "https://i.postimg.cc/pdRyQ0zf/Whats-App-Image-2022-05-08-at-7-54-26-PM-1.jpg"
  },
  {
    vocal: "5",
    img:
      "https://i.postimg.cc/zf7vxnF9/Whats-App-Image-2022-05-08-at-7-54-26-PM.jpg"
  }
];

const MiVocalesLine = [
  {
    vocal: "1",
    img_line:
      "https://i.postimg.cc/VL0Sz0zC/Whats-App-Image-2022-05-08-at-7-54-25-PM-2.jpg",
  },
  {
    vocal: "2",
    img_line:
      "https://i.postimg.cc/tRMZ0NGb/Whats-App-Image-2022-05-08-at-7-54-25-PM-1.jpg",
  },
  {
    vocal: "3",
    img_line:
      "https://i.postimg.cc/FHtYzFKn/Whats-App-Image-2022-05-08-at-7-54-25-PM.jpg",
  },
  {
    vocal: "4",
    img_line:
      "https://i.postimg.cc/gjnxXnR1/Whats-App-Image-2022-05-08-at-7-54-24-PM-1.jpg",
  },
  {
    vocal: "5",
    img_line:
      "https://i.postimg.cc/PJ9PmTQJ/Whats-App-Image-2022-05-08-at-7-54-24-PM.jpg",
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
        <p>Coloca las numeros donde corresponda. <Link to="/juego/vocales">(Cambiar juego)</Link></p>
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
