import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const dataStorage = JSON.parse(localStorage.getItem("cart")) ?? [];

  const [cartItems, setCartItems] = useState(dataStorage);

  // Sincronizar localStorage con cada cambio
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const drecreaseToCart = (product) => {
  const exists = cartItems.find((item) => item.id === product.id);
  if (exists) {
    if (exists.quantity === 1) {
      // Si solo queda 1, lo eliminamos del carrito
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      // Si hay más de 1, restamos 1 a la cantidad
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  }
};


  // Quitar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        drecreaseToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
