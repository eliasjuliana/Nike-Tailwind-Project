import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl text-capitalize font-bold lg:max-w-lg">
          We Provide You 
          <br/>
          <span className="text-coral-red">
            Super</span> <span className="text-coral-red">Quality</span>
            <br/>
            Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Our shoes are crafted with precision and premium materials, ensuring a blend of unparalleled comfort and lasting durability.</p>
        <p className="mt-6 lg:max-w-lg info-text">Experience the difference with Nike – where superior quality meets unmatched comfort.</p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality