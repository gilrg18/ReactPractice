import {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>} 
      {/*The exact position for Cart doesnt matter because we are using a Modal with a PORTAL. 
      props that hold functions with customs events have the convention to start with "on"*/}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
