
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getShowProductsController } from '../../controllers/products/ProductController';

const ShowProducts = () => {
  const{id}= useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id);            
    }, [id]);

  const getProductById = async (id) => {
    const response = await getShowProductsController(id);
    console.log(response);
    if(response.success){
        setProduct(response.data);
    } else {
      alert(response.message || "Error al obtener el product");
      return null;
    }
  }

  return (
    <Container className="mt-4">
      <Row className="mb-4 justify-content-between align-items-center">
        <Col>
          <h1>Ver producto</h1>
        </Col>
        <Col className="text-end">
          <Link to="/product/products">
            <Button variant="outline-success" size="sm">
              Atrás
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Detalles del producto # {product.id}</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Código:</strong> {product.code}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Nombre:</strong> {product.name}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Descripción:</strong> {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Categoría:</strong> {product.category?.name}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Marca:</strong> {product.brand?.name}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Precio:</strong> {product.price}
              </ListGroup.Item>
             
              <ListGroup.Item>
                <strong>Estado:</strong>{" "}
                {product.status == 1
                  ? "Activo"
                  : "Inactivo"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Fecha de creación:</strong> {product.created_at}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* <Col md={6} className="d-flex align-items-center justify-content-center">
          <Card>
            <Card.Img variant="top" src={Imgproduct} alt="Imagen del product" />
            <Card.Body>
              <Card.Text className="text-center">Imagen del product</Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
}

export default ShowProducts