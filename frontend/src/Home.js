import BestSellers from "./BestSellers"
import Hero from "./Hero"
import Break from "./Break"


function Home({products, currentUser}) {


    return (
        <div className="home">
         {currentUser && <p>Welcome {currentUser.name}!</p>}
        
        <Hero></Hero>
        <BestSellers products={products} ></BestSellers>
        <Break></Break>
        </div>
    )
}

export default Home