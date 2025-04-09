import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function AboutPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>GreenphoenixEg About</title>
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
            About us
          </h1>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 max-md:flex-col">
            <div className="flex-1">
              <div className="text-green-950  font-WorkSansRegular text-2xl leading-10 max-lg:text-xl max-md:text-base">
                <p>
                  Green Phoenix - Freshness in Every Bite Green Phoenix is a
                  leading company specializing in the production and export of
                  high-quality fruits and vegetables. With a commitment to
                  excellence, we ensure that our products meet international
                  standards, delivering freshness and superior taste to markets
                  worldwide. Our carefully selected produce includes a wide
                  range of fruits and vegetables, cultivated using sustainable
                  agricultural practices. We take pride in our efficient supply
                  chain, ensuring timely delivery and maintaining the highest
                  quality from farm to table. At Green Phoenix, we strive to
                  build long-term partnerships by providing fresh, healthy, and
                  natural products that satisfy global demands. Whether for
                  local or international markets, we guarantee premium quality
                  and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
