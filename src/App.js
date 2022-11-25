import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import Cart from "./cart";
import { useState } from "react";


function App() {
  const [products,setProducts]= useState([
    {
      id:1,
      name : "Iphone 14 Pro",
      price: 129900,
      img_url:"https://static.toiimg.com/photo/80635345/Apple-iPhone-14.jpg"
    },
    {
      id:2,
      name : "Samsung S22 Ultra",
      price: 118999,
      img_url:"https://www.mobilepriceall.com/wp-content/uploads/2021/04/Samsung-Galaxy-S21-Ultra-5G-Phantom-Navy.jpg"
    },
    {
      id:3,
      name : "Google Pixel 7Pro",
      price: 84999,
      img_url:"https://tse4.mm.bing.net/th?id=OIP.IbNBdv3nm4Yzj_YZe-39GAHaE7&pid=Api&P=0"
    },
    {
      id:4,
      name : "Asus ROG 6Pro",
      price: 79999,
      img_url:"https://gadget.ro/wp-content/uploads/2021/03/ASUS-ROG-Phone-5-Gadget-ro-1.jpg"
    },
    {
      id:5,
      name : "OnePlus 10 Pro",
      price: 64990,
      img_url:"https://tse1.mm.bing.net/th?id=OIP._FdBM-iZoFISuW0QJ2HcPwHaHa&pid=Api&P=0"
    },
    {
      id:6,
      name : "Nothing Phone",
      price: 25999,
      img_url:"https://tse4.mm.bing.net/th?id=OIP.WolWdNVZ8zFVSxqDe7bKkQHaFj&pid=Api&P=0"
    }

  ])
  const [cartItems,setCartItems]= useState([])

let addToCart =(product)=>{
  setCartItems([...cartItems,product])
}
let removeFromCart =(product)=>{
 const indexval= cartItems.findIndex(obj => obj.id === product.id)
 cartItems.splice(indexval,1);
 setCartItems([...cartItems])
}

  return (
    <div className="container">
      <div className="row">
      <h1 className="App" style={{backgroundColor:"cyan"}}>Welcome To Our Shop</h1>
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((product)=>{
                return <Card product={product} addToCart={addToCart} cartItems={cartItems} />
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
        <h3>Cart</h3>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
