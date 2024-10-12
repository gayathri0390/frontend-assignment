import { useEffect, useState ,useContext} from "react";
import "./Cart.css";
import { cartContext } from "./cartContext";
const Cart = () => {
  const {cart} = useContext(cartContext);
  const[total,setTotal]=useState(0);
  useEffect(()=>{setTotal(cart.reduce((total,product)=>total+ 
  parseInt(product.amt),0));},[cart]);
  

  







  return (
    <>
    <h1>Cart Products</h1>
    <div className="cart-container" >
     {cart.map((product)=>(

<div className="cart-product" key={product.id}>
     <div className="img">
      <img src={product.pic}  alt="images" />
      </div>
      
<p> {product.amt}</p>


      

     </div>




))}
    </div>
    <h2>Total Amount Rs:{total}</h2>
    </>
  )
}

export default Cart