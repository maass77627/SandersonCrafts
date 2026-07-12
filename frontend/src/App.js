
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
function App() {
  const [products, setProducts] = useState([])
 const [currentUser, setCurrentUser] =  useState(null)
const [cart, setCart] = useState([])
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


useEffect(() => {
  fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
    setProducts(json)
  })

}, [])

const categories = [ "All", ...new Set(products.map((pro) => pro.category))]

  return (
    <div className="App">
      <BrowserRouter>
      <Nav handleLogout={handleLogout} currentUser={currentUser}></Nav>
      <Routes>
      <Route path="/" element={<Home currentUser={currentUser}  products={products}></Home>}></Route>
      <Route path="/products" element={<Products  categories={categories} products={products}></Products>}></Route>
      <Route path="/products/:id" element={<ProductDetail setCart={setCart} categories={categories} products={products}></ProductDetail>}></Route>
      <Route path="/signup" element={<SignUp ></SignUp>}></Route>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} ></Login>}></Route>
       <Route path="/admin" element={<AdminDashBoard setProducts={setProducts} products={products} ></AdminDashBoard>}></Route>
       <Route path="/about" element={<About ></About>}></Route>
       <Route path="/contacts" element={<Contact ></Contact>}></Route>
       <Route path="/cart" element={<Cart ></Cart>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
