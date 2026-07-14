import BestSellers from "./BestSellers"
import Hero from "./Hero"
import Break from "./Break"
import Reviews from "./Reviews"

function Home({products, currentUser, setCart, reviews, bestsellers}) {


    return (
        <div className="home">
         {currentUser && <p>Welcome {currentUser.name}!</p>}
        
        <Hero></Hero>
        <BestSellers bestsellers={bestsellers} setCart={setCart} products={products} ></BestSellers>
        <Reviews reviews={reviews}></Reviews>
        <Break></Break>
        </div>
    )
}

export default Home