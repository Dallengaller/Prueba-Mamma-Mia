// CartContext.jsx
import React from 'react';
import Cart from '../views/Cart';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
      <Cart /> 
    </CartContext.Provider>
  );
};
