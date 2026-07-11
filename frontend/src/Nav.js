import {NavLink} from "react-router-dom"

function Nav() {



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
         <NavLink className="link" to="/home">Home</NavLink>
         <NavLink className="link" to="/products">Products</NavLink>
         <NavLink className="link" to="/cart">Cart</NavLink>
         {/* </div> */}
        </header>
    )
}

export default Nav