import { useState} from "react"

function EditProductForm({setProducts, editProduct}) {
    console.log(setProducts)
    console.log(editProduct)
    const [formData, setFormData] = useState({
         name: editProduct.name,
         price: editProduct.price,
         description: editProduct.description,
         image_url: editProduct.image_url,
         inventory_count: editProduct.inventory_count,
         category: editProduct.category
     })


     function handleChange(e) {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
   
}

function handleSubmit(e) {
    e.preventDefault()
     fetch(`http://localhost:3000/products/${editProduct.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
      return res.json();
    })
    .then((newProduct) => {
      console.log(newProduct);

      
    //   setProducts.setProducts((prev) => [...prev, newProduct]);
       setProducts((prev) =>
  prev.map((product) =>
    product.id === newProduct.id ? newProduct : product
  )
);
      
      setFormData({
        name: "",
        price: "",
        description: "",
        image_url: "",
        inventory_count: "",
        category: ""
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
}
    




    return (
          <form onSubmit={(e) => handleSubmit(e)} className="edit-product-form">
            <h3>Edit Product Form</h3>
                <label>Name:</label>
               <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name}></input>
               <label>Price:</label>
               <input onChange={(e) => handleChange(e)} type="number" min="0" name="price" value={formData.price}></input>
               <label>Description:</label>
               <input onChange={(e) => handleChange(e)} type="text" name="description" value={formData.description}></input>
               <label>Image URL:</label>
               <input onChange={(e) => handleChange(e)} type="text" name="image_url" value={formData.image_url}></input>
               <label>Inventory Count:</label>
               <input onChange={(e) => handleChange(e)} type="number" min="0" name="inventory_count" value={formData.inventory_count}></input>
               <label>Category:</label>
               <input onChange={(e) => handleChange(e)} type="text" name="category" value={formData.category}></input>
               <button type="submit">Submit</button>
            </form>
    )
}

export default EditProductForm