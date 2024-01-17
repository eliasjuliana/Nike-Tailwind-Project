import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">What our
        <span className="text-coral-red"> customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center  dark:text-white-400">Listen to real stories from our customers as they share their exceptional experiences with us. Discover firsthand the genuine satisfaction that sets us apart.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=> (
          <ReviewCard key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews