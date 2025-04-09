import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsSwiper from "../components/productsSwiper/ProductsSwiper";
import { Helmet } from "react-helmet-async";

function ProductsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>GreenphoenixEg Products</title>
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
            <p className="text-xl font-PoppinsRegular text-mainColor max-sm:text-base uppercase">
              frozen
            </p>
          </Link>
          <Link
            to={"/products/frish"}
            className="w-64 p-3 m-3 flex justify-center items-center rounded-full overflow-hidden bg-green-950  text-3xl cursor-pointer hover:bg-green-900  duration-150"
          >
            <p className="text-xl font-PoppinsRegular text-mainColor max-sm:text-base uppercase">
              fresh
            </p>
          </Link>
        </div>
        <ProductsSwiper />
      </div>
    </>
  );
}

export default ProductsPage;
