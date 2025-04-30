import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'

const FormLogin = () => {
  return (
    <>
    <Col>
    <Form className='p-4 shadow'>
        <p>Ingrese correo</p>

        <Form.Group>
            <Form.Label>correo</Form.Label>
            <Form.Control 
            type='email'
            name='email'
            onChange={""}
            placeholder='Email'/>
        </Form.Group>

        <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control 
            type='password'
            name='password'
            onChange={""}
            placeholder='Contraseña'/>
        </Form.Group>

        <Button  className="mt-2" variant='primary' type='submit'>
            Iniciar sesión

        </Button>

    </Form>
    
    </Col>
    </>
  )
}

export default FormLogin