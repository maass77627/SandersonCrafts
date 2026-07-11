import BestSellers from "./BestSellers"
import Hero from "./Hero"


function Home({products}) {


    return (
        <div className="home">

        
        <Hero></Hero>
        <BestSellers products={products} ></BestSellers>
        </div>
    )
}

export default Home