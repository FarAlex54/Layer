import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { AppContext } from '../App';
import Modal from 'react-bootstrap/Modal';
import SignLogin from './pages/SignLogin';

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
    <div className='header'> 
    <Navbar expand="lg">
      <div className='' style={{width:'320px'}}>
        <Navbar.Brand className=''>
          <Link className='px-5' to={'/'}>
            <img className='img-fluid' src="/img/Logowhite.png" alt="" />
          </Link>
        </Navbar.Brand>
      </div>
      <div className='col-10 col-xl-9 col-lg-8 col-md-10 col-sm-10'>  
          <Container className=''>
            <Navbar.Toggle className='mt-4 bg-light' style={{opacity:"0.5"}}aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className='d-flex justify-content-around w-75'>
                    <Nav.Link><Link className='header_text text-white' to={'/'}>Главная</Link></Nav.Link>
                    <Nav.Link><Link className='header_text text-white' to={'/services'}>Услуги</Link></Nav.Link>
                    <Nav.Link><Link className='header_text text-white' to={'/knows'}>База знаний</Link></Nav.Link>
                    <Nav.Link><Link className='header_text text-white' to={'/about'}>О нас</Link></Nav.Link>
                    <Nav.Link><Link className='header_text text-white' to={'/contacts'}>Контакты</Link></Nav.Link>
                  </Nav>
                  <Button className='' size='lg' variant='primary' style={container()} onClick={(e)=>handleClick(e)}>Личный кабинет</Button>
            </Navbar.Collapse>
          </Container>
      </div> 

      <Modal className='' size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Body className=''>
          <SignLogin className=''/>
        </Modal.Body>
      </Modal> 
    </Navbar>
    </div>
  )
}

export default Header