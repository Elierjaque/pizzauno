import { useEffect, useState } from 'react'
import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Pizza = () => {
  const [pizza1, setPizza1] = useState(null) 
  const URL = "http://localhost:5000/api/pizzas/p001"

  useEffect(() => {
    const fetchPizza = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setPizza1(data) 
    }
    fetchPizza() 
  }, []) 

  return (
    <>
      <Header />
      <section>
      <Container className="mt-4">
        <Row className="g-4">
          {pizza1 && ( // Aqui verifico que la pizza1 no sea null antes de intentar renderizar
            <Col md={4} key={pizza1.id}>
              <CardPizza
                img={pizza1.img}
                name={pizza1.name}
                desc={pizza1.desc}
                ingredients={pizza1.ingredients}
                price={pizza1.price}
              />
            </Col>
          )}
        </Row>
      </Container>
      </section>
    </>
  );
};

export default Pizza