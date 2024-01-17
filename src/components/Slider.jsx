import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode, Navigation } from "swiper/modules";

import "swiper/css/bundle";

const Slider = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      navigation
      modules={[Navigation, A11y, FreeMode]}
      className="max-w-[90%] lg:max-w-[80%]"
    >
      {products.map((product) => (
        <SwiperSlide key={product.name} {...product}>
          <PopularProductCard key={product.name} {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
