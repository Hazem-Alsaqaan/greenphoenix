import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import EarthPicture from "./EarthPicture";
// import MapInfo from "./MapInfo";
function Footer() {
  return (
    <>
      <div className={`bg-linear-to-r from-30% from-lime-700 to-lime-500`}>
        <div
          className={`w-full  px-24  min-h-[350px] flex max-lg:flex-col max-md:px-6`}
        >
          <ContactInfo />
          <QuickLinks />
          <EarthPicture />
        </div>
      </div>
    </>
  );
}

export default Footer;
