


function Review({review}) {






    return (
        <div className="review">
            <div className="review-card">
           <div className="review-header">
            <h4>{review.user.name}</h4>
             <span>{review.created_at}</span>
      </div>

      <div className="review-rating">
        {"⭐".repeat(review.rating)}
      </div>

      <p>{review.comment}</p>
    </div>

        </div>
    )
}

export default Review