import {React, useState} from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const showCartHandler = () => {
    setIsCartVisible(true);
  }

  const hideCartHandler = () => {
    setIsCartVisible(false);
  }

  return (
    <>
      {isCartVisible && <Cart />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
