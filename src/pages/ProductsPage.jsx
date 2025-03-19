import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsSwiper from "../components/productsSwiper/ProductsSwiper";

function ProductsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen px-24 py-44 bg-white max-md:px-6 relative">
      <div className="mb-12 flex items-center justify-center  cursor-context-menu select-none ">
        <h1
          className={`px-20 py-1 rounded-lg text-mainColor  bg-gradient-to-r from-0% from-lime-200 via-50% via-green-950 to-100% to-lime-200 text-nowrap text-6xl font-WorkSansBlack max-md:text-4xl max-sm:text-3xl max-sm:px-10 relative`}
        >
          Our Products
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <Link
          to={"/products/frozen"}
          className="w-64 p-3 m-3 flex justify-center items-center rounded-full overflow-hidden bg-green-950  text-3xl cursor-pointer hover:bg-green-900  duration-150"
        >
          <p className="text-xl font-WorkSansRegular text-mainColor max-sm:text-base capitalize">
            frozen
          </p>
        </Link>
        <Link
          to={"/products/frish"}
          className="w-64 p-3 m-3 flex justify-center items-center rounded-full overflow-hidden bg-green-950  text-3xl cursor-pointer hover:bg-green-900  duration-150"
        >
          <p className="text-xl font-WorkSansRegular text-mainColor max-sm:text-base capitalize">
            frish
          </p>
        </Link>
      </div>
      <ProductsSwiper />
    </div>
  );
}

export default ProductsPage;
