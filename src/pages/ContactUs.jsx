import React, { useEffect } from "react";
import ContactForm from "../components/contactInfo/ContactForm";
import InformationsCompany from "../components/contactInfo/InformationsCompany";

function ContactUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="min-h-screen px-24 py-44 bg-lime-100 max-md:px-6 relative">
      <ContactForm />
      <InformationsCompany />
    </div>
  );
}

export default ContactUs;
