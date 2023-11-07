import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg">
      <div className='' style={{width:'320px'}}>
        <Navbar.Brand><Link className='px-5' to={'/'}><img className='' src="/img/LogoNew.png" alt="" /></Link></Navbar.Brand>
      </div>
      <div className='col-10 col-xl-9 col-lg-8 col-md-10 col-sm-10'>  
          <Container className=''>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className='me-auto'>
                    <Nav.Link><Link className='header_text' to={'/'}>Главная</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/services'}>Услуги</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/knows'}>База знаний</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/about'}>О нас</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/contacts'}>Контакты</Link></Nav.Link>
                  </Nav>
                  <Button className='' size='lg' variant='primary'>Личный кабинет</Button>  
            </Navbar.Collapse>
          </Container>
      </div>  
    </Navbar>
  )
}

export default Header