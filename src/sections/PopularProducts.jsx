import Slider from "../components/Slider";



const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray  dark:text-white-400">
          Discover the latest in innovation and style with our Nike Air Max
          series, pushing the boundaries of comfort and performance.
        </p>
      </div>
      {/* grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 */}
      <div className="mt-16 p-4">
        <Slider/>
      </div>
    </section>
  );
};

export default PopularProducts;
