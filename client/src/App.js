
import './App.css';
import React from 'react'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Routes>
         <Route path='/'   element={<Home/>} />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
  )
}

export default App