
import {useState} from "react";


function Checkout({cart, currentUser, setCart}) {
    console.log(cart)
const [ formData, setFormData] = useState({
      payment_status: "",
      shipping_address: "",
      shipping_city: "",
      shipping_cost: "",
      shipping_country: "",
      shipping_name: "",
      shipping_state: "",
      shipping_zip: "",
      status: "",
      stripe_payment_intent_id: "", 
      subtotal: "",
      tax: "",
      total_price: "",
      user_id: "", 
      items: cart
})

 const subtotal = cart.reduce((amount, item) => amount + (item.price*item.quantity), 0)
        console.log(subtotal)
        const tax = subtotal * 8.25
        const shipping = 5.99
        const total = shipping + subtotal + tax

 function handleChange(e) {

    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
 }

 function handleCreateOrder(e) {
    e.preventDefault()
    console.log("CART BEFORE CHECKOUT:", cart)
    fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...formData, 
            subtotal: subtotal,
            shipping_cost: 5.99, 
            tax: tax,
            payment_status: "pending",
            total_price: total,
            status: "pending",
            user_id: currentUser.id
        })
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
    })

 }
 

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout-main">

                <div className="shipping">
            <h1>Shipping Information</h1>
            {/* <form className="shipping-form"> */}
            <label>Full Name</label>
            <input  value={formData.shipping_name} name="shipping_name" onChange={(e) => handleChange(e)} className="input" type="text"></input>
           
            <label>Address</label>
            <input   value={formData.shipping_address} onChange={(e) => handleChange(e)} name="shipping_address" className="input" type="text"></input>
           
            <label>City</label>
            <input   value={formData.shipping_city} onChange={(e) => handleChange(e)} name="shipping_city" className="input" type="text"></input>
            <label>State</label>
            <input   value={formData.shipping_state} onChange={(e) => handleChange(e)} name="shipping_state" className="input" type="text"></input>
            <label>Zip Code</label>
            <input   value={formData.shipping_zip} onChange={(e) => handleChange(e)} name="shipping_zip" className="input" type="text"></input>
            <label>Country</label>
            <input   value={formData.shipping_country} onChange={(e) => handleChange(e)} name="shipping_country" className="input" type="text"></input>
           {/* </form> */}

                </div>
              
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
                <div className="sum-card"><p>SubTotal</p> <p>${subtotal}</p></div>
                <div className="sum-card"><p>Shipping</p> <p>${shipping}</p></div>
                <div className="sum-card"><p>Total</p> <p>${total}</p></div>
                
                <div className="radio-wrap">
                    <div className="input-wrap">
                <input value="debit" name="card" type="radio"></input> <label>Debit Card</label>
                </div>
                <div className="input-wrap">
                <input value="paypal" name="card" type="radio"></input> <label>PayPal</label>
                </div>
                 <button onClick={(e) => handleCreateOrder(e)}>Place Your Order</button>
                  </div>
                 
              </div>
        </div>

           
           
           
           
          
            </div>
        </div>
    )
}

export default Checkout