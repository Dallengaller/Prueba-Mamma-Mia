// Navbar.jsx
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          🍕 Pizzeria Mamma Mia!
        </Navbar.Brand>

        <div>
          <Link to="/carrito" className="text-white ms-3 text-decoration-none">
            🛒 Carrito
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
