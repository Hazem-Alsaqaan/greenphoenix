import React from "react";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

function InformationsCompany() {
  return (
    <div className="pt-20">
      <ul className="flex items-center justify-between">
        <li className="text-black flex items-center gap-2 max-[420px]:text-sm">
          <FiPhoneCall className=" text-mainColor text-3xl" />
          Call: + 203 4878391 // + 203 4878385
        </li>
        <li>
          <a
            className="text-black flex items-center gap-2 max-[420px]:text-sm"
            href="mailto:info@greenphoenixeg.com"
            target="_blank"
            title="send mail"
          >
            <GrMailOption className=" text-mainColor text-3xl" />
            email: info@greenphoenixeg.com
          </a>
        </li>
        <li>
          <a
            className="text-black flex items-center gap-2 max-[420px]:text-sm"
            href=" https://wa.me/+201097070703"
            target="_blank"
            title="What'sApp"
          >
            <IoLogoWhatsapp className=" text-mainColor text-3xl" />
            What'sApp: +201097070703
          </a>
        </li>
      </ul>
    </div>
  );
}

export default InformationsCompany;
