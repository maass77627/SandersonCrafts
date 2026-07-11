import {NavLink} from "react-router-dom"
 import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {useState} from "react"



function Nav() {
    const [toggle, setToggle] = useState(false)



    return (
        <header className="nav">
        <div className="nav-logo">
         <img className="nav-image" src="./yarn.webp"></img>
         <div className="text-wrap">
         <h3 className="nav-text">Sanderson Sister</h3>
         <p>crafts</p>
         </div>
         </div>
         {/* <div className="links"> */}
         <NavLink className="link" to="/">Home</NavLink>
         <NavLink className="link" to="/products">Shop</NavLink>
          <NavLink className="link" to="/about">About</NavLink>
          <NavLink className="link" to="/contacts">Contact</NavLink>
          <FaUser onClick={() => setToggle(!toggle)} />
            {
                toggle && <div className="dropdown">
               <NavLink className="link" to="/signup">Sign Up</NavLink>
               <NavLink className="link" to="/login">Login</NavLink>
               <button className="logout-button">Logout</button>
               </div>
            }
         <NavLink className="link" to="/cart"><FaShoppingCart /></NavLink>
         {/* </div> */}
        </header>
    )
}

export default Nav