import { useEffect } from "react";
// import { Helmet } from "react-helmet-async";

function AboutPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Alshimaa</title>

        <meta
          name="description"
          content="نحن متخصصون في إنتاج وتصدير المحاصيل الزراعية والفواكه الطازجة بجودة عالية. We specialize in the production and export of high-quality fresh agricultural products and fruits."
        />
        <meta
          name="keywords"
          content="إنتاج المحاصيل الزراعية, تصدير الفواكه, الزراعة العضوية, محاصيل طازجة, جودة الفواكه, مزارع محلية, شحن دولي, منتجات زراعية, فواكه طازجة, خضروات طازجة, استيراد وتصدير, الشيماء للمنتجات الزارعية, Agriculture products, fruit export, organic farming, fresh crops, fruit quality, local farms, international shipping, agricultural products, fresh fruits and vegetables, import and export"
        />
      </Helmet> */}
      <div className="min-h-screen px-24 py-56 bg-lime-100 max-md:px-6 relative">
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
