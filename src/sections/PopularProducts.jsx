import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextSliderArrow from "../components/NextSliderArrow";
import PrevSliderArrow from "../components/PrevSliderArrow";


const PopularProducts = () => {
  //slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    swipeToSlide: true,
    nextArrow: <NextSliderArrow />,
    prevArrow: <PrevSliderArrow />,
    
  };

  return (
    <section id="products" className="max-container maz-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Discover the latest in innovation and style with our Nike Air Max
          series, pushing the boundaries of comfort and performance.
        </p>
      </div>
      {/* grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 */}
      <div className="mt-16 p-4">
        <Slider {...settings}>
            {products.map((product) => (
              <PopularProductCard key={product.name} {...product} />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularProducts;
