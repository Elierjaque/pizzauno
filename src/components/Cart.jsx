import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { UserContext } from "../context/UserContext";


const Cart = () => {
  // Estado para manejar el carrito
  const {cart, setCart, calcularTotal} = useContext(CartContext)
  const { token } = useContext(UserContext)


  // Función para aumentar la cantidad
  const increaseCount = (id) => {
    const newCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza);
      setCart(newCart);
  };
    // Función para disminuir la cantidad
    const decreaseCount = (id) => {
      const newCart = cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0); // Elimina las pizzas con count <= 0
      setCart(newCart)
    };


  return (
    <section>
      <h2>Tu Carrito de Compras</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((pizza) => (
            <tr key={pizza.id}>
              <td>
                <img src={pizza.img} alt={pizza.name} style={{ width: "50px" }} />
              </td>
              <td>{pizza.name}</td>
              <td>${pizza.price}</td>
              <td>{pizza.count}</td>
              <td>${pizza.price * pizza.count}</td>
              <td>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => increaseCount(pizza.id)}
                >
                  +
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => decreaseCount(pizza.id)}
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: ${calcularTotal()}</h3>
      <div className="text-center mb-4">
          <Button variant="dark" size="lg"disabled={!token}>Pagar</Button>
          {!token && <p className="text-danger mt-2">🔒 Inicia sesión para pagar!!</p>}
          </div>
    </section>
  );
};

export default Cart;