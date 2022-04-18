import React from 'react'

export default function VocalContainer(props) {

    const drop = e => {
        e.preventDefault();

        const vocal = e.dataTransfer.getData('vocal');
        
        if(vocal === props.MiVocalesLine[0].vocal){
            props.onValidVocal(vocal)
        }

    }

    const dragOver = e => {
        e.preventDefault();
    }

  return (
    <div className={props.className} onDrop={drop} onDragOver={dragOver}>
        <img
            src={props.MiVocalesLine[0].img_line}
            alt="logo"
            style={{ height: "100%", width: "100%", borderRadius: "15px" }}
        />
    </div>
  )
}
