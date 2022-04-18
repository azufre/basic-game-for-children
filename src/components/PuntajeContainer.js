import React from 'react'

export default function PuntajeContainer(props) {
  return (
    <div className={props.className}>
        <div>Puntaje: {props.puntaje}/5</div>
        {props.puntaje === 5 && <div><p className='felicidades'>FELICIDADES JUEGO COMPLETADO</p></div>}
        <div>
        <img src='https://i.postimg.cc/2SZcyQ3W/Whats-App-Image-2022-04-14-at-3-49-07-PM.jpg' width='150px' style={{
            borderRadius:'60px',
            textAlign:'center'
        }} onClick={props.onClickReiniciar} alt="logo" />
        </div>
    </div>
  )
}
