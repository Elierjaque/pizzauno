import { createContext, useState } from "react";
import { pizzaCart } from "../mockData/pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart) // Asegura que el estado inicial sea un array

  const calcularTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  }

  const agregarAlCarrito = (pizza) => {
    setCart((prevCart) => {
      const pizzaEnCarrito = prevCart.find((p) => p.id === pizza.id);

      if (pizzaEnCarrito) {
        // Si la pizza ya está en el carrito, aumenta la cantidad
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, count: (p.count ?? 0) + 1 } : p
        );
      } else {
        // Si no está en el carrito, la agregamos con count inicial de 1
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, calcularTotal, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
