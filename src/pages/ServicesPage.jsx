import React, { useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import ServicesCard from "../components/ServicesCard";
import { servicesData } from "../../staticData";

function ServicesPage() {
  const services = servicesData;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="min-h-screen px-24 py-44 bg-white  max-md:px-6 relative">
        <SectionTitle title={"Services"} />
        <div className="flex flex-col items-center justify-center gap-32">
          {services.map((item) => (
            <ServicesCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
