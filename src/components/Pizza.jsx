import { useEffect, useState } from 'react'
import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import { useParamas } from 'react-router-dom'

const Pizza = () => {
  const {id} = useParamas()
  const [pizza, setPizza1] = useState(null) 
  const [error, setError] = useState (null)




  useEffect(() => {
    const fetchPizza = async () => {
      try {
        
        const response = await fetch (`http://localhost:5000/api/pizzas/${id}`)
        if (!response.ok) {
          throw new Error ("Pizza no encontrada")
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
  if (!pizza) return <p>No se encontro Pizza</p>

  return (
    <>
      <Header />
      <section>
      <Container className="mt-4">
        <Row className="g-4">
          {pizza1 && ( // Aqui verifico que la pizza1 no sea null antes de intentar renderizar
            <Col md={4} key={pizza.id}>
              <CardPizza
                id={pizza.id}
                img={pizza.img}
                name={pizza.name}
                desc={pizza.desc}
                ingredients={pizza.ingredients}
                price={pizza.price}
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