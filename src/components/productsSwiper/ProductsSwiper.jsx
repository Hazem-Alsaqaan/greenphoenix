import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Swiper styles
// import "swiper/swiper-bundle.css";
import "./ProductsSwiper.css";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { sliderImages } from "../../../staticData";
function ProductsSwiper() {
  const sliderPictures = sliderImages;
  return (
    <div className="pt-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {sliderPictures.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.url} alt={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductsSwiper;
