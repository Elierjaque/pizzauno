import { useEffect, useState } from 'react'
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const {id} = useParams()
  const [pizza, setPizza] = useState(null)
  const [error, setError] = useState(null)
  
  

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      
      if (!response.ok) {
        throw new Error("Pizza no encontrada")
      }
      
      const data = await response.json()
      setPizza(data) 
    } catch (err) {
      setError(err.message)
    } 
  }
    fetchPizza() 
  }, [id]) 
  if (error) return <p>{error}</p>
    if (!pizza) return <p>No se encontró la pizza</p>

  return (
    <section>
      <Header />
      <Container className="mt-4">
        <Row className="g-4">
          {pizza && ( // Verificamos que pizza1 no sea null antes de intentar renderizar
            <Col md={4} key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Pizza