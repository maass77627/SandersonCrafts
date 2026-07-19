import { useState } from "react";


function ReviewForm({currentUser, currentProduct, setReviews, setToggle}) {
    console.log(currentProduct)
    console.log(currentUser)
const [starNumber, setStarNumber] = useState("")
const [comment, setComment] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/reviews", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            comment: comment,
            rating: Number(starNumber),
            product_id: currentProduct.id,
            user_id: currentUser.id
        })
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setReviews((prev) => [...prev, json])
    })
    setToggle(false)
}

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="review-form">
            <p>Write a Review...</p>
            <label>Comment</label>
            <input onChange={(e) => setComment(e.target.value)} type="text" value={comment}></input>
            <label>Star Rating</label>
            <select value={starNumber} onChange={(e) => setStarNumber(e.target.value)} >
                <option value="1" name="one">1</option>
                <option value="2" name="two">2</option>
                <option value="3" name="three">3</option>
                <option value="4" name="four">4</option>
                <option value="5" name="five">5</option>
            </select>
            <button type="submit">Submit</button>

        </form>
    )
}

export default ReviewForm