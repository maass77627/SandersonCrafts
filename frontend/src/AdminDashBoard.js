import {Link} from "react-router-dom";
import {useState} from "react";
import AdminProductDashBoard from "./AdminProductDashBoard"
import AdminOrderDashBoard from "./AdminOrderDashBoard"

function AdminDashBoard({products, setProducts, orders}) {

const [toggleProducts, setToggleProducts] = useState(false)
const [toggleOrders, setToggleOrders] = useState(false)



function handleToggles(e) {
    console.log(e.target.value)
    switch (e.target.value) {
        case "orders":
        setToggleOrders(true)
        setToggleProducts(false)
        break
        case "products":
        setToggleOrders(false)
        setToggleProducts(true)
        break
    }

}


    return (
        <div className="admin-dashboard">
            <h1>Admin DashBoard</h1>
            <main className="admin-main">
                <aside className="admin-options">
                    <h3>Options</h3>
                    <button value="products" className="admin-option-button" onClick={(e) => handleToggles(e)}>Products</button>
                    <button value="orders" className="admin-option-button" onClick={(e) => handleToggles(e)}>Orders</button>
                </aside>
               {/* <div className="dashboard"> */}
                {toggleProducts && <AdminProductDashBoard setProducts={setProducts}  products={products}></AdminProductDashBoard>}
                 {toggleOrders && <AdminOrderDashBoard orders={orders} setProducts={setProducts}  products={products}></AdminOrderDashBoard>}

            {/* </div> */}
               

            </main>
            {/* <div className="dashboard">
                {toggleProducts && <AdminProductDashBoard></AdminProductDashBoard>}

            </div> */}

        </div>
    )
}

export default AdminDashBoard