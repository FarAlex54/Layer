import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar expand="" style={{background:'white'}}/* className="bg-light" */>
        <Container>
        <Navbar.Brand href="#home"><img src="/img/Logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Главная</Nav.Link>
                <Nav.Link href="#services">Услуги</Nav.Link>
                <Nav.Link href="#knows">База знаний</Nav.Link>
                <Nav.Link href="#about">О нас</Nav.Link>
                <Nav.Link href="#contacts">Контакты</Nav.Link>
            </Nav>
            <Button variant='primary'>Личный кабинет</Button>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header