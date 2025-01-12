import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { pizzas } from "../mockData/pizzas"

const Home = () => {
  return (
    <section>
      <Header />
      <Container className="mt-4">
        <Row className="g-4"> 
          {pizzas.map((pizza) => (
            <Col md={4} Key={pizza.id}>
              <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Home