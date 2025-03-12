import React from "react";
import "./Circle.css";
function Circle({ XPosition, width, height }) {
  return (
    <div
      className={`absolute top-0 ${XPosition} w-${width} h-${height} bg-white rounded-full blur-xl z-0 circle`}
    ></div>
  );
}

export default Circle;
