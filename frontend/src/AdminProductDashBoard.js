import { useState} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm"


function AdminProductDashBoard({products, setProducts}) {
console.log(products);
console.log(setProducts)
// console.log(Array.isArray(products));
const [addFormToggle, setAddFormToggle] = useState(false)
const [editFormToggle, setEditFormToggle] = useState(false)
const [editProduct, setEditProduct] = useState(null)
          function handleDelete(id) {

            fetch(`http://localhost:3000/products/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }

            })
            let updatedProducts = products.filter((pro) => pro.id !== id)
            setProducts(updatedProducts)

          }

          function handleEditToggles(pro) {
            setEditFormToggle(!editFormToggle)
            setEditProduct(pro)

          }


       if (!products) {
        return
       }


    return(
        <div className="admin-product-dashboard">
             {editFormToggle && <EditProductForm editProduct={editProduct} setProducts={setProducts}></EditProductForm>}
            {addFormToggle && <AddProductForm setProducts={setProducts}></AddProductForm>}
            {/* <h1>admin product dashboard</h1> */}
            <header className="admin-product-header">
                <h1>Products</h1>
                <button onClick={() => setAddFormToggle(!addFormToggle)} className="admin-add-product-button">+ Add Product</button>
            </header>

            <table className="admin-product-table">
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Stock</td>
                        <td>Actions</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        products.map((pro) => (
                            <tr>
                                <td><img className="dash-product-image" src={pro.image_url}></img></td>
                        <td>{pro.name}</td>
                        <td>{pro.category}</td>
                        <td>${pro.price}0</td>
                        <td>{pro.inventory_count}</td>
                        <td><FaEdit onClick={() => handleEditToggles(pro)} /><FaTrash onClick={() => handleDelete(pro.id)} /></td> 

                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    )
}

export default AdminProductDashBoard