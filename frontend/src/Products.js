
import {useState} from "react";
import {Link} from "react-router-dom"

function Products({products, categories, fetchProducts}) {
const [selectedCategory, setSelectedCategory] = useState("")
const [maxPrice, setMaxPrice] = useState(100)
// const [feature, setFeature] = useState("")
// const [setCategoryFilter, ]

// function handleCategoryFilter(cat) {
//     console.log(cat)

// }

function handleChange(e) {
    fetchProducts(e.target.value)
}

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
                        <select onChange={(e) => handleChange(e)} >
                            <option value="" name="none">none</option>
                            <option value="highest_reviews" name="highest_reviews">highest_reviews</option>
                            <option value="most_purchased" name="most_purchased">most_purchased</option>
                            <option value="price_high" name="price_high">price_high</option>
                            <option value="price_low" name="price_low">price_low</option>
                            <option value="newest" name="newest">newest</option>
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
                    <img className="product-image" src={pro.image_url}></img>
                    </Link>
                    <div className="product-text-wrap">
                    <strong><p>{pro.name}</p></strong>
                    <p>${pro.price.slice(0,2)}</p>
                    </div>
                    

                </div>
                    ))
                }
                </div>

            </main>

        </div>
    )
}

export default Products