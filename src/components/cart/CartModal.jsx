import { Modal, Button, Table } from "react-bootstrap";
import useCartContext from "../../hooks/useCartContext";
import { createCartController } from "../../controllers/cart/CartController";

const CartModal = ({ show, handleClose }) => {
  const { addToCart, drecreaseToCart, cartItems, removeFromCart, clearCart } =
    useCartContext();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmitSale = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("No hay productos en el carrito.");
      return;
    }

    const saleData = {
      items: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      total_amount: total,
      description: "Venta rápida desde carrito",
      payment_method: "efectivo", // o puedes permitir elegirlo más adelante
    };

    const response = await createCartController(saleData);

    if (response.success) {
      alert(response.message || "Venta registrada correctamente.");
      clearCart();
      handleClose();
      navigate("/sales"); // o la ruta que prefieras
    } else {
      alert(response.message || "Error al guardar la venta.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => drecreaseToCart(product)}
                        >
                          -
                        </Button>
                        <span className="fw-bold">{product.quantity}</span>
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => addToCart(product)}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="warning" onClick={clearCart}>
          Vaciar carrito
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmitSale}
          className="mt-2 ms-2"
        >
          Guardar venta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
