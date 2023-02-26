import {Fragment} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart /> {/*The exact position doesnt matter because we are using a Modal with a PORTAL */}
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
