import React, { useEffect } from "react";
import { frozenFruits } from "../../staticData";
import ProductBox from "../components/ProductBox";

function FrozenFruits() {
  const frozenFruitsData = frozenFruits;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen px-24 py-44 bg-white max-md:px-6 relative">
      <h1 className="text-3xl font-WorkSansBlack text-center py-10">
        Frozen Fruits
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {frozenFruitsData.map((item) => (
          <ProductBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FrozenFruits;
