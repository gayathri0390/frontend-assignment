
import "./Product.css";
import { Image } from "antd";

import { useContext } from "react";
import {cartContext} from "./cartContext";

export const Product = ({product}) => {
const {cart,setCart} = useContext(cartContext);



    
  const addCart = () =>{
    

    setCart([...cart,product])};
  const removeCart=() =>{
    
    setCart(cart.filter((c) => c.id !== product.id));
  };

    
 
  return (
    <div className="product">
      <div className="img">
      
      <Image src={product.pic} />     </div>
        <div className='details'><h3>{product.name}</h3>
<p>Price Rs:{product.amt}</p>
{ cart.includes(product) ?(<button className="btnRemove"onClick={removeCart} >Remove from Cart</button>):
(<button onClick={addCart} >Add to Cart</button>)
}





</div>

</div>
  );
};

export default Product;

