import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../staticData";
import ProductsSeassonsTable from "../components/ProductsSeassonsTable";
import NotFoundPage from "./NotFoundPage";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>GreenphoenixEg</title>
        <link rel="canonical" href="https://www.greenphoenixeg.com/" />
        <meta
          name="description"
          content="نحن متخصصون في إنتاج وتصدير المحاصيل الزراعية والفواكه الطازجة والمثلجة بجودة عالية. We specialize in the production and export of high-quality fresh and frozen agricultural products and fruits."
        />
        <meta
          name="keywords"
          content="إنتاج المحاصيل الزراعية, تصدير الفواكه, الزراعة العضوية, محاصيل طازجة, جودة الفواكه, مزارع محلية, شحن دولي, منتجات زراعية, فواكه طازجة ومثلجة, خضروات طازجة ومثلجة, استيراد وتصدير, جرين فونكس للمنتجات الزارعية,GreenphoenixEg, GreenphoenixEg for agricultures, GreenphoenixEg egypt, Greenphoenix egypt, Agriculture products, fruit export, organic farming, fresh crops, frozen crops, fresh vegetables, frozen vegetables, fresh fruits, frozen fruits, fruit quality, local farms, international shipping, agricultural products, fresh fruits and vegetables, import and export"
        />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Green Phoenix EG | تصدير المنتجات الزراعية من مصر"
        />
        <meta
          property="og:description"
          content="مصدرك الموثوق للخضروات والفواكه المصرية الطازجة والمجمدة - شهادات جودة دولية - توصيل عالمي"
        />
        <meta property="og:url" content="https://www.greenphoenixeg.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.greenphoenixeg.com/images/og-banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Green Phoenix EG" />
        <meta property="og:locale" content="ar_EG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Green Phoenix EG | تصدير المنتجات الزراعية من مصر"
        />
        <meta
          name="twitter:description"
          content="خضروات وفواكه مصرية طازجة بمعايير تصديرية عالية - شهادات ISO وHACCP"
        />
        <meta
          name="twitter:image"
          content="https://www.greenphoenixeg.com/images/twitter-banner.jpg"
        />
        <meta property="og:locale:alternate" content="en_US" />
        <meta
          property="og:description"
          content="Egyptian agricultural export leader - Fresh & Frozen fruits/vegetables - Global delivery"
        />
      </Helmet>
      <div className="min-h-screen px-24 py-44 bg-white max-md:px-6 relative">
        {singleItem.summary ? (
          <p className="flex justify-center font-PoppinsRegular text-lime-800 py-4">
            {singleItem.summary}
          </p>
        ) : (
          ""
        )}
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
                  <ProductsSeassonsTable
                    key={product.month}
                    product={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsProductPage;
