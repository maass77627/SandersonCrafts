

import { FaHeart } from "react-icons/fa";
import {Link } from "react-router-dom"

function Hero() {


    return (
        <section className="Hero">
            <div className="hero-text">
            <h1>Handmade in the Home  </h1> <FaHeart/>
            <p>Unique handcrafted items made with care and perfect for any moment</p>
            <Link to="/products">
            <button>Shop Now</button>
            </Link>
            </div>
        </section>
    )
}

export default Hero