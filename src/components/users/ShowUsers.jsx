
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getShowUsersController } from '../../controllers/users/userController';


const ShowUsers = () => {
  const{id}= useParams();
  const [users, setUsers] = useState({});
  useEffect(() => {
    getUsersById(id);            
    }, [id]);

  const getUsersById = async (id) => {
    const response = await getShowUsersController(id);
    console.log(response);
    if(response.success){
        setUsers(response.data);
    } else {
      alert(response.message || "Error al obtener el users");
      return null;
    }
  }

  return (
    <Container className="mt-4">
      <Row className="mb-4 justify-content-between align-items-center">
        <Col>
          <h1>Ver usuario</h1>
        </Col>
        <Col className="text-end">
          <Link to={`/user/${id}/edit`}>
            <Button variant="outline-success" size="sm">
              Editar
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Detalles del usario # {users.id}</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Nombre:</strong> {users.name}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Correo:</strong> {users.email}
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <strong>Rol:</strong> {users.role.name} 
              </ListGroup.Item> */}
             
              <ListGroup.Item>
                <strong>Estado:</strong>{" "}
                {users.status == 1
                  ? "Activo"
                  : "Inactivo"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Fecha de creación:</strong> {users.created_at}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* <Col md={6} className="d-flex align-items-center justify-content-center">
          <Card>
            <Card.Img variant="top" src={Imgusers} alt="Imagen del users" />
            <Card.Body>
              <Card.Text className="text-center">Imagen del users</Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
}

export default ShowUsers