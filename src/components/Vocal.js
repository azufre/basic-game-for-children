import React from "react";
import "./Vocal.css";

export default function Vocal({ vocal, img_url }) {
  
  const dragStart = e => {
      e.dataTransfer.setData('vocal', vocal);
  }  

  const dragOver = e => {
    e.stopPropagation();
}  

  return (
    <div
    className="image-hover-opacity"
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      style={{
        width: "150px",
        height: "100px",
        margin: "5px 5px",
      }}
    >
      <img
        src={img_url}
        alt="vocal"
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "15px"
        }}
      />
    </div>
  );
}
