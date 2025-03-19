import React from "react";
// import { countriesData } from "../../staticData";

function WorldSection() {
  //   const countries = countriesData;
  return (
    <>
      <div className="pb-40 bg-white min-h-screen flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1742387039/greenPhoenix/pngwing.com_34_wpcd4p.png"
          alt=""
          className=" opacity-20 animate-pulse"
        />
        {/* <div className="w-full px-24 py-44 grid grid-cols-4 justify-items-start items-center gap-2 max-md:px-6 max-md:grid-cols-2 ">
          {countries.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-0.5"
            >
              <img src={item.photo} alt={item.title} className="w-5" />
              <p className="text-xs">{item.title}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default WorldSection;
