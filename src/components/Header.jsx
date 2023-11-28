import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
    if (HeaderContext.pageWidth>=768) {button_position = {position: 'absolute', right: '-1px', borderRadius: '20px 0px 0px 20px'}}
    return button_position;
  }
  return (
    <div className=''>
        <Navbar className='d-flex justify-content-start' /* expand="md" */>
            <div className='col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 px-xl-5 px-sm-4 px-4'>
              <Navbar.Brand className='' style={{width:'100%'}}>
                <Link className='' to={'/'}>
                  <img className='img-fluid' src="/img/Logowhite.png" alt="" />
                </Link>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle className='bg-light toggle_pos' style={{opacity:"0.7"}} aria-controls="basic-navbar-nav"/>
            <div className='col-3 col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-3 header_h'>  
                  <Navbar.Collapse id="basic-navbar-nav" className=''>
                        <Nav className='flex-fill justify-content-around'>
                          <Nav.Link className='header_text text-white' href='/'>Главная</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/services'>Услуги</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/knows'>База знаний</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/about'>О нас</Nav.Link>
                          <Nav.Link className='header_text text-white' href='/contacts'>Контакты</Nav.Link>
                        </Nav>
                        <button className='col-xxl-2 col-xl-2 col-lg-2 bg-primary text-light header_button' style={container()} onClick={(e)=>handleClick(e)}>Личный кабинет</button>
                  </Navbar.Collapse>
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