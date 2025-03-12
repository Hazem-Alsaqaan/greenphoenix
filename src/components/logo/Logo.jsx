import React from "react";
import logoPic from "../../assets/pictures/logoPic.png";
function Logo() {
  return (
    <div className="flex flex-col items-center justify-center  rounded  w-fit p-1">
      <div>
        <img src={logoPic} alt="logoPic" className="w-14 h-14" />
      </div>
      <h1 className="capitalize text-white font-WorkSansBold text-base">
        green phoenix
      </h1>
      <p className="capitalize text-mainColor font-WorkSansThin text-[7px]">
        Agriculture products
      </p>
    </div>
  );
}

export default Logo;
