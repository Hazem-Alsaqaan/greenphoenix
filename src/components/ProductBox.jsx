import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function ProductBox({ item }) {
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
    <div
      ref={elementRef}
      key={item.id}
      className={`p-5 flex flex-col items-center justify-center transition-opacity duration-1000 ${
        !visibleEElement ? "opacity-0" : "opacity-100"
      }`}
    >
      <img src={item.url} alt={`${item.product_name}`} className="w-32 h-32" />
      <h2 className=" uppercase font-PoppinsRegular pt-2 pb-6 text-xl">
        {item.product_name}
      </h2>
      <Link
        to={`/products/${item.id}`}
        className=" capitalize text-white bg-mainColor px-2 py-1 rounded-2xl font-PoppinsBold flex items-center justify-center gap-2 hover:text-lime-800 duration-150"
      >
        <span>more details</span>
      </Link>
    </div>
  );
}

export default ProductBox;
