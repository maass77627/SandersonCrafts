




function CheckoutOrderSum({cart}) {



    return (
        <div className="order-sum">
              <h1>Order Summary</h1>
              <div className="sum-cart-items">
                <div className="sum-labels">
                    <p>name</p>
                    <p></p>
                    <p>price</p>
                    <p>quantity</p>
                </div>
                
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
                <div className="sum-card"><p>SubTotal</p> <p>amount</p></div>
                <div className="sum-card"><p>Shipping</p> <p>amount</p></div>
                <div className="sum-card"><p>Total</p> <p>amount</p></div>
                <label>Debit Card</label>
                <input value="debit" name="card" type="radio"></input>
                <input name="card" type="radio"></input>
                <input name="card" type="radio"></input>

              </div>
        </div>

    )
}

export default CheckoutOrderSum