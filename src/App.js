import { useState } from "react"
import Header from './Components/Layout/Header';
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown]= useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
   
  };

  const hideCartHandler =()=>{
    setCartIsShown(false)
    console.log('button')
  };

  return (
    <CartProvider>
        {cartIsShown &&<Cart hideCartHandler={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
     <main>
     <Meals/>
     </main>
    </CartProvider>
    
  );
}

export default App;
