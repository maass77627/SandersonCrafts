import CheckoutShipping from "./CheckoutShipping"
import CheckoutOrderSum from "./CheckoutOrderSum"



function Checkout({cart}) {




    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout-main">
               <CheckoutShipping></CheckoutShipping>
               <CheckoutOrderSum cart={cart}></CheckoutOrderSum>
            </div>
        </div>
    )
}

export default Checkout