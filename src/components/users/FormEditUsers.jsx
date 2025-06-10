
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useForm from "../../hooks/useForm";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsersByIdController, updateUserController } from "../../controllers/users/userController";

const FormEditUsers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUsersById();        
  }, []);
    
    const getUsersById = async () => {
      const response = await getUsersByIdController(id);
      
      if(response.success){
       
        setFormValues({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
         
        });
      }else{
        alert(response.message || "Error al obtener el usuario");
      } 
     
    }
    const {value, handleChange,resetForm,setFormValues} = useForm({
        id: "",
        name: "",
        email: "",
    })

    const handleSubmit = async (e) => {

      e.preventDefault();
      const response= await updateUserController(value);
      if(response.success){
        navigate(`/user/${id}/show`);
        resetForm();
        alert(response.message || "usuario actualizado correctamente");  
      } else{
        alert(response.message || "Error al actualizar el usuario");
      }
  }
    
  return (
    <Container>
        <Form className="border p-3" onSubmit={handleSubmit}>
          <Row>
            <Col className="d-flex justify-content-end gap-2">
              <Button className="btn btn-primary btn-sm" type="submit">
                Actualizar
              </Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                autoComplete="off"
                name="name"
                value={value.name}
              
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Correo</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                autoComplete="off"
                name="email"
                value={value.email}
              />
            </Form.Group>
          </Row>
          
        </Form>
      </Container>
  )
}

export default FormEditUsers