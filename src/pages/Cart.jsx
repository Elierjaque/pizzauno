import {useState} from "react"
import { pizzaCart } from "../mockData/pizzas"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)
    //funcion para aumentar cantidad de pizzas
    const aumentarCantidad = (id) => {
        const newCart = cart.map((pizza) => 
        pizza.id === id ?{...pizza, count: pizza.count + 1} : pizza)
        setCart(newCart)
    }
    //función para disminuir la cantidad
    const disminuirCantidad = (id) => {
        const newCart = cart
          .map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
          )
          .filter((pizza) => pizza.count > 0); // Elimina las pizzas con count <= 0
        setCart(newCart);
      }
    
    //funcion calcular total
    const calcularTotal = () => {
        return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
      }
      return (
        <section className="container border border-light-subtle rounded-5 bg-white p-5">
          <h2>Detalle del pedido</h2>
          <Table striped bordered hover size="xl">
            <thead>
              <tr className="text-center">
                <th ></th>
                <th>Pizza</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>🛒🗑️</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pizza) => (
                <tr key={pizza.id} className="text-center">
                  <td>
                    <img src={pizza.img} alt={pizza.name} style={{ width: "50px" }} />
                  </td>
                  <td>{pizza.name}</td>
                  <td>${pizza.price}</td>
                  <td >{pizza.count}</td>
                  <td>${pizza.price * pizza.count}</td>
                  <td>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => aumentarCantidad(pizza.id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => disminuirCantidad(pizza.id)}
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
          <Button variant="dark" size="lg">Pagar</Button>
          </div>
        </section>
      )
    }
    
    export default Cart