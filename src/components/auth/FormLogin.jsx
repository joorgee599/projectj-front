import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { loginController } from "../../controllers/auth/AuthController";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginController(formData);

    if (response.success) {
      alert(response.message || "Inicio de sesión exitoso.");
      window.location.href = "/user";
    } else {
      alert(response.message || "No se pudo iniciar sesión.");
    }
  };

  return (
    <Col>
      <Form className="p-4 shadow" onSubmit={handleSubmit}>
        <p>Ingrese correo</p>

        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
          />
        </Form.Group>

        <Button className="mt-2" variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Col>
  );
};

export default FormLogin;
