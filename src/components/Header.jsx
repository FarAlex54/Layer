import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { AppContext } from '../App';
import Modal from 'react-bootstrap/Modal';
import SignLogin from './pages/SignLogin';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

function Header() {
  const HeaderContext = React.useContext(AppContext);
  const [show,setShow] = useState(false); //для модалки, конкретнее для формы Sign/Login
  const handleClose = () => setShow(false);
  function handleClick(e){
    e.preventDefault();
    setShow(true);
  }
  return (
    <Container fluid className='' style={{opacity:'0.8'}}>
      <Row className='align-items-center justify-content-between'>
        <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={3} className=''>
          <Navbar className='ps-1 ps-xxl-3 ps-xl-2'>
            <Navbar.Brand>
              <Image src='/img/Logowhite.png' fluid/>
            </Navbar.Brand>
          </Navbar>
        </Col>
        <Col className=''>
          <Nav className='justify-content-evenly header_h'>
            <Nav.Link className='header_text text-white' href='/'>Главная</Nav.Link>
            <Nav.Link className='header_text text-white' href='/services'>Услуги</Nav.Link>
            <Nav.Link className='header_text text-white' href='/knows'>База знаний</Nav.Link>
            <Nav.Link className='header_text text-white' href='/about'>О нас</Nav.Link>
            <Nav.Link className='header_text text-white' href='/contacts'>Контакты</Nav.Link>
          </Nav>
        </Col>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2} className='text-end'>
            <button className='bg-primary text-light header_button' /* style={container()} */ onClick={(e)=>handleClick(e)}>Личный кабинет</button>
        </Col>
      </Row>
      <Modal className='' size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
          <Modal.Body className=''>
            <SignLogin className=''/>
          </Modal.Body>
      </Modal> 
    </Container>
  )
}

export default Header