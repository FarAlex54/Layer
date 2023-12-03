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
import { useLocation } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  const HeaderContext = React.useContext(AppContext);
  const location = useLocation();
  const banner_on = (location.pathname==='/')? 'banner_on':'';
  const [show,setShow] = useState(false); //для модалки, конкретнее для формы Sign/Login
  const handleClose = () => setShow(false);
  function handleClick(e){
    e.preventDefault();
    setShow(true);
  }

  let container={}
  const changeStyles = (container) => {
    container ={
    border: '1px',
    background:'#55A0E2',
    borderRadius: '10px'          
    }
  }
      
  const style_navLink = (HeaderContext.themeHeader==='light')? 'text-white text-decoration-none':'text-dark text-decoration-none';

  return (
    <div className={banner_on}>
    <div className='d-flex align-items-center justify-content-between'>
      <div className='w-100'>
        <Container fluid className='' style={{opacity:'0.8'}}>
          <Navbar className='ps-1 ps-xxl-3 ps-xl-2' expand="md">
            <Row className='align-items-center w-100'>
              <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={3} className=''>
                <Navbar.Brand><Image src={(HeaderContext.themeHeader==='light')? '/img/Logowhite.png':'/img/Logodark.png'} fluid/></Navbar.Brand>
              </Col>
              <Col sm={(HeaderContext.pageWidth<768)? 10:1} xs={(HeaderContext.pageWidth<768)? 10:1} className={(HeaderContext.pageWidth<768)? 'pt-2':''}>
                <Navbar.Toggle className='' aria-controls="basic-navbar-nav" /* onClick={()=>{changeStyles(container)}} */ style={(HeaderContext.pageWidth<=768)? {background:'#55A0E2'}:{background:'rgba(0,0,0,0.0)'}}/> 
              </Col>
              <Col xxl={9} xl={9} lg={9} md={9} sm={5} xs={6} style={container}> {/* Стиль должен включаться при экране sm или xs*/}
                  <Navbar.Collapse id="basic-navbar-nav" className='' style={(HeaderContext.pageWidth<=768)? {background:'#55A0E2', border: '2px solid cyan', borderRadius: '5px', marginTop: '1vh', padding:'1vh'}:{background:'rgba(0,0,0,0.0)'}}>               
                    <Nav className='justify-content-evenly header_h w-100'>
   {/*                    <Nav.Link className={style_navLink} href='/'>Главная</Nav.Link>
                      <Nav.Link className={style_navLink} href='/services'>Услуги</Nav.Link>
                      <Nav.Link className={style_navLink} href='/knows'>База знаний</Nav.Link>
                      <Nav.Link className={style_navLink} href='/about'>О нас</Nav.Link>
                      <Nav.Link className={style_navLink} href='/contacts'>Контакты</Nav.Link> */}
                      <Nav.Link className='header_text'><Link className={style_navLink} to={'/'}>Главная</Link></Nav.Link>
                      <Nav.Link className='header_text'><Link className={style_navLink} to={'/services'}>Услуги</Link></Nav.Link>
                      <Nav.Link className='header_text'><Link className={style_navLink} to={'/knows'}>База знаний</Link></Nav.Link>
                      <Nav.Link className='header_text'><Link className={style_navLink} to={'/about'}>О нас</Link></Nav.Link>
                      <Nav.Link className='header_text'><Link className={style_navLink} to={'/contacts'}>Контакты</Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Col>
            </Row>
{/*             <Row className='bg-warning' >
              <Col sm='auto' xs='auto' className='bg-warning'>
                <div className='w-100'>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>  
                </div>
              </Col>
            </Row> */}
      <Modal className='' size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
          <Modal.Body className=''>
            <SignLogin className=''/>
          </Modal.Body>
      </Modal> 
      </Navbar>
    </Container>
      </div>
      <div className=''>
        <button className='text-light header_button' style={{whiteSpace: "nowrap",background:'#55A0E2'}} onClick={(e)=>handleClick(e)}>Личный кабинет</button>
      </div>
    </div>
    </div>
  )
}

export default Header
