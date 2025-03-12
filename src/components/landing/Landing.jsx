import React from "react";
function Landing() {
  return (
    <div className="landing relative bg-linear-to-r from-30% from-green-950 to-green-900 min-h-screen flex items-center overflow-hidden">
      <div className="flex items-center py-32 px-24 max-lg:flex-col-reverse max-lg:justify-center max-sm:px-0">
        {/* countainer text content for landing section */}
        <div className="flex-1 pr-6 max-lg:p-6">
          <div className="text-stone-300">
            <div className=" font-WorkSansBlack text-white pb-6 ">
              <h1 className="text-6xl text-nowrap uppercase max-sm:text-3xl max-[370px]:text-2xl">
                high-quality
              </h1>
              <h2 className="text-4xl text-mainColor py-2 text-nowrap uppercase max-sm:text-xl max-[370px]:text-base">
                {" "}
                agricultural
                <span className="text-mainColor"> products</span>
              </h2>
            </div>
            <p className="text-stone-200">
              Combining sustainable farming practices{" "}
              <span className=" text-mainColor">With</span> innovative
              technology
              <span className="text-mainColor"> to meet</span> the demands of
              both local and global markets
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center max-lg:my-20 ">
          <div className="w-[400px] p-6 bg-gradient-to-l from-30% from-green-950 to-green-900 max-[470px]:w-72 max-[470px]:p-3 max-[370px]:w-52">
            <img
              src={
                "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1741505654/greenPhoenix/landing_bg_tbg4vm.jpg"
              }
              alt="landing_pic.."
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
