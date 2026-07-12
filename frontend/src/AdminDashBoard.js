import {Link} from "react-router-dom";
import {useState} from "react";
import AdminProductDashBoard from "./AdminProductDashBoard"

function AdminDashBoard(products, setProducts) {

const [toggleProducts, setToggleProducts] = useState(false)




    return (
        <div className="admin-dashboard">
            <h1>Admin DashBoard</h1>
            <main className="admin-main">
                <aside className="admin-options">
                    <h3>Options</h3>
                    <button className="admin-option-button" onClick={() => setToggleProducts(!toggleProducts)}>Products</button>
                </aside>
               {/* <div className="dashboard"> */}
                {toggleProducts && <AdminProductDashBoard  products={products}></AdminProductDashBoard>}

            {/* </div> */}
               

            </main>
            {/* <div className="dashboard">
                {toggleProducts && <AdminProductDashBoard></AdminProductDashBoard>}

            </div> */}

        </div>
    )
}

export default AdminDashBoard