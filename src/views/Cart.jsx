// Cart.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Cart = () => {
  const { cart } = React.useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  
  const total = cart.reduce((sum, item) => sum + item.price, 0);

 
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', marginTop: '-200px' }}>
      
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <h2 className="mb-4">Detalle del pedido</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <Card key={index} className="mb-3">
                <div className="d-flex align-items-center">
                  <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>
              </Card>
            ))}
            <h2>Total: ${total}</h2>
            <button
              className="btn btn-primary"
              style={{ borderRadius: '5px', marginTop: '10px' }}
              onClick={() => navigate('/checkout')}
            >
              Ir a pagar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
