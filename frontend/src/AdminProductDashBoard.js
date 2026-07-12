


function AdminProductDashBoard({products}) {





    return(
        <div className="admin-product-dashboard">
            <h1>admin product dashboard</h1>
            <header>
                <button>+ Add Product</button>
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
                                <td>Image</td>
                        <td>Product</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Stock</td>
                        <td>Actions</td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    )
}

export default AdminProductDashBoard