// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';


const HomePage = () => {

  const { addToCart } = React.useContext(CartContext);

  const handleAgregar = (pizza) => {
    addToCart(pizza);
  };

  const [pizzas, setPizzas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/pizzas.json');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleVerMas = (pizza) => {
    navigate(`/pizza/${pizza.id}`);
  };


  return (
    <Container className="text-center">
      <div
        style={{
          backgroundImage: `url("https://media02.stockfood.com/largepreviews/NDA4NTU5MzIz/13179333-Pizza-with-mozzarella.jpg")`,
          width: '100%',
          height: '200px',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>
      <h1 className="pt-5" style={{ color: 'white' }}>¡Pizzería Mamma Mia!</h1>
      <h6 style={{ color: 'white' }}>¡Tenemos las mejores pizzas que podrás encontrar!</h6>

      <div style={{ marginTop: '50px' }}>
        <div className="d-flex flex-wrap justify-content-center">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Ingredientes: {pizza.ingredients.join(', ')}
                </ListGroup.Item>
                <ListGroup.Item>Precio: ${pizza.price}</ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <Button variant="info" onClick={() => handleVerMas(pizza)}>
                    Ver más 👀
                  </Button>
                  <Button variant="danger" onClick={() => handleAgregar(pizza)}>
                    Añadir 🛒
                  </Button>
                </div>
              </ListGroup>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
