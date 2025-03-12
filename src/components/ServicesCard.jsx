import React from "react";

function ServicesCard({ item }) {
  return (
    <>
      <div className="flex rounded-lg shadow-2xl  max-md:flex-col-reverse overflow-hidden z-10 ">
        <div className="flex-1 bg-white p-6 border-r-[3px] border-solid border-lime-200">
          <h1 className="capitalize text-2xl text-mainColor font-WorkSansBold">
            {item.title}
          </h1>
          <p className="py-4 text-black">{item.description}</p>
        </div>
        <div className="flex-1">
          <img src={item.icon} alt="services_pic" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
