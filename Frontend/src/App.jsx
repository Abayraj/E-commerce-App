import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Home/>
        {/* <ProductList/> */}
        {/* <Product/> */}
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Cart/> */}
       
        
    </>
  )
}

export default App
