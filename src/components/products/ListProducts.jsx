import React, { useEffect, useState } from "react";
import { Button, Col, Table } from "react-bootstrap";
import { getProductsController } from "../../controllers/products/ProductController";
import { Link } from "react-router-dom";
import { FaEdit, FaPowerOff, FaEye } from "react-icons/fa";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getProductsController();
    setProducts(response);
    // console.log(response);
  };

  console.log(products);

  return (
    <>
      {/* {loading ? <Spinner></Spinner> : null} */}
      <div className="d-flex justify-content-between align-items-center">
        <h1>Lista productos</h1>
        <Link
          to="/product/create"
          /*variant="outline-success"*/ className="btn btn-outline-success btn-sm"
        >
          Nuevo
        </Link>
      </div>
      <div className="mb-3">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar producto..."
          className="form-control"
        />
      </div>
      <div className="d-flex justify-content-center">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Marca</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.data &&
              products.data
                .filter((data) =>
                  !search
                    ? true
                    : data.name
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase())
                )
                .map(
                  ({
                    id,
                    name,
                    description,
                    code,
                    image,
                    price,
                    status,
                    category_id,
                    brand_id,
                    brand,
                    category,
                  }) => (
                    <tr key={id}>
                      <td>{code}</td>
                      <td>{code} </td>
                      <td>{name}</td>
                      <td>{description}</td>
                      <td>{price}</td>
                      <td>{category.name}</td>
                      <td>{brand.name}</td>
                      <td>{
                      status == 1
                        ? "Activo"     
                        : "Inactivo"
                           }</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Link
                            to={`/product/${id}/edit`}
                            type="button"
                            className="btn btn-warning btn-sm "
                          >
                            <FaEdit />
                          </Link>
                          <Link
                            to={`/product/${id}/show`}
                            type="button"
                            className="btn btn-dark btn-sm "
                          >
                            <FaEye />
                          </Link>
                          {/* <Button
                            className="btn btn-success btn-sm"
                            onClick={""}
                          >
                            <FaPowerOff />
                          </Button> */}

                          {/* {estado == 1 ? (
                            <Button
                              className="btn btn-success btn-sm"
                              onClick={() => handleEstadoProducto(id, estado)}
                            >
                              <FaPowerOff />
                            </Button>
                          ) : estado == 2 ? (
                            <Button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleEstadoProducto(id, estado)}
                            >
                              <FaPowerOff />
                            </Button>
                          ) : null} */}
                        </div>
                      </td>
                    </tr>
                  )
                )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ListProducts;
