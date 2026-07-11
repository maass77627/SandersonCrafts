

function BestSellers({products}) {




    return (
        <div className="bestsellerwrap">
            <h1>Shop Our BestSellers</h1>
        <div className="bestseller">
            {/* <h1>Shop Our BestSellers</h1> */}
           {
            products.map((pro) => (
                <div key={pro.id} className="bestseller-card">
                    <img className="bestseller-image" src="/blanket.webp"></img>
                    <div className="bestseller-text-wrap">
                    <strong><p>{pro.name}</p></strong>
                    <p>${pro.price.slice(0,2)}</p>
                    </div>
                    <button className="bestseller-button">Add to Cart</button>

                </div>

            ))
           }
        </div>
        </div>
    )
}

export default BestSellers