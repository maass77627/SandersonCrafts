




function Reviews({reviews}) {


         if (!reviews) {
            return
         }

    return (
        <div className="reviews">
            { reviews.map((rev) => (
                <div className="review-card">
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