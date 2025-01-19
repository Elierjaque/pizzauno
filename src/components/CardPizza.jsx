import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const CardPizza = ({img, name, ingredients, price, desc}) => {
  return (
    <> 
    <Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>Pizza {name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center">Ingredientes:</Card.Subtitle>
      <Card.Text>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {ingredients.map((ingredient)=>(
            <li key={name.ingredient} >🍕{ingredient}</li>


          ))}
          
        </ul>
        <small className="text-muted">{desc}</small>
      </Card.Text>
      <Card.Title className="text-center">Precio ${price}</Card.Title>
      <div className="d-flex justify-content-between mt-3">
      <Button variant="outline-dark">ver más 👀</Button>
      <Button variant="dark"> 🛒 Añadir</Button>
      </div>
      
    </Card.Body>
  </Card>
    </>
  )
}

export default CardPizza