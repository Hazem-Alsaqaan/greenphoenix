import React from "react";

function WhatsButton() {
  return (
    <>
      <a
        className="fixed bottom-5 left-5 w-12 h-12 animate-pulse z-40"
        href="mailto:info@greenphoenix.com"
        target="_blank"
        title="send mail"
      >
        <img
          src={`https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/mail_2772369_rwlv9j.png`}
          alt=""
        />
      </a>
      {/* <a
        className="fixed bottom-5 left-5 w-8 h-8"
        href=" https://wa.me/+201097070703"
        target="_blank"
        title="What'sApp"
      >
        <img
          src={`https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/whatsapp_2504957_tuy18h.png`}
          alt=""
        />
      </a> */}
    </>
  );
}

export default WhatsButton;
