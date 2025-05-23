import React from "react";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

function InformationsCompany() {
  return (
    <div className="pt-20">
      <ul className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
        <li className="text-black flex items-center p-2 gap-2 max-[420px]:text-sm">
          <FiPhoneCall className=" text-mainColor text-3xl" />
          <span className="flex flex-col items-center justify-center">
            <a href={`tel:+ 20 45 3202213`} className="text-nowrap">
              + 20 45 3202213
            </a>
            <a
              href={`tel:+ 20 45 3202207`}
              className="text-nowrap px-2"
            >{` + 20 45 3202207`}</a>
            <a
              href={`tel:+ 20 45 3202035`}
              className="text-nowrap"
            >{` + 20 45 3202035`}</a>
          </span>
        </li>
        <li>
          <a
            className="text-black flex items-center p-2 gap-2 max-[420px]:text-sm"
            href="mailto:info@greenphoenixeg.com"
            target="_blank"
            title="send mail"
          >
            <GrMailOption className=" text-mainColor text-3xl" />
            info@greenphoenixeg.com
          </a>
        </li>
        <li>
          <a
            className="text-black flex items-center p-2 gap-2 max-[420px]:text-sm"
            href=" https://wa.me/+201097070703"
            target="_blank"
            title="What'sApp"
          >
            <IoLogoWhatsapp className=" text-mainColor text-3xl" />
            +201097070703
          </a>
        </li>
        {/* <li className="text-black flex items-center p-2 gap-2 max-[420px]:text-sm">
          ZIP-Code:22511
        </li> */}
      </ul>
    </div>
  );
}

export default InformationsCompany;
