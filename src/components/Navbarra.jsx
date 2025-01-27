import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Navbarra = () => {
const total = 98500
const token = false

  return (
    <section>
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white" >Pizzería Mamma Mía</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to='/'><Button variant="outline-light">🍕Home</Button></Link></Nav.Link>
            <Nav.Link><Link to='/login'><Button variant="outline-light">{token? "🔓Profile":"🔐Login"}</Button></Link></Nav.Link>
            <Nav.Link><Link to='/register'><Button variant="outline-light">{token? "🔒Logout":"🔐Register"}</Button></Link></Nav.Link>
            <Nav.Link><Link to='/profile'><Button variant="outline-light">{token? "🔒Logout":"🔐Profile"}</Button></Link></Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link><Link to='/cart'><Button variant="outline-primary">🛒Total {total}</Button></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default Navbarra