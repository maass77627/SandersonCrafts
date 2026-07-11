import BestSellers from "./BestSellers"
import Hero from "./Hero"
import Break from "./Break"


function Home({products}) {


    return (
        <div className="home">

        
        <Hero></Hero>
        <BestSellers products={products} ></BestSellers>
        <Break></Break>
        </div>
    )
}

export default Home