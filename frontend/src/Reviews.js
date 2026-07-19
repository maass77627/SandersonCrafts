
import { FaEdit, FaTrash } from "react-icons/fa";



function Reviews({reviews, setReviews, currentUser}) {
console.log(reviews)

function handleDelete(id) {
  fetch(`http://localhost:3000/reviews/${id}`, {
    method: "DELETE"
  })
  
  let updatedReviews = reviews.filter((review) => review.id !== id)
  setReviews(updatedReviews)
  

}

         if (!reviews) {
            return
         }

    return (
        <div className="reviews">
            { reviews && reviews.map((rev) => (
                <div key={rev?.id} className="review-card">
                {currentUser?.id === rev.user_id &&  <FaTrash onClick={() => handleDelete(rev.id)} className="trash-icon"></FaTrash>}
      <h3>{rev.user.name}</h3>
       <img className="review-image" src={rev.product.image_url}></img>
      <div className="review-rating">
        {"⭐".repeat(rev.rating)}
      </div>

      <p>{rev.comment}</p>

      <small>
        {new Date(rev.created_at).toLocaleDateString()}
      </small>
    </div>
            ))
          
}
        </div>
    )
}

export default Reviews