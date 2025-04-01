import React, { useEffect, useRef, useState } from "react";

function ServicesCard({ item }) {
  const [visibleEElement, setVisibleElement] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element is in the viewport
        setVisibleElement(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <>
      <div
        ref={elementRef}
        className={`flex rounded-lg shadow-2xl  max-xl:flex-col-reverse overflow-hidden z-10 transition-opacity duration-1000 ${
          !visibleEElement ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex-4 bg-white p-6 border-r-[3px] border-solid border-lime-200">
          <h1 className="capitalize text-2xl text-mainColor font-WorkSansBold">
            {item.title}
          </h1>
          <p className="py-4 text-black">{item.description}</p>
        </div>
        <div className="flex-1 p-10 relative flex items-center justify-center">
          <img
            src={item.icon}
            alt="services_pic"
            className="absolute top-10 w-72 h-44 z-20 border-y-[6px] border-white border-solid hover:border-y-[12px] duration-150 max-[390px]:w-52 max-[390px]:h-38 "
          />
          <div className=" bg-mainColor w-72 h-44 skew-y-12  max-[390px]:w-52 max-[390px]:h-38 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
