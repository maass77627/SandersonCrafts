import { FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

function BestSellers({products, setCart, bestsellers, currentUser, setReviews}) {
console.log(bestsellers)
const [toggle, setToggle] = useState(false)
const [currentProduct, setCurrentProduct] = useState(null)

    function handleClick(product) {
        // setCart((prev) => [...prev, {...pro, quantity: 1}])

        // setCart((prev) => {
        //    return prev.map((pro) => pro.id === product.id ? {...pro, quantity: pro.quantity + 1} : {...product, quantity: 1})
        // })
        setCart((prev) => {
    const exists = prev.find((pro) => pro.id === product.id);

    if (exists) {
      return prev.map((pro) =>
        pro.id === product.id
          ? { ...pro, quantity: pro.quantity + 1 }
          : pro
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
    }

    function handleFormToggle(pro) {
        console.log(pro)
        setToggle(!toggle)
        setCurrentProduct(pro)
    }

    if (!bestsellers) {
        return
    }


    console.log("BestSellers currentUser:", currentUser);
console.log("BestSellers currentProduct:", currentProduct);
    return (
        <div className="bestsellerwrap">
            <h1>Shop Our BestSellers</h1>
        <div className="bestseller">
            {/* <h1>Shop Our BestSellers</h1> */}
           {
            bestsellers.map((pro) => (
                <div key={pro.id} className="bestseller-card">
                    {/* <FaRegCommentDots /> */}
                    <img className="bestseller-image" src={pro.image_url}></img>
                    <div className="bestseller-text-wrap">
                        <FaRegCommentDots onClick={() => handleFormToggle(pro)} />
                    <strong><p>{pro.name}</p></strong>
                    <p>${pro.price.slice(0,2)}</p>
                    </div>
                    <button onClick={() => handleClick(pro)} className="bestseller-button">Add to Cart</button>

                </div>

            ))
           }
        </div>
        {toggle && <ReviewForm setToggle={setToggle} setReviews={setReviews} currentProduct={currentProduct} currentUser={currentUser}></ReviewForm>}
        </div>
    )
}

export default BestSellers