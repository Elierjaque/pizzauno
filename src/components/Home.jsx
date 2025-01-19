import { useEffect, useState } from 'react'
import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Home() {
  const [pizzas, setpizzas] = useState([])
 
        const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas"
        const response = await fetch(url)

//Ahora tengo que verificar que no tenga error
        if (response.ok) {
          const data = await response.json()
          setpizzas(data)
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      }

  
        useEffect(() => {
          consultarApi()
          }, [])
    

  
  return (
      <section>
        <Header />
        <Container className="mt-4">
          <Row className="g-4">
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.id}>
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    )
  }
  
  export default Home