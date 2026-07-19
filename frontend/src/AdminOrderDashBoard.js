



function AdminOrderDashBoard({orders}) {

console.log(orders)



    return (
        <div className="admin-order-dashboard">
               <h1>Orders</h1> 
               <table className="order-table">
                    <thead>
                        <tr>
                        <td>Order #</td>
                        <td>Customer</td>
                        <td>Date</td>
                        <td>Total</td>
                        <td>Status</td>
                        <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((ord) => (
                                <tr>
                                    <td>{ord.id}</td>
                                    <td>{ord.user?.name}</td>
                                    <td>{new Date(ord.created_at).toLocaleDateString()}</td>
                                    <td>{ord.total_price}</td>
                                    <td>{ord.status}</td>
                                    {/* <td>{ord.status}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
               </table>
        </div>

    )
}

export default AdminOrderDashBoard