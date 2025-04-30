import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FormLogin from '../../components/auth/FormLogin'

const Login = () => {
  return (
    <Container
    fluid
    className='d-flex  justify-content-center vh-100'>

        <Row>
            <h3>App Project</h3>
            <FormLogin/>
        </Row>

    </Container>
  )
}

export default Login