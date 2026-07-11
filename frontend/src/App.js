
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

function App() {
  const [products, setProducts] = useState([])




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
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<Home products={products}></Home>}></Route>
      <Route path="/products" element={<Products categories={categories} products={products}></Products>}></Route>
      <Route path="/products/:id" element={<ProductDetail categories={categories} products={products}></ProductDetail>}></Route>
      <Route path="/signup" element={<SignUp ></SignUp>}></Route>
      <Route path="/login" element={<Login ></Login>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
