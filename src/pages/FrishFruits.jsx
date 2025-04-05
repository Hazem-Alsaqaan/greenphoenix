import React, { useEffect } from "react";
import { frishFruitsData } from "../../staticData";
import ProductBox from "../components/ProductBox";

function FrishFruits() {
  const frishFruits = frishFruitsData;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen px-24 py-44 bg-white max-md:px-6 relative">
      <h1 className="text-3xl font-WorkSansBlack text-center py-10">
        Fresh Fruits
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {frishFruits.map((item) => (
          <ProductBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FrishFruits;
