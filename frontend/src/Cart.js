import {useState} from "react";
import { FaTrash } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import { useNavigate} from "react-router-dom"

function Cart({cart, setCart}) {
 const navigate = useNavigate()
    const [total, setTotal] = useState(0)

    function deleteCartItem(item) {
             let updatedCart = cart.filter((cartitem) => cartitem.id !== item.id)
             setCart(updatedCart)
    }

    const subtotal = cart.reduce((amount, item) => amount + (item.price*item.quantity), 0)
        console.log(subtotal)

        function handleCheckout() {
            console.log(cart)
            navigate("/checkout")
        }

        function incrementQuantity(id) {
            let updatedCart = cart.map((item) => 
                item.id === id ? {...item, quantity: item.quantity + 1} : item
        )
              
                 setCart(updatedCart)
        }

        function decrementQuantity(id) {
             let updatedCart = cart.map((item) => 
                item.id === id && item.quantity > 0 ? {...item, quantity: item.quantity - 1} : item
        )
              
                 setCart(updatedCart)
            
        }

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <table className="cart-table">
              <thead>
              <tr>
                <td>Item</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
              </thead>
              <tbody>
                {
                    cart.map((item) => (
                        <tr key={item.id}>
                           
                     <td>
                        <div className="item-wrap">
                    {item.name}
                    <img className="cart-image" src={item.image_url}></img>
                    </div>
                    </td>
                <td>${item.price.slice(0,2)}</td>
                <td><div className="quant-wrap"><button onClick={() => decrementQuantity(item.id)}>-</button>{item.quantity}<button onClick={() => incrementQuantity(item.id)}>+</button></div></td>
                <td>${item.quantity*item.price}</td>
                <td><FaTrash onClick={() => deleteCartItem(item)} /></td>
              </tr>
                    ))
                }
                
              </tbody>
            </table>
            <div className="checkout-container">
            <p className="cart-total">Cart Total: ${subtotal}.00</p>
            <button onClick={() => handleCheckout()} className="checkout-button">Checkout</button>
            </div>
        </div>
    )
}

export default Cart