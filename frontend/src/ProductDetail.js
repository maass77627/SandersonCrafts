import {useParams} from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { useState } from "react";



function ProductDetail({products, setCart}) {
    const {id} = useParams()
    const product = products.find((pro) => pro.id === Number(id))
     const [quantity, setQuantity] = useState()


        if (!product) {
            return
        }


    return (
        <div className="product-detail">

            <div className="detail-main">
                <section className="image-section">
            <img className="detail-image" src="/blanket.webp"></img>
            </section>
            <section className="detail-section">
            <h1>{product.name}</h1>
            <h2>${product.price}0</h2>
            <p>{product.description}</p>
            <label>Quantity:</label>
            <input onChange={(e) => setQuantity(e.target.value)} min="1" max="10" value={quantity} className="detail-quantity" type="number"></input>
            <button className="detail-cart-button">Add to Cart</button>
            <button className="detail-buy-button">Buy Now</button>
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