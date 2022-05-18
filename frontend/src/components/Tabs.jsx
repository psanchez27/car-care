import React from 'react'
import { Button, Nav, Container } from 'react-bootstrap'

const Tabs = () => {
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home" className='justify-content-center'>
        <Nav.Item>
          <Nav.Link href="/home">Vin-Decoder</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">OBD2 Code Reader</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Find a Local Tech</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Tabs
