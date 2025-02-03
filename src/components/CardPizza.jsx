import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const CardPizza = ({ id, img, name, ingredients, price, desc }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    agregarAlCarrito({ id, img, name, price, count: 1 });
    alert(`¡Pizza ${name} agregada! 🍕`);
  };

  

  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Pizza {name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            Ingredientes:
          </Card.Subtitle>
          <Card.Text>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {ingredients.map((ingredient, index) => (
                <li key={ingredient}>🍕{ingredient}</li>

              ))}
            </ul>
            <small className="text-muted">{desc}</small>
          </Card.Text>
          <Card.Title className="text-center">Precio ${price}</Card.Title>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="outline-dark" onClick={() => navigate(`/pizza/${id}`)}> Ver más 👀 </Button>
            <Button variant="dark" onClick={handleAddToCart}> 🛒 Añadir </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza
