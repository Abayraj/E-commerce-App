import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import SingleProduct from './pages/SingleProduct'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {Routes, Route, Navigate } from 'react-router-dom';

function App() {
  
  const [user,setUser] = useState(true)

  return (
    // <>
    //     {/* <Home/> */}
    //     {/* <ProductList/> */}
    //     {/* <Product/> */}
    //     {/* <Register/> */}
    //     {/* <Login/> */}
    //     <Cart/>
       
        
    // </>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products/:category" element={<ProductList/>} />
    <Route path="/product/:id" element={<SingleProduct/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/register" element={<Register/>} />

        // {/* Redirect based on condition */}
     <Route path="login"
      element={
        user ? (
          <Navigate to="/" />
        ) : (
         <Login/>
        )
      }
     >
     </Route>
    
 
  </Routes>
  )
}

export default App
