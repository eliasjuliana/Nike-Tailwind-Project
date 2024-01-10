import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-cols-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer} width={773} height={687} className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl text-capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">
            Special</span> <span >Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Step into greatness with our limited-time special offer. Elevate your game with premium Nike gear at unbeatable prices. </p>
        <p className="mt-6 lg:max-w-lg info-text">Save up to 30% on selected Nike kicks. From iconic classics to cutting-edge performance shoes, step out in style.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers