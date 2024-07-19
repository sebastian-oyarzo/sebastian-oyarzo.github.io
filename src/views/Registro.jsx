import React, { useState } from 'react'
import SocialButton from './SocialButton'
import { Formulario } from '../components/Formulario'
// import { Alert1 } from '../components/Alert1'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/SocialButton.css'
import '../views/Registro.css'
import { useNavigate } from 'react-router'
import Alert from 'react-bootstrap/Alert'

export const Registro = () => {
  const [forAlert, setForAlert ,] = useState('')

  const Navigate = useNavigate()

  const returnAll = () => {
    Navigate('/')
  }

    const formAlert = (mensaje) => {
      setForAlert(mensaje)
    }

    const [ForColor, setForColor] = useState('')

  return (
    <Container fluid className='borderRegistro mt-4 p-4 col align-items-center text-dark'   >
        <Row>
          <h1 className='justify-content-center fs-2 text-center'>Crea una cuenta</h1>
        </Row>
        <Row className="fs-3">
          <Col  xs={{ span: 2, offset: 2 }} className='icons'>
            <SocialButton icons='fa-brands fa-facebook' />
          </Col>
          <Col  xs={{ span: 2, offset: 1 }} className='icons'>
            <SocialButton icons='fa-brands fa-github' />
          </Col>
          <Col  xs={{ span: 2, offset: 1 }} className='icons'>
            <SocialButton icons='fa-brands fa-linkedin' />
          </Col>
        </Row>
        <Row>
          <p className='container text-center mt-3 small'>O usa tu email para registrarte</p>
        </Row>
        <Row>
              <Formulario colorAlert={setForColor} formAlert={formAlert}/>
        </Row>
        <Row >
        <Alert className='mt-3 text-center' key='1' variant={ForColor}>
        {forAlert}
        </Alert>
        </Row>
        <button onClick={() => returnAll()} className='text-dark'>volver a proyecto sebastian</button>
    </Container>

  )
}