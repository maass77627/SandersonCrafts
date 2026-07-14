

function BestSellers({products, setCart, bestsellers}) {
console.log(bestsellers)

    function handleClick(pro) {
        setCart((prev) => [...prev, {...pro, quantity: 1}])
    }

    if (!bestsellers) {
        return
    }

    return (
        <div className="bestsellerwrap">
            <h1>Shop Our BestSellers</h1>
        <div className="bestseller">
            {/* <h1>Shop Our BestSellers</h1> */}
           {
            bestsellers.map((pro) => (
                <div key={pro.id} className="bestseller-card">
                    <img className="bestseller-image" src={pro.image_url}></img>
                    <div className="bestseller-text-wrap">
                    <strong><p>{pro.name}</p></strong>
                    <p>${pro.price.slice(0,2)}</p>
                    </div>
                    <button onClick={() => handleClick(pro)} className="bestseller-button">Add to Cart</button>

                </div>

            ))
           }
        </div>
        </div>
    )
}

export default BestSellers