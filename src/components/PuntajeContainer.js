import React from 'react'

export default function PuntajeContainer(props) {
  return (
    <div className={props.className}>
        <div>Puntaje: {props.puntaje}/6</div>
        {props.puntaje === 6 && <div><p className='felicidades'>FELICIDADES JUEGO COMPLETADO</p></div>}
        <div>
        <img src='https://i.postimg.cc/2SYgRRC9/Whats-App-Image-2023-03-12-at-11-40-56-PM.jpg' width='150px' style={{
            borderRadius:'60px',
            textAlign:'center'
        }} onClick={props.onClickReiniciar} alt="logo" />
        </div>
    </div>
  )
}
