import { useEffect, useState } from 'react'
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
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
    <section>
      <Header />
      <Container className="mt-4">
        <Row className="g-4">
          {pizza1 && ( // Verificamos que pizza1 no sea null antes de intentar renderizar
            <Col md={4} key={pizza1.id}>
              <CardPizza
                name={pizza1.name}
                price={pizza1.price}
                ingredients={pizza1.ingredients}
                img={pizza1.img}
                desc={pizza1.desc}
              />
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Pizza