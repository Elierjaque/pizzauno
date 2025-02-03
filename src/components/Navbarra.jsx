import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { calcularTotal } = useContext(CartContext) || {}; // Previene error si CartContext es undefined
  const total = calcularTotal ? calcularTotal() : 0; // Evita error si calcularTotal no está definido
  const token = false; // Este valor debería provenir del estado global o localStorage

  return (
    <section>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white" >Pizzería Mamma Mía</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <Button variant="outline-light">🍕Home</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-light">{token ? "🔓Profile" : "🔐Login"}</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button variant="outline-light">{token ? "🔒Logout" : "🔐Register"}</Button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart">
                <Button variant="outline-primary">🛒 Total {total}</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
