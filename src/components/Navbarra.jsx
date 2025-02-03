import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbarra from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Navbarra = () => {
  const { calcularTotal } = useContext(CartContext)
  const total = calcularTotal()
  const token = false

  return (
    <section>
    <Navbarra bg="dark">
      <Container>
      <Navbarra.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
        <Navbarra.Toggle aria-controls="responsive-navbar-nav" />
        <Navbarra.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to='/'><Button variant="outline-light">🍕Home</Button></Link></Nav.Link>
            <Nav.Link><Link to='/login'><Button variant="outline-light">{token? "🔓Profile":"🔐Login"}</Button></Link></Nav.Link>
            <Nav.Link><Link to='/register'><Button variant="outline-light">{token? "🔒Logout":"🔐Register"}</Button></Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link to='/cart'><Button variant="outline-primary">🛒Total {total}</Button></Link></Nav.Link>
          </Nav>
        </Navbarra.Collapse>
      </Container>
    </Navbarra>
    </section>
  )
}

export default Navbarra