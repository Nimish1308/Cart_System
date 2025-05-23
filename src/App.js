import logo from './logo.svg';
import './App.css';
import NaviBar from './components/NaviBar';
import Records from './components/Records';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage';
import { useState } from 'react';

function App() {
  const [cart,setCart]=useState([]);

  const addToCart=(product)=>{
   setCart([...cart,product])
  }
  return (
    <BrowserRouter>
     <NaviBar cart={cart}/>
     <Routes>
      <Route path='/' element={<Records addToCart={addToCart}/>}/>
      <Route path='/cart' element={<CartPage cart={cart}/>}/>
     </Routes>
     
    </BrowserRouter>
  );
}

export default App;
