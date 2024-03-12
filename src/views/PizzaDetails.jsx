// PizzaDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { CartContext } from '../components/CartContext'; // Importa CartContext

const PizzaDetails = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { addToCart } = React.useContext(CartContext); // Usa el contexto

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/pizzas.json');
        const data = await response.json();
        const foundPizza = data.find(pizza => pizza.id === id);
        setPizza(foundPizza);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!pizza) {
    return <p>Cargando detalles de la pizza...</p>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '40rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>Descripción: {pizza.desc}</Card.Text>
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Ingredientes:
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>Precio: ${pizza.price}</ListGroup.Item>
          <Button variant="danger" onClick={() => addToCart(pizza)}>
            Añadir 🛒
          </Button>
          {/* Otros detalles de la pizza, si es necesario */}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default PizzaDetails;
