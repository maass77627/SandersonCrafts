
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./Nav";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import BestSellers from './BestSellers';
import Home from "./Home";
import Products from "./Products"
import ProductDetail from "./ProductDetail"
import SignUp from "./SignUp";
import Login from "./Login";
import AdminDashBoard from "./AdminDashBoard";
import About from "./About";
import Contact from "./Contact"
import Cart from "./Cart"
import Checkout from "./Checkout"
import UserPage from "./UserPage"

function App() {
  const [products, setProducts] = useState([])
 const [currentUser, setCurrentUser] =  useState(null)
const [cart, setCart] = useState([])
const [reviews, setReviews] = useState([])
const [bestsellers, setBestSellers] = useState([])

 function handleLogout() {
  fetch("http://localhost:3000/logout", {
    method: "DELETE",
    credentials: "include"
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setCurrentUser(null);
  });
}

function fetchProducts(sortOption = "") {
  console.log(sortOption)
  let url = "http://localhost:3000/products"

  if (sortOption) {
    url += `?sort=${sortOption}`
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setProducts(data)
    })
}

useEffect(() => {
  fetchProducts()
}, [])

useEffect(() => {
  fetch("http://localhost:3000/products/best_sellers", {
    // credentials: "include",
  })
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
    setBestSellers(json)
  })

}, [])

useEffect(() => {
  fetch("http://localhost:3000/me", {
    credentials: "include",
  })
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
    setCurrentUser(json)
  })

}, [])


// useEffect(() => {
//   fetch("http://localhost:3000/products")
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json)
//     setProducts(json)
//   })

// }, [])

useEffect(() => {
  fetch("http://localhost:3000/reviews")
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
    setReviews(json)
  })

}, [])

const categories = [ "All", ...new Set(products.map((pro) => pro.category))]

  return (
    <div className="App">
      <BrowserRouter>
      <Nav handleLogout={handleLogout} currentUser={currentUser}></Nav>
      <Routes>
      <Route path="/" element={<Home bestsellers={bestsellers} reviews={reviews} setCart={setCart} currentUser={currentUser}  products={products}></Home>}></Route>
      <Route path="/products" element={<Products fetchProducts={fetchProducts} categories={categories} products={products}></Products>}></Route>
      <Route path="/products/:id" element={<ProductDetail setCart={setCart} categories={categories} products={products}></ProductDetail>}></Route>
      {/* <Route path="/signup" element={<SignUp ></SignUp>}></Route>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} ></Login>}></Route> */}
       <Route path="/signup" element={<UserPage ></UserPage>}></Route>
      <Route path="/login" element={<UserPage setCurrentUser={setCurrentUser} ></UserPage>}></Route>
       <Route path="/admin" element={<AdminDashBoard setProducts={setProducts} products={products} ></AdminDashBoard>}></Route>
       <Route path="/about" element={<About ></About>}></Route>
       <Route path="/contacts" element={<Contact ></Contact>}></Route>
       <Route path="/cart" element={<Cart setCart={setCart} cart={cart} ></Cart>}></Route>
      <Route path="/checkout" element={<Checkout cart={cart} ></Checkout>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
