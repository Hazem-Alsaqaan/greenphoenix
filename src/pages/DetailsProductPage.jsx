import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../staticData";
import ProductsSeassonsTable from "../components/ProductsSeassonsTable";

function DetailsProductPage() {
  const { id } = useParams();
  const products = allProducts;
  const [singleItem, setSingleItem] = useState();
  const notFoundParams = products.find((item) => item.id == id);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const getProduct = () => {
      products.map((item) => item.id == id && setSingleItem(item));
    };
    getProduct();
  }, [id, products]);
  if (!notFoundParams) {
    return <NotFoundPage />;
  }
  if (!singleItem) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen px-24 py-56 bg-white max-md:px-6 relative">
      {/* <h1 className="flex justify-center font-PoppinsBlack text-xl py-4">
        Details
      </h1> */}
      <div>
        <div className="flex items-center max-sm:flex-col">
          <div className="flex-1">
            <img
              className={` max-w-[280px]`}
              src={singleItem.url}
              alt="greenPhoenix"
            />
          </div>
          <div className="flex-1 p-2">
            <h1 className=" text-4xl font-PoppinsBlack text-mainColor py-2">
              {singleItem.product_name}
            </h1>
            <div className="flex items-center  gap-1 flex-wrap">
              {singleItem.seasons.map((product) => (
                <ProductsSeassonsTable key={product.month} product={product} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex-1 z-10">
          <p className="py-2">{singleItem ? singleItem.description : ""}</p>
        </div> */}
      </div>
    </div>
  );
}

export default DetailsProductPage;
