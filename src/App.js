import logo from './logo.svg';
import './App.css';
import NaviBar from './components/NaviBar';
import Records from './components/Records';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage';
import { useState } from 'react';

function App() {
  const [cart,setCart]=useState([]);

 const addToCart = (product) => {
  setCart(prevCart => {
    const existing = prevCart.find(item => item.id === product.id);
    if (existing) {
      return prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
};

const increaseQty = (productId) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQty = (productId) => {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0) // remove if qty goes to 0
  );

};

const removeFromCart = (productId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== productId));
};

  return (
    <BrowserRouter>
     <NaviBar cart={cart} />
     <Routes>
      <Route path='/' element={<Records addToCart={addToCart}/>}/>
      <Route path='/cart' element={<CartPage cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} removeFromCart={removeFromCart}/>}/>
     </Routes>
     
    </BrowserRouter>
  );
}

export default App;
