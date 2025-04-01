import React from "react";
import logoPic from "../../assets/pictures/logoPic.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link
      to={"/"}
      className="flex flex-col items-center justify-center  rounded  w-fit p-1"
    >
      <div>
        <img src={logoPic} alt="logoPic" className="w-10 h-10" />
      </div>
      <h1 className="capitalize text-white font-WorkSansBold text-base">
        green phoenix
      </h1>
      <p className="capitalize text-mainColor font-WorkSansThin text-[7px]">
        Agriculture products
      </p>
    </Link>
  );
}

export default Logo;
