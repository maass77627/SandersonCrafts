
import {useState} from "react";
import {Link} from "react-router-dom"

function Products({products, categories}) {
const [selectedCategory, setSelectedCategory] = useState("")
const [maxPrice, setMaxPrice] = useState(100)
// const [setCategoryFilter, ]

// function handleCategoryFilter(cat) {
//     console.log(cat)

// }

const updatedProducts = (selectedCategory ? products.filter((pro) => {
    if (selectedCategory === "All") {
        return true
    }
    return pro.category === selectedCategory
    }) : products).filter((item) => item.price < maxPrice)

    return (
        <div className="products">
            <header className="product-header"><h1>Shop</h1></header>
             <header className="product-header-two">
                <p>Showing all products</p>
                        <label>Sort By</label>
                        <select>
                            <option>Blankets</option>
                            <option>Hats</option>
                            <option>Scarves</option>
                            <option>Baby Items</option>
                            <option>Home Decor</option>
                        </select>
                        </header> 
            <main className="product-main">
                
                <aside className="product-aside">
                    <div className="product-categories">
                    <h2>Categories</h2>
                    <div className="category-wrap">
                    {
                        categories.map((cat) => (
                            <button onClick={() => setSelectedCategory(cat)} className="category-button" key={cat.id}>{cat}</button>
                        ))
                    }
                    </div>
                    </div>
                    <div className="product-categories">
                        <div className="product-filters">
                    <h2>Filters</h2>
                    <p>Price</p>
                    <p>Max Price: ${maxPrice}</p>
                    <input className="range" onChange={(e) => setMaxPrice(Number(e.target.value))} type="range" min="0" max="100" value={maxPrice}></input>
                    <div className="label-wrap">
                    <label>$0</label><label>$100</label>
                    </div>
                    </div>
                    </div>
                </aside>
                
                <div className="product-card-container">
                    
                {
                    updatedProducts.map((pro) => (
                        <div key={pro.id} className="product-card">
                            <Link to={`/products/${pro.id}`}>
                    <img className="product-image" src="/blanket.webp"></img>
                    </Link>
                    <div className="product-text-wrap">
                    <strong><p>{pro.name}</p></strong>
                    <p>${pro.price.slice(0,2)}</p>
                    </div>
                    {/* <button className="product-button">Add to Cart</button> */}

                </div>
                    ))
                }
                </div>

            </main>

        </div>
    )
}

export default Products