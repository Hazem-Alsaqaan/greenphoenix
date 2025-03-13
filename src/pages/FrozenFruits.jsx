import React from "react";
import { frozenFruits } from "../../staticData";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
function FrozenFruits() {
  const frozenFruitsData = frozenFruits;
  return (
    <div className="py-10">
      <h1 className="text-3xl font-WorkSansBlack text-center py-10">
        Frozen Fruits
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {frozenFruitsData.map((item) => (
          <div
            key={item.id}
            className=" shadow-2xl p-5 flex flex-col items-center justify-center"
          >
            <img
              src={item.url}
              alt={`${item.product_name}`}
              className="w-32 h-32"
            />
            <h2 className=" uppercase font-PoppinsRegular py-2 text-3xl">
              {item.product_name}
            </h2>
            <Link
              to={`/products/${item.id}`}
              className=" capitalize text-mainColor font-PoppinsBold flex items-center justify-center gap-2 hover:text-lime-500 duration-150"
            >
              <FaLongArrowAltRight className=" animate-spin" />
              <span>more details</span>
              <FaLongArrowAltLeft className=" animate-spin" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrozenFruits;
