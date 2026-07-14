import {useParams} from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { useState } from "react";
import { useEffect} from "react";


function ProductDetail({products, setCart}) {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    // const product = products.find((pro) => pro.id === Number(id))
     const [quantity, setQuantity] = useState(1)



     useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProduct(data)})
  }, [id])


  function incrementQuantity() {
  setQuantity((prev) => prev + 1)
}

function decrementQuantity() {
  setQuantity((prev) => {
    if (prev > 1) {
      return prev - 1
    }
    return prev
  })
}



     function handleCart(product) {
      const updatedProduct = {...product, quantity: quantity}
      setCart((prev) => [...prev, updatedProduct])
      
     }

        if (!product) {
            return
        }

// console.log(product.reviews.count)
        console.log(product.average_rating.slice(0,1))

    return (
        <div className="product-detail">

            <div className="detail-main">
                <section className="image-section">
            <img onError={(e) => console.log(e.target.src)} className="detail-image" src={`/${product.image_url}`}></img>
            </section>
            <section className="detail-section">
            <h1>{product.name}</h1>
            <p>{"⭐".repeat(product.average_rating.slice(0,1))}  ({product.reviews.length} reviews)</p>
            <h2>${product.price}0</h2>
            <p>{product.description}</p>
            <label>Quantity:</label>
            <div className="quantity-wrap">
             <button onClick={decrementQuantity}>-</button>

             <span>{quantity}</span>

            <button onClick={incrementQuantity}>+</button>
            </div>
            {/* <input onChange={(e) => setQuantity(e.target.value)} min="1" max="10" value={quantity} className="detail-quantity" type="number"></input> */}
            <button onClick={() => handleCart(product)} className="detail-cart-button">Add to Cart</button>
            {/* <button className="detail-buy-button">Buy Now</button> */}
            </section>
             </div>

             <section className="detail-break">
                <div className="detail">
                  <FaHeart />
                  <p>Handmade to Order</p>
                </div>

                <div className="detail">
                  <FaGlobe />
                  <p>Ships in 3-5 business days</p>
                </div>

                <div className="detail">
                  <FaCar />
                  <p>Free Shipping on Orders $75+</p>
                </div>
             </section>
            </div>
    )
}

export default ProductDetail