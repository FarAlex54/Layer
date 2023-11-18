import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { AppContext } from '../App';
import Modal from 'react-bootstrap/Modal';

function Header() {
  const HeaderContext = React.useContext(AppContext);
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleClick(e){
    e.preventDefault();
    setShow(true);
  }
  const container = ()=>{
    let button_position={
      position: '',
      right: ''}
    if (HeaderContext.pageWidth>991) {button_position = {position: 'absolute',
    right: '-5px'}}
    return button_position;
  }
  return (
    <Navbar expand="lg">
      <div className='' style={{width:'320px'}}>
        <Navbar.Brand><Link className='px-5' to={'/'}><img className='' src="/img/LogoNew.png" alt="" /></Link></Navbar.Brand>
      </div>
      <div className='col-10 col-xl-9 col-lg-8 col-md-10 col-sm-10'>  
          <Container className=''>
            <Navbar.Toggle className='mt-4' aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className='d-flex justify-content-around w-75'>
                    <Nav.Link><Link className='header_text' to={'/'}>Главная</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/services'}>Услуги</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/knows'}>База знаний</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/about'}>О нас</Link></Nav.Link>
                    <Nav.Link><Link className='header_text' to={'/contacts'}>Контакты</Link></Nav.Link>
                  </Nav>
                  <Button className='' size='lg' variant='primary' style={container()} onClick={(e)=>handleClick(e)}>Личный кабинет</Button>
            </Navbar.Collapse>
          </Container>
      </div> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <div></div>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal> 
    </Navbar>
  )
}

export default Header