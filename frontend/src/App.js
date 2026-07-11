
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./Nav";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import BestSellers from './BestSellers';
import Home from "./Home"
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


  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<Home products={products}></Home>}></Route>
      {/* <Hero></Hero> */}
      {/* <BestSellers products={products}></BestSellers> */}
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
