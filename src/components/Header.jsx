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
  const [show,setShow] = useState(false); //для модалки, конкретнее для формы Sign/Login
  const handleClose = () => setShow(false);
  function handleClick(e){
    e.preventDefault();
    setShow(true);
  }
  const container = ()=>{
    let button_position={
      position: '',
      right: ''}
    if (HeaderContext.pageWidth>991) {button_position = {position: 'absolute', right: '-5px'}}
    return button_position;
  }
  return (
    <div>
        <Navbar className='d-flex row' expand="lg">
            <div className='col-3 col-xl-2 col-lg-2 col-md-2 col-sm-3 px-xl-5 px-sm-4 px-3'>
              <Navbar.Brand className=''style={{width:'100%'}}>
                <Link className='' to={'/'}>
                  <img className='img-fluid' src="/img/Logowhite.png" alt="" />
                </Link>
              </Navbar.Brand>
            </div>
            <div className='col-10 col-xl-9 col-lg-8 col-md-10 col-sm-9'>  
                <Container className=''>
                  <Navbar.Toggle className='mt-4 bg-light' style={{opacity:"0.5"}}aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='d-flex justify-content-around w-75'>
{/*                           <Nav.Link><Link className='header_text text-white' to={'/'}>Главная</Link></Nav.Link>
                          <Nav.Link><Link className='header_text text-white' to={'/services'}>Услуги</Link></Nav.Link>
                          <Nav.Link><Link className='header_text text-white' to={'/knows'}>База знаний</Link></Nav.Link>
                          <Nav.Link><Link className='header_text text-white' to={'/about'}>О нас</Link></Nav.Link>
                          <Nav.Link><Link className='header_text text-white' to={'/contacts'}>Контакты</Link></Nav.Link> */}
                          <Nav.Link className='header_text text-white' href='/'>Главная</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/services'>Услуги</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/knows'>База знаний</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/about'>О нас</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/contacts'>Контакты</Nav.Link>
                        </Nav>
                        <Button className='' size='lg' variant='primary' style={container()} onClick={(e)=>handleClick(e)}>Личный кабинет</Button>
                  </Navbar.Collapse>
                </Container>
            </div>

        </Navbar>
      
      <Modal className='' size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
          <Modal.Body className=''>
            <SignLogin className=''/>
          </Modal.Body>
      </Modal> 
    </div>
  )
}

export default Header