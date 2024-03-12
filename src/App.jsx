// App.jsx
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import HomePage from "./views/HomePage";
import PizzaDetails from "./views/PizzaDetails"; 
import { CartProvider } from './components/CartContext'; 

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizza/:id" element={<PizzaDetails />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;