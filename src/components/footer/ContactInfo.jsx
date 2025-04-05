import React from "react";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../logo/Logo";
function ContactInfo() {
  return (
    <div className="flex-1 flex flex-col py-10">
      <Logo />
      <div className="pt-5 flex flex-col gap-2">
        <h6 className="text-white flex  gap-2 max-[420px]:text-sm">
          <IoLocationOutline />
          Al-Nasr road, Damanhour, Beheira , Egypt.
        </h6>
        <h6 className="text-white flex  gap-2 max-[420px]:text-sm text-nowrap">
          <FiPhoneCall />
          <span className="flex items-center justify-center max-md:flex-col">
            <span className="text-nowrap">+ 20 45 3202213</span>
            <span className="text-nowrap px-2">{`// + 20 45 3202207`}</span>
            <span className="text-nowrap">{`// + 20 45 3202035`}</span>
          </span>
        </h6>
        <h6>
          <a
            className="text-white flex  gap-2 max-[420px]:text-sm"
            href="mailto:info@greenphoenixeg.com"
            target="_blank"
            title="send mail"
          >
            <GrMailOption />
            email: info@greenphoenixeg.com
          </a>
        </h6>
        <h6>
          <a
            className="text-white flex  gap-2 max-[420px]:text-sm"
            href=" https://wa.me/+201097070703"
            target="_blank"
            title="What'sApp"
          >
            <IoLogoWhatsapp />
            What'sApp: +201097070703
          </a>
        </h6>
      </div>
    </div>
  );
}

export default ContactInfo;
