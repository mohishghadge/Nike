import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container">
        <h3 className="text-4xl font-semibold text-center font-palanquin">
            What Our 
            <span className="text-coral-red ml-3 mr-3">
             Customers 
            </span>
             Say?
        </h3>
        <p className="info-text mt-4 max-w-lg text-center m-auto">
            Hear genuine stories from our satisfied customers about their 
            exceptional experiences with us.
        </p>
          <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
            {reviews.map((review)=>(
                <ReviewCard key={review.customerName} imgURL = {review.imgURL} 
                customerName = {review.customerName} rating = {review.rating} feedback = {review.feedback}/>
            ))}

          </div>
    </section>
  )
}

export default CustomerReviews