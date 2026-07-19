import BestSellers from "./BestSellers"
import Hero from "./Hero"
import Break from "./Break"
import Reviews from "./Reviews"

function Home({products, currentUser, setCart, reviews, bestsellers, setReviews}) {


    return (
        <div className="home">
         {currentUser && <p>Welcome {currentUser.name}!</p>}
        
        <Hero></Hero>
        <BestSellers setReviews={setReviews} currentUser={currentUser} bestsellers={bestsellers} setCart={setCart} products={products} ></BestSellers>
        <Reviews currentUser={currentUser} setReviews={setReviews}  reviews={reviews}></Reviews>
        <Break></Break>
        </div>
    )
}

export default Home