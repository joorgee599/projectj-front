import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getProductsController } from "../../controllers/products/ProductController";
import useCartContext from "../../hooks/useCartContext";

const ListCart = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const { addToCart, drecreaseToCart, cartItems, removeFromCart, clearCart } =
    useCartContext();

  

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getProductsController();
    setProducts(response?.data || []);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Productos</h2>
      </div>

      <div className="mb-3">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar producto..."
          className="form-control"
        />
      </div>

      <Table striped bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.brand?.name}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => drecreaseToCart(product)}
                    >
                      -
                    </Button>

                    <span className="fw-bold">
                      {cartItems.find((item) => item.id === product.id)
                        ?.quantity || 0}
                    </span>

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
      
    </>
  );
};

export default ListCart;
