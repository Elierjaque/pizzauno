
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const Cart = () => {
    const { cart, setCart, calcularTotal } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const [mensajeExito, setMensajeExito] = useState(""); // Estado para el mensaje de éxito

    // Función para aumentar cantidad de pizzas
    const aumentarCantidad = (id) => {
        const newCart = cart.map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        );
        setCart(newCart);
    };

    // Función para disminuir cantidad de pizzas
    const disminuirCantidad = (id) => {
        const newCart = cart
            .map((pizza) =>
                pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
            )
            .filter((pizza) => pizza.count > 0); // Elimina las pizzas con count <= 0
        setCart(newCart);
    };

    // Función para realizar la compra
    const realizarCompra = async () => {
        if (!token) {
            alert("Debes iniciar sesión para realizar la compra.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Enviar token de usuario
                },
                body: JSON.stringify({ items: cart }), // Enviar el carrito al backend
            });

            if (!response.ok) {
                throw new Error("No se pudo procesar la compra");
            }

            setMensajeExito("✅ ¡Compra realizada con éxito!"); // Mostrar mensaje
            setCart([]); // Vaciar el carrito después de la compra
        } catch (error) {
            console.error("Error en la compra:", error.message);
            alert("Hubo un problema al procesar la compra.");
        }
    };

    return (
        <section className="container border border-light-subtle rounded-5 bg-white p-5">
            <h2>Detalle del pedido</h2>

            {mensajeExito && <Alert variant="success">{mensajeExito}</Alert>} {/* Mensaje de éxito */}

            <Table striped bordered hover size="xl">
                <thead>
                    <tr className="text-center">
                        <th></th>
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
                            <td>{pizza.count}</td>
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
                <Button variant="dark" size="lg" onClick={realizarCompra} disabled={!token || cart.length === 0}>
                    Pagar
                </Button>
                {!token && <p className="text-danger mt-2">🔒 Inicia sesión para pagar!!</p>}
            </div>
        </section>
    );
};

export default Cart;
