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
          116 Hurrya road, Al- Watanya tower, Shallalat, Alexandria, Egypt.
        </h6>
        <h6 className="text-white flex  gap-2 max-[420px]:text-sm">
          <FiPhoneCall />
          Call: + 203 4878391 // + 203 4878385
        </h6>
        <h6>
          <a
            className="text-white flex  gap-2 max-[420px]:text-sm"
            href="mailto:info@greenphoenix.com"
            target="_blank"
            title="send mail"
          >
            <GrMailOption />
            email: info@greenphoenix.com
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
