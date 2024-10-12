
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { useState } from 'react';
import {cartContext} from './Components/cartContext';

function App() {


  const [cart,setCart] =useState([]);
  return (
    
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
    <Header/>
    <div className='container'>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        
      </Routes>
    </div>
    
    </BrowserRouter>
    
    
    </cartContext.Provider>
  );
}

export default App;
