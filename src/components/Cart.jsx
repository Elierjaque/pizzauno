import React, { useState } from 'react';
import { pizzaCart } from '../mockData/pizzas';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  // Estado para manejar el carrito
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad
  const increaseCount = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updatedCart);
  };

    
    // Función para disminuir la cantidad
    const decreaseCount = (id) => {
      const updatedCart = cart.map((pizza) =>
        pizza.id === id && pizza.count > 1
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      );
      setCart(updatedCart);
    };

 // Calcular el total
 const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
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
      <h3>Total: ${calculateTotal()}</h3>
    </section>
  );
};

export default Cart;