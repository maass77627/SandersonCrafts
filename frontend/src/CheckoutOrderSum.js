




function CheckoutOrderSum({cart}) {



    return (
        <div className="order-sum">
              <h1>Order Summary</h1>
              <div className="sum-cart-items">
                {
                    cart.map((item) => (
                        <div className="sum-card">
                            <img className="sum-image" src={item.image_url}></img>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                        </div>
                    ))
                }
              </div>

              <div className="sum-money">

              </div>
        </div>

    )
}

export default CheckoutOrderSum